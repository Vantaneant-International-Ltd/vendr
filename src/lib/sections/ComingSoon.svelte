<script>
	// STATE: coming_soon — CINEMATIC title-card (Vendr's own mood, film-studio /
	// Sony-Entertainment, NOT Éirvox). Full-bleed dark frame: a warm platform
	// light-pool, deep vignette and fine film grain; the "vendr." wordmark
	// emerges from the dark like a studio ident; a restrained capture; and a
	// centered production-card credit. Drop a transit photo at static/hero.jpg
	// and it becomes the hero plate behind the veil — zero code change.
	import { brand, contact } from '$lib/brand.js';

	let email = $state('');
	let done = $state(false);
	let busy = $state(false);
	let error = $state('');
	let hero = $state(true); // becomes false if /hero.jpg is absent

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
		const { subscribe } = await import('$lib/supabase.js');
		const res = await subscribe(value, 'coming_soon');
		busy = false;
		if (!res.ok) {
			error = 'Something went wrong. Try again.';
			return;
		}
		done = true;
	}
</script>

<main class="cs">
	<!-- cinematic plate: optional photo, always veiled + grained -->
	<div class="plate" aria-hidden="true">
		{#if hero}
			<img class="photo" src="/hero.jpg" alt="" onerror={() => (hero = false)} />
		{/if}
		<div class="veil"></div>
		<div class="grain"></div>
	</div>

	<div class="frame">
		<!-- film leader -->
		<header class="leader">
			<span class="reel">Pre-launch</span>
			<span class="reel">{brand.launchLabel}</span>
		</header>

		<!-- the ident -->
		<section class="ident">
			<img class="mark" src="/wordmark.png" alt={brand.name} />

			<div class="capture">
				{#if done}
					<p class="confirm">On the list<span class="bs"> \</span> one note when we open.</p>
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
						<button type="submit" class="btn" disabled={busy} aria-label="Notify me">
							{busy ? '…' : '→'}
						</button>
					</form>
					<span class="micro">{error ? error : 'One message when we open. No noise.'}</span>
				{/if}
			</div>
		</section>

		<!-- production card -->
		<footer class="credit">
			<p class="card">
				<span class="lead">{brand.legalEntity}</span>
				<span>A <a href={brand.parentUrl} target="_blank" rel="noopener">{brand.parent}</a> Company</span>
				<span>Est. {brand.established}</span>
			</p>
			<nav class="meta" aria-label="Footer">
				<a href={brand.affiliate.url} target="_blank" rel="noopener">{brand.affiliate.name}</a>
				<span class="dot"></span>
				<a href={contact.linkedin} target="_blank" rel="noopener">LinkedIn</a>
				<span class="dot"></span>
				<a href="/privacy">Privacy</a>
			</nav>
		</footer>
	</div>
</main>

<style>
	.cs {
		position: relative;
		min-height: 100svh;
		background: var(--vd-ground);
		color: var(--vd-on-ground);
		overflow: hidden;
		isolation: isolate;
	}

	/* ── cinematic plate ──────────────────────────────────────────────────── */
	.plate {
		position: absolute;
		inset: 0;
		z-index: 0;
		/* CSS-only cinematic space when no photo: a faint neutral light-pool over
		   warm black (book grey, no chroma), a faint top fill, sealed by a deep
		   vignette. Monochrome — grey + black only. */
		background:
			radial-gradient(115% 80% at 50% 92%, rgba(154, 155, 150, 0.08), rgba(154, 155, 150, 0) 58%),
			radial-gradient(85% 60% at 50% 12%, rgba(154, 155, 150, 0.05), transparent 60%),
			radial-gradient(150% 120% at 50% 50%, transparent 38%, rgba(5, 4, 3, 0.72) 100%),
			var(--vd-ground);
	}
	.photo {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 62%;
		filter: brightness(0.82) contrast(1.04) saturate(0.9);
	}
	.veil {
		position: absolute;
		inset: 0;
		background:
			linear-gradient(
				to bottom,
				rgba(11, 10, 9, 0.62) 0%,
				rgba(11, 10, 9, 0.32) 34%,
				rgba(11, 10, 9, 0.52) 72%,
				rgba(11, 10, 9, 0.86) 100%
			),
			radial-gradient(140% 110% at 50% 46%, transparent 40%, rgba(4, 3, 2, 0.6) 100%);
	}
	.grain {
		position: absolute;
		inset: -50%;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
		opacity: 0.045;
		mix-blend-mode: overlay;
		pointer-events: none;
	}

	/* ── frame ────────────────────────────────────────────────────────────── */
	.frame {
		position: relative;
		z-index: 1;
		min-height: 100svh;
		display: grid;
		grid-template-rows: auto 1fr auto;
		gap: clamp(28px, 6vh, 56px);
		padding: clamp(22px, 4vh, 40px) clamp(22px, 6vw, 72px) clamp(26px, 4vh, 44px);
		text-align: center;
	}

	/* film leader — two tracked marks, opposite corners */
	.leader {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-family: var(--vd-mono);
		font-size: 10.5px;
		letter-spacing: 0.32em;
		text-transform: uppercase;
		color: var(--vd-faint);
	}
	.leader .reel {
		text-indent: 0.32em;
	}

	/* ident — the studio mark emerging from the dark */
	.ident {
		align-self: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: clamp(22px, 4vh, 38px);
		animation: fade-up 1.5s cubic-bezier(0.16, 0.84, 0.3, 1) both;
	}
	.mark {
		width: clamp(208px, 33vw, 432px);
		height: auto;
		filter: drop-shadow(0 0 46px rgba(244, 243, 240, 0.16))
			drop-shadow(0 14px 40px rgba(0, 0, 0, 0.55));
	}
	.bs {
		color: var(--vd-grey);
	}

	/* capture — restrained, underline only (no box), centered */
	.capture {
		margin-top: clamp(6px, 2vh, 16px);
		width: min(380px, 80vw);
	}
	.form {
		display: flex;
		align-items: stretch;
		gap: 8px;
		border-bottom: 1px solid var(--vd-rule-strong);
		transition: border-color 220ms ease;
	}
	.form:focus-within {
		border-color: var(--vd-grey);
	}
	.input {
		flex: 1;
		min-width: 0;
		background: transparent;
		border: 0;
		color: var(--vd-on-ground);
		font-family: var(--vd-mono);
		font-size: 13px;
		letter-spacing: 0.06em;
		text-align: center;
		padding: 12px 6px 13px;
		outline: none;
	}
	.input::placeholder {
		color: var(--vd-faint);
		letter-spacing: 0.06em;
	}
	.btn {
		flex: 0 0 auto;
		background: transparent;
		border: 0;
		color: var(--vd-grey);
		font-family: var(--vd-mono);
		font-size: 16px;
		line-height: 1;
		padding: 0 6px;
		cursor: pointer;
		transition: color 200ms ease, transform 200ms ease;
	}
	.btn:hover:not(:disabled) {
		color: var(--vd-on-ground);
		transform: translateX(2px);
	}
	.btn:disabled {
		cursor: default;
		opacity: 0.6;
	}
	.micro {
		display: block;
		margin-top: 14px;
		font-family: var(--vd-mono);
		font-size: 10.5px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		text-indent: 0.14em;
		color: var(--vd-faint);
	}
	.confirm {
		font-family: var(--vd-mono);
		font-size: 12px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--vd-grey);
		margin: 0;
	}

	/* production card — the cinematic credit, centered */
	.credit {
		align-self: end;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: clamp(14px, 2.4vh, 22px);
		animation: fade-up 1.5s cubic-bezier(0.16, 0.84, 0.3, 1) 0.5s both;
	}
	.card {
		display: flex;
		flex-direction: column;
		gap: 9px;
		margin: 0;
	}
	.card span {
		font-family: var(--vd-mono);
		font-size: 10px;
		letter-spacing: 0.34em;
		text-transform: uppercase;
		text-indent: 0.34em;
		color: var(--vd-faint);
		line-height: 1.3;
	}
	.card .lead {
		color: var(--vd-grey);
	}
	.card a {
		color: inherit;
		transition: color 200ms ease;
	}
	.card a:hover {
		color: var(--vd-on-ground);
	}
	.meta {
		display: flex;
		align-items: center;
		gap: 12px;
		flex-wrap: wrap;
		justify-content: center;
	}
	.meta a {
		font-family: var(--vd-mono);
		font-size: 10px;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		text-indent: 0.2em;
		color: var(--vd-faint);
		transition: color 200ms ease;
	}
	.meta a:hover {
		color: var(--vd-on-ground);
	}
	.meta .dot {
		width: 2px;
		height: 2px;
		border-radius: 50%;
		background: var(--vd-rule-strong);
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

	@keyframes fade-up {
		from {
			opacity: 0;
			transform: translateY(14px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.ident,
		.credit {
			animation: none;
		}
	}

	/* Mobile — cosy: more air, smaller mark, calm stacked credit. */
	@media (max-width: 600px) {
		.frame {
			gap: 30px;
			padding: 26px 22px 30px;
		}
		.leader {
			font-size: 9.5px;
			letter-spacing: 0.26em;
		}
		.ident {
			gap: 26px;
		}
		.mark {
			width: min(70vw, 280px);
		}
		.card span {
			letter-spacing: 0.26em;
			text-indent: 0.26em;
		}
		.meta {
			gap: 10px;
		}
	}
</style>
