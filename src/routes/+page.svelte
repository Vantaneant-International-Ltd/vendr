<script lang="ts">
	import { page } from '$app/stores';

	const brand = 'Vendr';
	const tagline = 'Premium Vending Solutions Ireland';
	const launchLine = 'Launching Spring 2026';

	// Contact (single source of truth)
	const contactEmail = 'hello@vendr.ie';
	const contactHref = `mailto:${contactEmail}`;

	// Scope line
	const scope = 'Smart, premium vending for modern workplaces and hospitality.';

	const sampleLineup = {
		introTitle: 'A Sample Vendr Lineup',
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
</script>

<svelte:head>
	<title>Vendr — Coming Soon | Premium Vending Solutions Ireland</title>
	<meta
		name="description"
		content="Vendr is bringing premium, smart vending to Ireland. Launching Spring 2026."
	/>

	<link rel="canonical" href={$page.url.href} />
	<meta name="theme-color" content="#000000" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Vendr — Coming Soon" />
	<meta property="og:description" content="Premium, smart vending solutions for Ireland." />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:image" content={`${$page.url.origin}/og.png`} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Vendr — Coming Soon" />
	<meta name="twitter:description" content="Premium, smart vending solutions for Ireland." />
	<meta name="twitter:image" content={`${$page.url.origin}/og.png`} />
</svelte:head>

<main>
	<!-- Background -->
	<div class="background" aria-hidden="true">
		<img src="/og.png" alt="" class="bg-image" loading="eager" decoding="async" />
		<div class="overlay" />
		<div class="vignette" />
	</div>

	<!-- Content -->
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
				<a class="button" href={contactHref}>Enquire</a>
				<p class="micro">
					For placements and partnerships:
					<a href={contactHref}>{contactEmail}</a>
				</p>
				<p class="launch">{launchLine}</p>
			</div>

			<!-- NEW: Sample lineup -->
			<section class="lineup" aria-label="Sample Vendr lineup">
				<div class="lineup-head">
					<h3 class="lineup-title">{sampleLineup.introTitle}</h3>
					<p class="lineup-sub">{sampleLineup.introSub}</p>
				</div>

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
			</section>

			<div class="divider" aria-hidden="true"></div>

			<footer class="footer">
				<div class="footer-left">
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

				<nav class="footer-right" aria-label="Legal">
					<a href="/privacy">Privacy</a>
					<a href="/terms">Terms</a>
					<a href="/legal">Legal</a>
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

	/* NEW: lineup section */
	.lineup {
		margin: 2.25rem auto 0;
		max-width: 640px;
		text-align: left;
		padding: 1.25rem 1.25rem 1.1rem;
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: 16px;
		background: rgba(0, 0, 0, 0.18);
		backdrop-filter: blur(8px);
	}

	.lineup-head {
		text-align: center;
		margin-bottom: 1rem;
	}

	.lineup-title {
		margin: 0 0 0.5rem 0;
		font-size: 1.1rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		font-weight: 600;
	}

	.lineup-sub {
		margin: 0;
		font-size: 0.92rem;
		color: rgba(255, 255, 255, 0.62);
		line-height: 1.6;
	}

	.lineup-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin-top: 1.1rem;
	}

	.lineup-kicker {
		margin: 0 0 0.6rem 0;
		font-size: 0.85rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.55);
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
		font-size: 0.85rem;
		color: rgba(255, 255, 255, 0.5);
	}

	.divider {
		height: 1px;
		width: 100%;
		margin: 2rem 0 1.25rem;
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
