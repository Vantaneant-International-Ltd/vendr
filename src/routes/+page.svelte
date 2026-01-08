<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	const brand = 'Vendr';
	const tagline = 'Premium Vending Solutions Ireland';
	const launchLine = 'Launching Spring 2026';

	const contactEmail = 'hello@vendr.ie';
	const contactHref = `mailto:${contactEmail}`;

	// tighter scope (removes repetitive “vending”)
	const scope = 'Smart, premium retail for modern workplaces and hospitality.';

	// anchor (trust detail)
	const anchor = 'Ireland • Soft launch';

	// assets (use base so this works on GitHub Pages subpaths too)
	const ogImage = `${base}/og.png`;

	// Roadmap (make sure this file exists under /static)
	// Recommended: static/vendr-roadmap-public-fixed.svg
	const roadmapSrc = `${base}/vendr-roadmap-public-fixed.svg`;

	// Social
	const linkedinHref = 'https://www.linkedin.com/company/110655743/';

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

	let lineupOpen = false;
	let pathOpen = false;

	function onLineupToggle(e: Event) {
		const el = e.currentTarget as HTMLDetailsElement;
		lineupOpen = el.open;
	}

	function onPathToggle(e: Event) {
		const el = e.currentTarget as HTMLDetailsElement;
		pathOpen = el.open;
	}
</script>

<svelte:head>
	<title>Vendr — Coming Soon | Premium Vending Solutions Ireland</title>
	<meta
		name="description"
		content="Vendr is bringing premium, smart retail to Ireland. Launching Spring 2026."
	/>
	<link rel="canonical" href={$page.url.href} />
	<meta name="theme-color" content="#000000" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Vendr — Coming Soon" />
	<meta property="og:description" content="Premium, smart retail for Ireland. Launching Spring 2026." />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:image" content={`${$page.url.origin}${ogImage}`} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Vendr — Coming Soon" />
	<meta name="twitter:description" content="Premium, smart retail for Ireland. Launching Spring 2026." />
	<meta name="twitter:image" content={`${$page.url.origin}${ogImage}`} />
</svelte:head>

<main>
	<!-- Background -->
	<div class="background" aria-hidden="true">
		<img src={ogImage} alt="" class="bg-image" loading="eager" decoding="async" />
		<div class="overlay" />
		<div class="vignette" />
	</div>

	<section class="content">
		<div class="container">
			<header class="hero">
				<h1 class="logo">{brand}</h1>
				<p class="tagline">{tagline}</p>
				<p class="anchor">{anchor}</p>
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

			<!-- Supporting sections (demoted) -->
			<section class="support" aria-label="Supporting details">
				<!-- Our Path (collapsible + smaller + open link) -->
				<details class="panel" on:toggle={onPathToggle}>
					<summary class="panel-summary" aria-label="Toggle Vendr path">
						<span class="panel-title">Our path</span>
						<span class="panel-mark" aria-hidden="true">{pathOpen ? '–' : '+'}</span>
					</summary>

					<div class="panel-body">
						<p class="panel-copy">
							A deliberate progression toward premium, unattended retail in Ireland.
							We move by readiness, not noise.
						</p>

						<a class="panel-link" href={roadmapSrc} target="_blank" rel="noopener noreferrer">
							Open full roadmap
						</a>

						<img
							src={roadmapSrc}
							alt="Vendr path to launch"
							class="path-image"
							loading="lazy"
							decoding="async"
						/>
					</div>
				</details>

				<!-- Sample lineup (accordion + plus/minus pill) -->
				<details class="panel" on:toggle={onLineupToggle}>
					<summary class="panel-summary" aria-label="Toggle sample lineup">
						<span class="panel-title">View a sample Vendr lineup</span>
						<span class="panel-mark" aria-hidden="true">{lineupOpen ? '–' : '+'}</span>
					</summary>

					<div class="panel-body">
						<p class="panel-copy">{sampleLineup.introSub}</p>

						<div class="lineup-grid">
							<div class="lineup-col">
								<p class="lineup-kicker">Hydration & Drinks</p>
								<ul class="lineup-list">
									{#each sampleLineup.drinks as item}
										<li class="lineup-item">
											<span class="lineup-name">{item.name}</span>
											<span class="lineup-note">{item.note}</span>
										</li>
									{/each}
								</ul>
							</div>

							<div class="lineup-col">
								<p class="lineup-kicker">Snacks</p>
								<ul class="lineup-list">
									{#each sampleLineup.snacks as item}
										<li class="lineup-item">
											<span class="lineup-name">{item.name}</span>
											<span class="lineup-note">{item.note}</span>
										</li>
									{/each}
								</ul>
							</div>
						</div>

						<p class="lineup-micro">Products shown are indicative of the Vendr range.</p>
					</div>
				</details>
			</section>

			<div class="divider" aria-hidden="true"></div>

			<footer class="footer">
				<div class="footer-left">
					<p class="fine fine-strong">
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
						class="social"
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

	/* Background */
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
		filter: blur(7px);
		transform: scale(1.05);
	}

	.overlay {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.66);
		z-index: 2;
	}

	.vignette {
		position: absolute;
		inset: 0;
		z-index: 3;
		background: radial-gradient(
			80% 60% at 50% 35%,
			rgba(0, 0, 0, 0.12),
			rgba(0, 0, 0, 0.92)
		);
	}

	/* Layout */
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
		max-width: 760px;
		text-align: center;
	}

	.hero {
		margin-bottom: 3.25rem;
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

	.anchor {
		margin: 0.9rem 0 0;
		font-size: 0.78rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.5);
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

	/* CTA */
	.cta {
		display: grid;
		gap: 0.9rem;
		justify-items: center;
		margin-bottom: 2.5rem;
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

	/* Supporting panels */
	.support {
		margin: 0 auto;
		width: 100%;
		max-width: 680px;
		display: grid;
		gap: 1rem;
	}

	.panel {
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: 16px;
		background: rgba(0, 0, 0, 0.16);
		backdrop-filter: blur(8px);
		text-align: left;
		overflow: hidden;
	}

	/* remove default marker */
	.panel summary {
		list-style: none;
	}
	.panel summary::-webkit-details-marker {
		display: none;
	}

	.panel-summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.95rem 1.05rem;
		cursor: pointer;
	}

	.panel-title {
		font-size: 0.82rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.72);
	}

	.panel-mark {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 28px;
		height: 28px;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.22);
		color: rgba(255, 255, 255, 0.72);
		font-size: 1rem;
		line-height: 1;
		flex: 0 0 auto;
	}

	.panel-body {
		padding: 0 1.05rem 1.05rem;
	}

	.panel-copy {
		margin: 0.2rem 0 0.9rem;
		font-size: 0.92rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.62);
	}

	.panel-link {
		display: inline-block;
		margin: 0 0 0.9rem;
		font-size: 0.85rem;
		color: rgba(255, 255, 255, 0.75);
		text-decoration: none;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}

	.panel-link:hover {
		border-bottom-color: rgba(255, 255, 255, 0.55);
	}

	/* Roadmap image (supporting artifact) */
	.path-image {
		width: 100%;
		max-width: 620px;
		display: block;
		margin: 0 auto;
		border-radius: 12px;
		opacity: 0.9;
	}

	/* Lineup */
	.lineup-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin-top: 0.8rem;
	}

	.lineup-kicker {
		margin: 0 0 0.6rem 0;
		font-size: 0.78rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.52);
	}

	.lineup-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		gap: 0.55rem;
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
		font-size: 0.95rem;
		color: rgba(255, 255, 255, 0.88);
	}

	.lineup-note {
		font-size: 0.85rem;
		color: rgba(255, 255, 255, 0.55);
		line-height: 1.45;
	}

	.lineup-micro {
		margin: 0.95rem 0 0;
		text-align: center;
		font-size: 0.82rem;
		color: rgba(255, 255, 255, 0.48);
	}

	/* Divider + Footer */
	.divider {
		height: 1px;
		width: 100%;
		margin: 2.25rem 0 1.25rem;
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

	.social {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 28px;
		height: 28px;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.16);
		color: rgba(255, 255, 255, 0.65);
	}

	.social:hover {
		color: rgba(255, 255, 255, 0.9);
		border-color: rgba(255, 255, 255, 0.28);
	}

	.fine {
		margin: 0;
		font-size: 0.85rem;
		color: rgba(255, 255, 255, 0.5);
		line-height: 1.5;
	}

	.fine-strong {
		color: rgba(255, 255, 255, 0.62);
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
