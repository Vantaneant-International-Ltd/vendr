<script>
	// STATE: coming_soon — v2 (Éirvox-inspired): warm dark ground, Inter Tight,
	// Newsreader-italic editorial line, champagne accent, underline-only capture,
	// staggered "film title-card" fade-in. Vendr brand + content.
	import { brand, contact } from '$lib/brand.js';
	import { subscribe } from '$lib/supabase.js';
	import Wordmark from '$lib/components/Wordmark.svelte';

	let email = $state('');
	let done = $state(false);
	let busy = $state(false);
	let error = $state('');

	function valid(e) {
		return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e);
	}

	async function submit(e) {
		e.preventDefault();
		if (busy) return;
		error = '';
		const value = email.trim();
		if (!valid(value)) {
			error = 'Please enter a valid email.';
			return;
		}
		busy = true;
		const res = await subscribe(value, 'coming_soon');
		busy = false;
		if (!res.ok) {
			error = 'Something went wrong — try again.';
			return;
		}
		done = true;
	}
</script>

<main class="cs">
	<div class="inner">
		<div class="fade fade-1"><Wordmark size={64} /></div>

		<p class="statement fade fade-2">{brand.statement}</p>

		<p class="lede fade fade-2">
			A quieter, more considered form of retail for Ireland's workplaces and hospitality spaces.
		</p>

		<div class="group fade fade-3">
			<span class="rule" aria-hidden="true"></span>
			<span class="eyebrow">Launching {brand.launchLabel}</span>

			{#if done}
				<p class="confirm">You're on the list. One note when we open.</p>
			{:else}
				<form class="form" onsubmit={submit}>
					<label class="sr-only" for="cs-email">Email address</label>
					<input
						id="cs-email"
						type="email"
						class="input"
						placeholder="Your email"
						bind:value={email}
						autocomplete="email"
						disabled={busy}
						required
					/>
					<button type="submit" class="btn" disabled={busy}>{busy ? 'Sending…' : 'Notify me'}</button>
				</form>
				{#if error}<p class="error" role="alert">{error}</p>{/if}
			{/if}
		</div>

		<footer class="foot fade fade-4">
			<span class="entity">{brand.legalEntity} · A {brand.parent} company</span>
			<nav class="legal" aria-label="Legal">
				<a href="/privacy">Privacy</a><span aria-hidden="true">·</span>
				<a href="/terms">Terms</a><span aria-hidden="true">·</span>
				<a href="/legal">Legal</a>
			</nav>
			<div class="social">
				<a href={contact.linkedin} target="_blank" rel="noopener" aria-label="Vendr on LinkedIn">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zM8.3 18H5.7V9.7h2.6V18zM7 8.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM18.3 18h-2.6v-4.2c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3 1-.1.2-.1.4-.1.7V18h-2.6V9.7H13v1.1c.4-.6 1-1.3 2.2-1.3 1.6 0 3 1 3 3.3V18z" />
					</svg>
				</a>
				<a class="staff" href="/admin">Staff</a>
			</div>
		</footer>
	</div>
</main>

<style>
	.cs {
		min-height: 100svh;
		background: var(--vd-ground);
		color: var(--vd-on-ground);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 64px 24px;
	}
	.inner {
		width: 100%;
		max-width: 540px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.statement {
		font-family: var(--vd-editorial);
		font-style: italic;
		font-size: clamp(28px, 5vw, 44px);
		line-height: 1.12;
		color: var(--vd-on-ground);
		margin: 28px 0 0;
	}
	.lede {
		font-family: var(--vd-display);
		font-weight: 400;
		font-size: 15px;
		line-height: 1.6;
		color: var(--vd-muted);
		margin: 18px 0 0;
		max-width: 400px;
	}

	.group {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		margin: 48px 0 56px;
	}
	.rule {
		width: 120px;
		height: 1px;
		background: var(--vd-rule);
		margin-bottom: 22px;
	}
	.eyebrow {
		font-family: var(--vd-mono);
		font-size: 11px;
		font-weight: 500;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--vd-champagne);
		margin-bottom: 22px;
	}

	.form {
		display: flex;
		align-items: flex-end;
		gap: 12px;
		width: 100%;
		max-width: 420px;
	}
	.input {
		flex: 1;
		min-width: 0;
		background: transparent;
		border: none;
		border-bottom: 1px solid var(--vd-faint);
		border-radius: 0;
		color: var(--vd-on-ground);
		font-family: var(--vd-display);
		font-size: 15px;
		padding: 9px 2px;
		outline: none;
		transition: border-color 200ms ease;
	}
	.input::placeholder {
		color: var(--vd-faint);
	}
	.input:focus {
		border-bottom-color: var(--vd-on-ground);
	}
	.input:disabled {
		opacity: 0.6;
	}
	.btn {
		background: var(--vd-champagne);
		color: #1a1714;
		border: none;
		border-radius: 2px;
		font-family: var(--vd-display);
		font-size: 14px;
		font-weight: 500;
		padding: 11px 24px;
		cursor: pointer;
		white-space: nowrap;
		transition: opacity 200ms ease;
	}
	.btn:hover {
		opacity: 0.85;
	}
	.btn:disabled {
		opacity: 0.6;
		cursor: default;
	}
	.error {
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.03em;
		color: #c98b7b;
		margin-top: 14px;
	}
	.confirm {
		font-family: var(--vd-display);
		font-size: 15px;
		color: var(--vd-on-ground);
		padding: 8px 0;
	}

	.foot {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 14px;
	}
	.entity {
		font-family: var(--vd-mono);
		font-size: 10px;
		letter-spacing: 0.05em;
		color: var(--vd-faint);
	}
	.legal {
		display: flex;
		gap: 8px;
		font-family: var(--vd-mono);
		font-size: 10px;
		letter-spacing: 0.05em;
		color: var(--vd-faint);
	}
	.legal a {
		color: var(--vd-faint);
		transition: color 200ms ease;
	}
	.legal a:hover {
		color: var(--vd-champagne);
	}
	.social {
		display: flex;
		align-items: center;
		gap: 18px;
	}
	.social a {
		display: inline-flex;
		align-items: center;
		color: var(--vd-faint);
		transition: color 200ms ease;
	}
	.social a:hover {
		color: var(--vd-champagne);
	}
	.staff {
		font-family: var(--vd-mono);
		font-size: 10px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
	}

	/* Staggered title-card fade-in */
	.fade {
		opacity: 0;
		animation: cs-fade 0.8s ease-out forwards;
	}
	.fade-1 {
		animation-duration: 1.2s;
		animation-delay: 0.3s;
	}
	.fade-2 {
		animation-delay: 1s;
	}
	.fade-3 {
		animation-delay: 1.5s;
	}
	.fade-4 {
		animation-duration: 0.6s;
		animation-delay: 2s;
	}
	@keyframes cs-fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.fade {
			animation: none;
			opacity: 1;
		}
	}

	@media (max-width: 600px) {
		.cs {
			padding: 48px 20px;
		}
		.form {
			flex-direction: column;
			align-items: stretch;
			gap: 14px;
		}
		.input {
			text-align: center;
		}
		.btn {
			width: 100%;
		}
	}
</style>
