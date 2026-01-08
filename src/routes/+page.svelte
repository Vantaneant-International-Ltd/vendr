<script lang="ts">
	import { page } from '$app/stores';

	const brand = 'Vendr';
	const tagline = 'Premium Vending Solutions Ireland';
	const launchLine = 'Launching Spring 2026';

	const contactEmail = 'hello@vendr.ie';
	const contactHref = `mailto:${contactEmail}`;

	const scope = 'Smart, premium vending for modern workplaces and hospitality.';

	const sampleLineup = {
		introSub:
			'A curated selection of Irish-first, premium refreshments. Availability varies by location and season.',
		drinks: [
			{ name: 'BLK Water', note: 'Mineral-rich alkaline water' },
			{ name: 'Ballygowan Still', note: 'Irish natural spring water' },
			{ name: 'Ballygowan Sparkling', note: 'Irish sparkling spring water' },
			{ name: 'Actiph Alkaline 8.0+', note: 'Functional hydration' },
			{ name: 'San Pellegrino Limonata', note: 'Premium citrus soft drink' }
		],
		snacks: [
			{ name: "Keogh’s Sweet Chilli & Irish Red Pepper", note: 'Irish artisan crisps' },
			{ name: "Keogh’s Shamrock & Sour Cream", note: 'Irish artisan crisps' },
			{ name: 'Butlers Chocolate Bar', note: 'Irish chocolate' },
			{ name: 'Fulfil Protein Bar', note: 'High-protein, low sugar' },
			{ name: 'Graze Savoury Snack', note: 'Portion-controlled snacking' }
		]
	};

	const linkedinHref = 'https://www.linkedin.com/company/110655743/';
</script>

<svelte:head>
	<title>Vendr — Coming Soon | Premium Vending Solutions Ireland</title>
	<meta
		name="description"
		content="Vendr is bringing premium, smart vending to Ireland. Launching Spring 2026."
	/>
	<link rel="canonical" href={$page.url.href} />
	<meta name="theme-color" content="#000000" />
</svelte:head>

<main>
	<!-- Background -->
	<div class="background" aria-hidden="true">
		<img src="/og.png" alt="" class="bg-image" loading="eager" decoding="async" />
		<div class="overlay" />
		<div class="vignette" />
	</div>

	<section class="content">
		<div class="container">
			<header class="hero">
				<h1 class="logo">{brand}</h1>
				<p class="tagline">{tagline}</p>
			</header>

			<div class="stack">
				<h2 class="title">Coming Soon</h2>
				<p class="description">We’re bringing premium vending solutions to Ireland.</p>
				<p class="scope">{scope}</p>
			</div>

			<div class="cta">
				<a class="button" href={contactHref}>Discuss a placement</a>
				<p class="micro">
					Institutional enquiries:
					<a href={contactHref}>{contactEmail}</a>
				</p>
				<p class="launch">{launchLine}</p>
			</div>

			<!-- Our Path (supporting, demoted) -->
			<section class="path" aria-label="Vendr path to launch">
				<p class="path-kicker">Our Path</p>
				<p class="path-copy">
					A deliberate progression toward premium, unattended retail in Ireland.
					We move by readiness, not noise.
				</p>
				<img
					src="/vendr-roadmap-public-fixed.svg"
					alt="Vendr path to launch"
					class="path-image"
					loading="lazy"
					decoding="async"
				/>
			</section>

			<!-- Sample lineup (collapsed) -->
			<details class="lineup">
				<summary class="lineup-summary">View a sample Vendr lineup</summary>

				<div class="lineup-inner">
					<p class="lineup-sub">{sampleLineup.introSub}</p>

					<div class="lineup-grid">
						<div>
							<p class="lineup-kicker">Hydration & Drinks</p>
							<ul class="lineup-list">
								{#each sampleLineup.drinks as item}
									<li class="lineup-item">
										<strong class="lineup-name">{item.name}</strong>
										<span class="lineup-note">{item.note}</span>
									</li>
								{/each}
							</ul>
						</div>

						<div>
							<p class="lineup-kicker">Snacks</p>
							<ul class="lineup-list">
								{#each sampleLineup.snacks as item}
									<li class="lineup-item">
										<strong class="lineup-name">{item.name}</strong>
										<span class="lineup-note">{item.note}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>

					<p class="lineup-micro">Products shown are indicative of the Vendr range.</p>
				</div>
			</details>

			<div class="divider" aria-hidden="true"></div>

			<footer class="footer">
				<div class="footer-left">
					<p class="fine">
						Vendr Pass — a rewards system designed to make premium vending feel fair.
					</p>
					<p class="fine">
						© {new Date().getFullYear()} Atlas Refreshments Ltd. All rights reserved.
					</p>
					<p class="fine">
						Vendr is a trading name of Atlas Refreshments Ltd. Part of
						<a
							href="https://www.vnta.xyz"
							target="_blank"
							rel="noopener noreferrer"
							class="fine-link"
						>
							VNTA
						</a>.
					</p>
				</div>

				<nav class="footer-right" aria-label="Legal and social">
					<a href="/privacy">Privacy</a>
					<a href="/terms">Terms</a>
					<a href="/legal">Legal</a>
					<a
						href={linkedinHref}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Vendr on LinkedIn"
					>
						in
					</a>
				</nav>
			</footer>
		</div>
	</section>
</main>

<style>
	:global(body) {
		margin: 0;
		background: #000;
		color: #fff;
	}

	main {
		position: relative;
		min-height: 100vh;
		overflow: hidden;
	}

	.background {
		position: absolute;
		inset: 0;
		z-index: 1;
	}

	.bg-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.55;
		filter: blur(8px);
		transform: scale(1.05);
	}

	.overlay {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.6);
		z-index: 2;
	}

	.vignette {
		position: absolute;
		inset: 0;
		z-index: 3;
		background: radial-gradient(
			80% 60% at 50% 35%,
			rgba(0, 0, 0, 0.15),
			rgba(0, 0, 0, 0.9)
		);
	}

	.content {
		position: relative;
		z-index: 4;
		min-height: 100vh;
		display: grid;
		place-items: center;
		padding: 2.5rem 1.5rem;
	}

	.container {
		width: 100%;
		max-width: 720px;
		text-align: center;
	}

	.hero {
		margin-bottom: 3.5rem;
	}

	.logo {
		font-size: clamp(2.4rem, 6vw, 4rem);
		font-weight: 800;
		letter-spacing: 0.32em;
		margin: 0 0 0.6rem 0;
		text-transform: uppercase;
	}

	.tagline {
		margin: 0;
		font-size: 0.95rem;
		letter-spacing: 0.12em;
		color: rgba(255, 255, 255, 0.65);
	}

	.stack {
		margin: 0 auto 2.25rem;
		max-width: 560px;
	}

	.title {
		font-size: clamp(1.9rem, 5vw, 3rem);
		font-weight: 300;
		margin: 0 0 1rem 0;
	}

	.description {
		margin: 0 0 0.75rem 0;
		font-size: 1.05rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.75);
	}

	.scope {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.62);
	}

	.cta {
		display: grid;
		gap: 0.9rem;
		justify-items: center;
		margin-bottom: 2.25rem;
	}

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		height: 44px;
		padding: 0 1.2rem;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.45);
		background: rgba(0, 0, 0, 0.25);
		color: #fff;
		text-decoration: none;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		font-size: 0.82rem;
		backdrop-filter: blur(6px);
	}

	.button:hover {
		border-color: rgba(255, 255, 255, 0.75);
		background: rgba(0, 0, 0, 0.35);
	}

	.micro {
		margin: 0;
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.62);
	}

	.micro a {
		color: rgba(255, 255, 255, 0.85);
		text-decoration: none;
		border-bottom: 1px solid rgba(255, 255, 255, 0.25);
	}

	.micro a:hover {
		border-bottom-color: rgba(255, 255, 255, 0.6);
	}

	.launch {
		margin: 0;
		font-size: 0.88rem;
		color: rgba(255, 255, 255, 0.55);
		letter-spacing: 0.06em;
	}

	/* Our Path (supporting) */
	.path {
		margin: 3rem auto 0;
		max-width: 600px;
		text-align: center;
		opacity: 0.75;
	}

	.path-kicker {
		text-transform: uppercase;
		letter-spacing: 0.18em;
		font-size: 0.7rem;
		color: rgba(255, 255, 255, 0.55);
		margin-bottom: 0.5rem;
	}

	.path-copy {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.6);
		margin-bottom: 1.25rem;
	}

	.path-image {
		width: 100%;
		border-radius: 12px;
		opacity: 0.85;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: rgba(0, 0, 0, 0.12);
	}

	/* Sample lineup accordion */
	.lineup {
		margin: 2.75rem auto 0;
		max-width: 640px;
	}

	/* remove default marker so it feels designed */
	.lineup-summary::-webkit-details-marker {
		display: none;
	}

	.lineup-summary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.6rem;
		padding: 0.65rem 0.9rem;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.14);
		background: rgba(0, 0, 0, 0.14);
		cursor: pointer;
		font-size: 0.85rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.65);
		transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
	}

	.lineup-summary:hover {
		border-color: rgba(255, 255, 255, 0.28);
		background: rgba(0, 0, 0, 0.22);
		color: rgba(255, 255, 255, 0.85);
	}

	/* + / – indicator (your preference) */
	.lineup-summary::after {
		content: '+';
		font-size: 0.95rem;
		opacity: 0.7;
		transform: translateY(-1px);
	}

	.lineup[open] .lineup-summary::after {
		content: '–';
		opacity: 0.85;
	}

	/* Animate the open (fade + slight slide) */
	.lineup-inner {
		margin-top: 1.5rem;
		opacity: 0;
		transform: translateY(-6px);
		transition: opacity 180ms ease, transform 180ms ease;
	}

	.lineup[open] .lineup-inner {
		opacity: 1;
		transform: translateY(0);
	}

	.lineup-sub {
		text-align: center;
		font-size: 0.85rem;
		color: rgba(255, 255, 255, 0.6);
		margin: 0 0 1.25rem 0;
		line-height: 1.65;
	}

	.lineup-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.25rem;
	}

	.lineup-kicker {
		font-size: 0.75rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.5);
		margin: 0 0 0.6rem 0;
	}

	.lineup-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		gap: 0.6rem;
	}

	.lineup-item {
		display: grid;
		gap: 0.2rem;
		padding: 0.65rem 0.7rem;
		border-radius: 12px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: rgba(255, 255, 255, 0.03);
	}

	.lineup-name {
		font-size: 0.92rem;
		color: rgba(255, 255, 255, 0.86);
		font-weight: 600;
	}

	.lineup-note {
		font-size: 0.82rem;
		color: rgba(255, 255, 255, 0.52);
		line-height: 1.45;
	}

	.lineup-micro {
		margin: 1.1rem 0 0;
		text-align: center;
		font-size: 0.75rem;
		color: rgba(255, 255, 255, 0.45);
	}

	.divider {
		margin: 3rem 0 1.75rem;
		height: 1px;
		background: rgba(255, 255, 255, 0.12);
	}

	.footer {
		display: flex;
		gap: 1.25rem;
		justify-content: space-between;
		align-items: flex-end;
		flex-wrap: wrap;
	}

	.footer-left {
		text-align: left;
		min-width: 260px;
	}

	.footer-right {
		display: inline-flex;
		gap: 1rem;
		flex-wrap: wrap;
		align-items: center;
	}

	.footer-right a {
		color: rgba(255, 255, 255, 0.65);
		text-decoration: none;
		font-size: 0.88rem;
		letter-spacing: 0.04em;
	}

	.footer-right a:hover {
		color: rgba(255, 255, 255, 0.9);
	}

	.fine {
		margin: 0;
		font-size: 0.85rem;
		color: rgba(255, 255, 255, 0.5);
		line-height: 1.5;
	}

	.fine-link {
		color: rgba(255, 255, 255, 0.72);
		text-decoration: none;
		margin-left: 0.25em;
	}

	.fine-link:hover {
		text-decoration: underline;
	}

	@media (max-width: 740px) {
		.lineup-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 640px) {
		.footer-left {
			text-align: center;
			width: 100%;
		}
		.footer {
			justify-content: center;
			align-items: center;
		}
	}
</style>
