<script>
	// STATE: coming_soon — on-brand (Felixto book): monochrome, heavy grotesk
	// headline + mono technical labels, the "\" motif, structured/left-aligned
	// like a brand-book page. No serif, no chroma. Distinct from Éirvox.
	import { brand, contact } from '$lib/brand.js';
	import { subscribe } from '$lib/supabase.js';
	import Wordmark from '$lib/components/Wordmark.svelte';

	let email = $state('');
	let done = $state(false);
	let busy = $state(false);
	let error = $state('');

	const valid = (e) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e);

	async function submit(e) {
		e.preventDefault();
		if (busy) return;
		error = '';
		const value = email.trim();
		if (!valid(value)) {
			error = 'Enter a valid email.';
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
	<header class="bar top rise">
		<a href="/" aria-label={brand.name}><Wordmark size={24} /></a>
		<span class="tag">{brand.tagline}</span>
	</header>

	<section class="core">
		<span class="marker rise d1">Pre-launch <span class="bs">\</span> {brand.launchLabel}</span>

		<h1 class="headline rise d2">Where vending evolves <span class="bs">\</span></h1>

		<p class="lede rise d3">
			A quieter, more considered form of retail — curated products, reliable infrastructure, and
			thoughtful placement across Ireland's workplaces and hospitality spaces.
		</p>

		<div class="capture rise d4">
			{#if done}
				<p class="confirm">On the list <span class="bs">\</span> one note when we open.</p>
			{:else}
				<form class="form" onsubmit={submit}>
					<label class="sr-only" for="cs-email">Email address</label>
					<input
						id="cs-email"
						type="email"
						class="input"
						placeholder="you@company.ie"
						bind:value={email}
						autocomplete="email"
						disabled={busy}
						required
					/>
					<button type="submit" class="btn" disabled={busy}>{busy ? 'Sending' : 'Notify me'}</button>
				</form>
				<span class="micro">{error ? error : 'Join the list — no noise. One message when we open.'}</span>
			{/if}
		</div>
	</section>

	<footer class="foot rise d4">
		<div class="credit">
			<span class="lead">{brand.legalEntity}</span>
			<span>A <a href={brand.parentUrl} target="_blank" rel="noopener">{brand.parent}</a> Company</span>
			<span>
				In affiliation with
				<a href={brand.affiliate.url} target="_blank" rel="noopener">{brand.affiliate.name}</a>
			</span>
			<span>Est. {brand.established}</span>
		</div>
		<nav class="links" aria-label="Footer">
			<a href="/privacy">Privacy</a>
			<a href="/terms">Terms</a>
			<a href="/legal">Legal</a>
			<a href={contact.linkedin} target="_blank" rel="noopener">LinkedIn</a>
			<a class="staff" href="/admin">Staff</a>
		</nav>
	</footer>
</main>

<style>
	.cs {
		min-height: 100svh;
		background: var(--vd-ground);
		color: var(--vd-on-ground);
		display: flex;
		flex-direction: column;
		padding: clamp(20px, 4vw, 40px) clamp(20px, 6vw, 80px);
		gap: clamp(40px, 8vh, 96px);
	}

	/* technical header / footer bars */
	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--s-24);
		flex-wrap: wrap;
	}
	.tag {
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--vd-faint);
	}

	/* core block — left aligned, vertically centred */
	.core {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		max-width: 1000px;
	}
	.marker {
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--vd-grey);
		margin-bottom: clamp(20px, 4vh, 36px);
	}
	.headline {
		font-family: var(--vd-display);
		font-weight: 500;
		font-size: clamp(34px, 6.2vw, 84px);
		line-height: 1.03;
		letter-spacing: -0.02em;
		color: var(--vd-on-ground);
		max-width: 15ch;
		margin: 0;
	}
	.bs {
		color: var(--vd-grey);
		font-weight: 500;
		-webkit-text-fill-color: var(--vd-grey);
	}
	.lede {
		font-family: var(--vd-mono);
		font-size: clamp(13px, 1.3vw, 15px);
		line-height: 1.7;
		color: var(--vd-muted);
		max-width: 56ch;
		margin: clamp(24px, 4vh, 36px) 0 0;
	}

	/* capture */
	.capture {
		margin-top: clamp(32px, 5vh, 48px);
	}
	.form {
		display: flex;
		gap: 10px;
		max-width: 440px;
	}
	.input {
		flex: 1;
		min-width: 0;
		background: rgba(154, 155, 150, 0.06);
		border: 1px solid var(--vd-rule-strong);
		border-radius: 0;
		color: var(--vd-on-ground);
		font-family: var(--vd-mono);
		font-size: 13px;
		letter-spacing: 0.02em;
		padding: 14px 16px;
		outline: none;
		transition: border-color 200ms ease;
	}
	.input::placeholder {
		color: var(--vd-faint);
	}
	.input:focus {
		border-color: var(--vd-grey);
	}
	.btn {
		background: var(--vd-on-ground);
		color: var(--vd-ground);
		border: 1px solid var(--vd-on-ground);
		border-radius: 0;
		font-family: var(--vd-mono);
		font-size: 11px;
		font-weight: 500;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		padding: 0 22px;
		cursor: pointer;
		white-space: nowrap;
		transition: opacity 200ms ease;
	}
	.btn:hover {
		opacity: 0.86;
	}
	.btn:disabled {
		opacity: 0.6;
		cursor: default;
	}
	.micro {
		display: block;
		margin-top: 14px;
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.04em;
		color: var(--vd-faint);
	}
	.confirm {
		font-family: var(--vd-mono);
		font-size: 14px;
		letter-spacing: 0.02em;
		color: var(--vd-on-ground);
	}

	/* footer — centered cinematic production card */
	.foot {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: clamp(20px, 3vh, 30px);
	}
	.credit {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.credit span {
		font-family: var(--vd-mono);
		font-size: 10px;
		letter-spacing: 0.26em;
		text-transform: uppercase;
		color: var(--vd-faint);
		line-height: 1.4;
		text-indent: 0.26em; /* optical-centre the tracked text */
	}
	.credit .lead {
		color: var(--vd-grey);
	}
	.credit a {
		color: var(--vd-grey);
		transition: color 200ms ease;
	}
	.credit a:hover {
		color: var(--vd-on-ground);
	}

	/* footer links */
	.links {
		display: flex;
		gap: clamp(16px, 2.4vw, 30px);
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
	.links a {
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--vd-faint);
		transition: color 200ms ease;
	}
	.links a:hover {
		color: var(--vd-on-ground);
	}
	.staff {
		color: var(--vd-grey) !important;
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

	/* subtle, quick rise-fade (not theatrical) */
	.rise {
		opacity: 0;
		transform: translateY(10px);
		animation: cs-rise 0.55s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
	}
	.d1 {
		animation-delay: 0.05s;
	}
	.d2 {
		animation-delay: 0.13s;
	}
	.d3 {
		animation-delay: 0.21s;
	}
	.d4 {
		animation-delay: 0.29s;
	}
	@keyframes cs-rise {
		to {
			opacity: 1;
			transform: none;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.rise {
			animation: none;
			opacity: 1;
			transform: none;
		}
	}

	/* Mobile — cosy, never dense or stressful. More air, calmer type,
	   stacked footer, just the mark up top. */
	@media (max-width: 600px) {
		.cs {
			padding: 28px 22px 34px;
			gap: 40px;
		}
		.top .tag {
			display: none;
		}
		.marker {
			margin-bottom: 22px;
		}
		.headline {
			font-size: clamp(30px, 8.5vw, 40px);
			line-height: 1.08;
			max-width: 18ch;
		}
		.lede {
			font-size: 13.5px;
			line-height: 1.75;
			margin-top: 22px;
		}
		.capture {
			margin-top: 32px;
		}
		.form {
			flex-direction: column;
		}
		.btn {
			padding: 15px 22px;
		}
		.links {
			gap: 14px 22px;
		}
		.credit span {
			letter-spacing: 0.2em;
			text-indent: 0.2em;
		}
	}
</style>
