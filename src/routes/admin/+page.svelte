<script>
	import { onMount } from 'svelte';
	import { supabase, isAdmin, logActivity } from '$lib/supabase.js';
	import { brand } from '$lib/brand.js';
	import Wordmark from '$lib/components/Wordmark.svelte';
	import Eyebrow from '$lib/components/Eyebrow.svelte';
	import Rule from '$lib/components/Rule.svelte';

	let phase = $state('loading'); // loading | signin | sent | denied | ready
	let email = $state('');
	let password = $state('');
	let newPassword = $state('');
	let userEmail = $state('');
	let busy = $state(false);
	let toast = $state('');

	let cfg = $state(null);
	let lineup = $state([]);
	let admins = $state([]);
	let subs = $state([]);
	let activity = $state([]);
	let newAdmin = $state('');
	let newItem = $state({ name: '', category: 'Drinks', source: '', description: '' });

	const MODES = [
		{ v: 'live', label: 'Live site', hint: 'Full landing page.' },
		{ v: 'coming_soon', label: 'Coming soon', hint: 'Teaser + email capture.' },
		{ v: 'maintenance', label: 'Maintenance', hint: 'Holding page.' }
	];
	const STAGES = ['Soft Launch', 'Validation', 'Operations', 'Launch'];

	function flash(m) {
		toast = m;
		setTimeout(() => (toast = ''), 2600);
	}

	onMount(async () => {
		supabase.auth.onAuthStateChange((_e, session) => {
			if (session) resolve();
		});
		await resolve();
	});

	async function resolve() {
		const { data } = await supabase.auth.getSession();
		if (!data.session) {
			phase = 'signin';
			return;
		}
		userEmail = data.session.user.email ?? '';
		const ok = await isAdmin();
		if (!ok) {
			phase = 'denied';
			return;
		}
		await loadAll();
		phase = 'ready';
	}

	async function sendLink(e) {
		e.preventDefault();
		if (!email) return;
		busy = true;
		const { error } = await supabase.auth.signInWithOtp({
			email: email.trim(),
			options: { emailRedirectTo: `${location.origin}/admin` }
		});
		busy = false;
		phase = error ? 'signin' : 'sent';
		if (error) flash(error.message);
	}

	async function signInPassword(e) {
		e.preventDefault();
		if (!email || !password) return;
		busy = true;
		const { error } = await supabase.auth.signInWithPassword({
			email: email.trim(),
			password
		});
		busy = false;
		password = '';
		if (error) return flash(error.message);
		await resolve();
	}

	async function setPassword() {
		if (newPassword.length < 8) return flash('Use at least 8 characters');
		busy = true;
		const { error } = await supabase.auth.updateUser({ password: newPassword });
		busy = false;
		if (error) return flash(error.message);
		newPassword = '';
		await logActivity('set account password');
		flash('Password set. You can now sign in with email + password');
	}

	async function signOut() {
		await supabase.auth.signOut();
		cfg = null;
		phase = 'signin';
	}

	async function loadAll() {
		const [c, l, a, s, act] = await Promise.all([
			supabase.from('site_config').select('*').eq('id', 1).single(),
			supabase.from('lineup_items').select('*').order('category').order('sort_order'),
			supabase.from('admins').select('*').order('email'),
			supabase.from('subscribers').select('*').order('created_at', { ascending: false }),
			supabase.from('activity_log').select('*').order('created_at', { ascending: false }).limit(20)
		]);
		cfg = c.data;
		lineup = l.data ?? [];
		admins = a.data ?? [];
		subs = s.data ?? [];
		activity = act.data ?? [];
	}

	async function saveConfig(action) {
		busy = true;
		const { id, updated_at, ...rest } = cfg;
		const { error } = await supabase
			.from('site_config')
			.update({ ...rest, updated_at: new Date().toISOString(), updated_by: userEmail })
			.eq('id', 1);
		busy = false;
		if (error) return flash(error.message);
		await logActivity(action ?? 'updated site config');
		await refreshActivity();
		flash('Saved · published to DB');
	}

	async function refreshActivity() {
		const { data } = await supabase
			.from('activity_log')
			.select('*')
			.order('created_at', { ascending: false })
			.limit(20);
		activity = data ?? [];
	}

	async function toggleItem(item) {
		const { error } = await supabase
			.from('lineup_items')
			.update({ enabled: !item.enabled })
			.eq('id', item.id);
		if (error) return flash(error.message);
		item.enabled = !item.enabled;
		await logActivity(`toggled lineup: ${item.name}`, item.enabled ? 'on' : 'off');
	}

	async function addItem() {
		if (!newItem.name) return;
		const { data, error } = await supabase
			.from('lineup_items')
			.insert({ ...newItem, sort_order: lineup.length })
			.select()
			.single();
		if (error) return flash(error.message);
		lineup = [...lineup, data];
		await logActivity(`added lineup: ${data.name}`);
		newItem = { name: '', category: 'Drinks', source: '', description: '' };
		flash('Product added');
	}

	async function removeItem(item) {
		const { error } = await supabase.from('lineup_items').delete().eq('id', item.id);
		if (error) return flash(error.message);
		lineup = lineup.filter((x) => x.id !== item.id);
		await logActivity(`removed lineup: ${item.name}`);
	}

	async function addAdmin() {
		const e = newAdmin.trim().toLowerCase();
		if (!e) return;
		const { error } = await supabase.from('admins').insert({ email: e });
		if (error) return flash(error.message);
		admins = [...admins, { email: e }];
		await logActivity(`invited admin: ${e}`);
		newAdmin = '';
		flash('Admin added');
	}

	async function removeAdmin(a) {
		if (a.email === userEmail) return flash("You can't remove yourself");
		const { error } = await supabase.from('admins').delete().eq('email', a.email);
		if (error) return flash(error.message);
		admins = admins.filter((x) => x.email !== a.email);
		await logActivity(`removed admin: ${a.email}`);
	}

	function fmt(ts) {
		try {
			return new Date(ts).toLocaleString();
		} catch {
			return ts;
		}
	}
</script>

<svelte:head><title>Admin | Vendr</title><meta name="robots" content="noindex" /></svelte:head>

<div class="shell">
	<header class="top">
		<a href="/" aria-label="Vendr"><Wordmark size={20} /></a>
		<span class="env">Admin · Production</span>
		{#if phase === 'ready'}
			<button class="ghost" onclick={signOut}>Sign out</button>
		{/if}
	</header>

	{#if phase === 'loading'}
		<p class="center muted">Loading…</p>
	{:else if phase === 'signin'}
		<div class="auth">
			<Eyebrow>Restricted</Eyebrow>
			<h1 class="display">Admin access</h1>
			<p class="muted">Dev sessions only. Sign in with your password, or get a one-time email link.</p>
			<form onsubmit={signInPassword} class="authform">
				<input type="email" bind:value={email} placeholder="you@vnta.xyz" autocomplete="username" required />
				<input type="password" bind:value={password} placeholder="Password" autocomplete="current-password" />
				<div class="authrow">
					<button type="submit" disabled={busy}>{busy ? '…' : 'Sign in'}</button>
					<button type="button" class="ghost" onclick={sendLink} disabled={busy}>Email me a link</button>
				</div>
			</form>
			<p class="muted small">No password yet? Use the email link once, then set one under <b>Your account</b>.</p>
		</div>
	{:else if phase === 'sent'}
		<div class="auth">
			<Eyebrow>Check your inbox</Eyebrow>
			<h1 class="display">Link sent</h1>
			<p class="muted">Open the link in <b>{email}</b> on this device to sign in.</p>
		</div>
	{:else if phase === 'denied'}
		<div class="auth">
			<Eyebrow>No access</Eyebrow>
			<h1 class="display">Not an admin</h1>
			<p class="muted">{userEmail} isn't on the allowlist. Ask an owner to invite you.</p>
			<button class="ghost" onclick={signOut}>Use another account</button>
		</div>
	{:else if phase === 'ready' && cfg}
		<main class="panel">
			<!-- SITE STATUS -->
			<section class="card">
				<div class="card-h"><h2 class="display">What the public sees</h2></div>
				<div class="modes">
					{#each MODES as m}
						<button class="mode" class:sel={cfg.site_mode === m.v} onclick={() => (cfg.site_mode = m.v)}>
							<span class="dot {m.v}"></span>
							<b>{m.label}</b>
							<span class="muted">{m.hint}</span>
							<code>site_mode = {m.v}</code>
						</button>
					{/each}
				</div>
				<p class="note">
					Saving updates the database + live preview. The public site is statically prerendered, so a
					mode change goes live on the <b>next deploy</b> (the build reads this value). Use the preview
					switcher on the home page to view any state instantly.
				</p>
				<button class="primary" disabled={busy} onclick={() => saveConfig(`set site_mode → ${cfg.site_mode}`)}>Save</button>
			</section>

			<!-- CONTENT -->
			<section class="card">
				<div class="card-h"><h2 class="display">Live content</h2></div>
				<label class="field"><span>Hero statement</span><input bind:value={cfg.hero_statement} /></label>
				<label class="field"><span>Hero tagline</span><input bind:value={cfg.hero_tagline} /></label>
				<label class="field"><span>Launch label</span><input bind:value={cfg.launch_label} /></label>
				<label class="field"><span>Roadmap stage</span>
					<select bind:value={cfg.roadmap_stage}>{#each STAGES as s}<option>{s}</option>{/each}</select>
				</label>
				<label class="field"><span>Vendr Pass status</span><input bind:value={cfg.pass_status} /></label>
				<button class="primary" disabled={busy} onclick={() => saveConfig('edited content')}>Save content</button>
			</section>

			<!-- FLAGS -->
			<section class="card">
				<div class="card-h"><h2 class="display">Feature flags</h2></div>
				{#each [['flag_email_capture', 'Email capture (Coming Soon)'], ['flag_lineup_section', 'Lineup section'], ['flag_vendr_pass_section', 'Vendr Pass section'], ['flag_analytics', 'Analytics']] as [k, label]}
					<div class="frow"><span>{label}</span>
						<button class="sw" class:on={cfg[k]} onclick={() => (cfg[k] = !cfg[k])} aria-label={label}></button>
					</div>
				{/each}
				<button class="primary" disabled={busy} onclick={() => saveConfig('updated flags')}>Save flags</button>
			</section>

			<!-- MAINTENANCE -->
			<section class="card">
				<div class="card-h"><h2 class="display">Maintenance message</h2></div>
				<label class="field"><span>Status line</span><input bind:value={cfg.maint_status} /></label>
				<label class="field"><span>Back-by (ETA)</span><input bind:value={cfg.maint_eta} /></label>
				<button class="primary" disabled={busy} onclick={() => saveConfig('edited maintenance')}>Save</button>
			</section>

			<!-- LINEUP -->
			<section class="card">
				<div class="card-h"><h2 class="display">Lineup</h2></div>
				{#each lineup as item}
					<div class="frow">
						<span><b>{item.name}</b> <span class="muted">· {item.category}{item.source ? ' · ' + item.source : ''}</span></span>
						<span class="row-actions">
							<button class="sw" class:on={item.enabled} onclick={() => toggleItem(item)} aria-label="enabled"></button>
							<button class="ghost sm" onclick={() => removeItem(item)}>Remove</button>
						</span>
					</div>
				{/each}
				<div class="additem">
					<input placeholder="Product name" bind:value={newItem.name} />
					<input placeholder="Category" bind:value={newItem.category} />
					<input placeholder="Brand / source" bind:value={newItem.source} />
					<button class="primary" onclick={addItem}>Add</button>
				</div>
			</section>

			<!-- ACCESS -->
			<section class="card">
				<div class="card-h"><h2 class="display">Access</h2></div>
				{#each admins as a}
					<div class="frow"><span>{a.email}{a.email === userEmail ? ' · you' : ''}</span>
						{#if a.email !== userEmail}<button class="ghost sm" onclick={() => removeAdmin(a)}>Remove</button>{/if}
					</div>
				{/each}
				<div class="additem">
					<input type="email" placeholder="invite@vnta.xyz" bind:value={newAdmin} />
					<button class="primary" onclick={addAdmin}>Invite</button>
				</div>
			</section>

			<!-- SUBSCRIBERS -->
			<section class="card">
				<div class="card-h"><h2 class="display">Subscribers</h2><span class="count">{subs.length}</span></div>
				{#if subs.length === 0}<p class="muted">No sign-ups yet.</p>{/if}
				{#each subs.slice(0, 12) as s}
					<div class="frow"><span>{s.email}</span><span class="muted">{fmt(s.created_at)}</span></div>
				{/each}
			</section>

			<!-- ACTIVITY -->
			<section class="card">
				<div class="card-h"><h2 class="display">Activity</h2></div>
				{#each activity as a}
					<div class="lrow"><span class="muted">{fmt(a.created_at)}</span><span><b>{a.actor_email ?? '-'}</b> {a.action}{a.detail ? ` · ${a.detail}` : ''}</span></div>
				{/each}
			</section>

			<!-- YOUR ACCOUNT -->
			<section class="card">
				<div class="card-h"><h2 class="display">Your account</h2><span class="count">{userEmail}</span></div>
				<div class="additem">
					<input
						type="password"
						placeholder="Set a new password (min 8 chars)"
						autocomplete="new-password"
						bind:value={newPassword}
					/>
					<button class="primary" disabled={busy} onclick={setPassword}>Set password</button>
				</div>
				<p class="note">Once set, sign in with email + password. No email link needed.</p>
			</section>
		</main>
	{/if}

	{#if toast}<div class="toast">{toast}</div>{/if}
</div>

<style>
	.shell { max-width: 920px; margin: 0 auto; padding: var(--s-24) clamp(var(--s-16), 4vw, var(--s-40)) var(--s-96); }
	.top { display: flex; align-items: center; gap: var(--s-16); padding: var(--s-16) 0 var(--s-24); border-bottom: 1px solid var(--line); }
	.env { font-family: var(--mono); font-size: var(--t-eyebrow); letter-spacing: 0.14em; text-transform: uppercase; color: var(--grey); border: 1px solid var(--line-strong); padding: var(--s-4) var(--s-8); }
	.top a { margin-right: auto; }
	.center { text-align: center; padding: var(--s-96) 0; }
	.muted { color: var(--grey); font-family: var(--mono); font-size: var(--t-small); }
	.display { font-family: var(--serif); font-weight: 400; }

	.auth { max-width: 460px; margin: var(--s-96) auto 0; display: grid; gap: var(--s-16); }
	.auth h1 { font-size: var(--t-36); color: var(--ink); }
	.authform { display: grid; gap: var(--s-8); margin-top: var(--s-8); }
	.authform input, .additem input, .field input, .field select { background: var(--warm); border: 1px solid var(--line-strong); color: var(--ink); font-family: var(--mono); font-size: var(--t-small); padding: var(--s-16); outline: none; }
	.authrow { display: flex; gap: var(--s-8); }
	.authrow button { flex: 1; }
	.authform button.ghost { background: transparent; color: var(--ink); border: 1px solid var(--line-strong); }
	.muted.small { font-size: var(--t-eyebrow); }
	.authform button, .primary { font-family: var(--mono); font-size: var(--t-eyebrow); letter-spacing: var(--ls-eyebrow); text-transform: uppercase; background: var(--ink); color: var(--bg); border: 0; padding: var(--s-16) var(--s-24); cursor: pointer; }
	.primary { padding: var(--s-16) var(--s-24); margin-top: var(--s-8); }
	.ghost { font-family: var(--mono); font-size: var(--t-eyebrow); letter-spacing: 0.14em; text-transform: uppercase; background: transparent; color: var(--ink); border: 1px solid var(--line-strong); padding: var(--s-8) var(--s-16); cursor: pointer; }
	.ghost.sm { font-size: 10px; padding: var(--s-4) var(--s-8); color: var(--grey); }
	button:disabled { opacity: 0.5; cursor: default; }

	.panel { display: grid; gap: var(--s-24); margin-top: var(--s-24); }
	.card { border: 1px solid var(--line); background: var(--panel, #111111); }
	.card-h { display: flex; align-items: center; gap: var(--s-16); padding: var(--s-16) var(--s-24); border-bottom: 1px solid var(--line); }
	.card-h h2 { font-size: var(--t-24); color: var(--ink); margin: 0; }
	.count { margin-left: auto; font-family: var(--mono); font-size: var(--t-small); color: var(--grey); }

	.modes { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--s-16); padding: var(--s-24); }
	.mode { display: grid; gap: var(--s-8); text-align: left; padding: var(--s-16); background: var(--warm); border: 1px solid var(--line-strong); cursor: pointer; color: var(--ink); }
	.mode.sel { border-color: var(--ink); }
	.mode b { font-family: var(--mono); font-size: var(--t-small); }
	.mode code { font-family: var(--mono); font-size: 10px; color: var(--grey-dim); }
	.dot { width: 8px; height: 8px; border-radius: 50%; }
	.dot.live { background: var(--grey); } .dot.coming_soon { background: var(--grey-dim); } .dot.maintenance { background: var(--line-strong); }
	@media (max-width: 640px) { .modes { grid-template-columns: 1fr; } }

	.note { margin: 0 var(--s-24); padding: var(--s-16); border: 1px dashed var(--line-strong); color: var(--grey); font-family: var(--mono); font-size: var(--t-small); line-height: 1.6; }
	.note b { color: var(--ink); }

	.field { display: grid; grid-template-columns: 200px 1fr; gap: var(--s-24); align-items: center; padding: var(--s-16) var(--s-24); border-bottom: 1px solid var(--line); }
	.field span { font-family: var(--mono); font-size: var(--t-small); color: var(--grey); }
	.field input, .field select { width: 100%; }

	.frow { display: flex; align-items: center; justify-content: space-between; gap: var(--s-16); padding: var(--s-16) var(--s-24); border-bottom: 1px solid var(--line); font-family: var(--mono); font-size: var(--t-small); color: var(--ink); }
	.frow b { font-weight: 400; }
	.row-actions { display: inline-flex; gap: var(--s-16); align-items: center; }

	.sw { width: 42px; height: 24px; border-radius: 2px; background: var(--warm); border: 1px solid var(--line-strong); position: relative; cursor: pointer; flex: none; }
	.sw::after { content: ''; position: absolute; top: 2px; left: 2px; width: 18px; height: 18px; background: var(--grey); transition: transform 0.2s, background 0.2s; }
	.sw.on { border-color: var(--ink); }
	.sw.on::after { transform: translateX(18px); background: var(--ink); }

	.additem { display: flex; flex-wrap: wrap; gap: var(--s-8); padding: var(--s-16) var(--s-24); }
	.additem input { flex: 1; min-width: 120px; }

	.primary, button.primary { margin: var(--s-16) var(--s-24) var(--s-24); }
	.card > .primary { display: inline-block; }

	.lrow { display: grid; grid-template-columns: 160px 1fr; gap: var(--s-16); padding: var(--s-8) var(--s-24); border-bottom: 1px solid var(--line); font-family: var(--mono); font-size: var(--t-small); color: var(--grey); }
	.lrow b { color: var(--ink); font-weight: 400; }

	.toast { position: fixed; bottom: var(--s-24); left: 50%; transform: translateX(-50%); background: var(--ink); color: var(--bg); font-family: var(--mono); font-size: var(--t-small); padding: var(--s-16) var(--s-24); z-index: 100; }
</style>
