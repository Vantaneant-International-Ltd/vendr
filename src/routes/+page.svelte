<script lang="ts">
	import { page } from '$app/stores';

	const brand = 'Vendr';
	const tagline = 'Premium Vending Solutions Ireland';
	const launchLine = 'Launching Spring 2026';

	const contactEmail = 'hello@vendr.ie';
	const contactHref = `mailto:${contactEmail}`;

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
				<a class="button" href={contactHref}>Enquire</a>
				<p class="micro">
					For placements and partnerships:
					<a href={contactHref}>{contactEmail}</a>
				</p>
				<p class="launch">{launchLine}</p>
			</div>

			<!-- Our Path (demoted, contextual) -->
			<section class="path">
				<p class="path-kicker">Our Path</p>
				<p class="path-copy">
					A deliberate progression toward premium, unattended retail in Ireland.
					We move by readiness, not noise.
				</p>
				<img
					src="/vendr-roadmap-public.svg"
					alt="Vendr path to launch"
					class="path-image"
				/>
			</section>

			<!-- Sample lineup (softened) -->
			<section class="lineup">
				<h3 class="lineup-title">{sampleLineup.introTitle}</h3>
				<p class="lineup-sub">{sampleLineup.introSub}</p>

				<div class="lineup-grid">
					<div>
						<p class="lineup-kicker">Hydration & Drinks</p>
						<ul class="lineup-list">
							{#each sampleLineup.drinks as item}
								<li>
									<strong>{item.name}</strong>
									<span>{item.note}</span>
								</li>
							{/each}
						</ul>
					</div>

					<div>
						<p class="lineup-kicker">Snacks</p>
						<ul class="lineup-list">
							{#each sampleLineup.snacks as item}
								<li>
									<strong>{item.name}</strong>
									<span>{item.note}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>

				<p class="lineup-micro">Products shown are indicative of the Vendr range.</p>
			</section>

			<div class="divider"></div>

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

				<nav class="footer-right">
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
	/* hierarchy + restraint tweaks only */
	.path {
		margin: 3rem auto 0;
		max-width: 640px;
		text-align: center;
		opacity: 0.85;
	}

	.path-kicker {
		text-transform: uppercase;
		letter-spacing: 0.18em;
		font-size: 0.75rem;
		color: rgba(255,255,255,0.55);
		margin-bottom: 0.5rem;
	}

	.path-copy {
		font-size: 0.95rem;
		color: rgba(255,255,255,0.65);
		margin-bottom: 1.5rem;
	}

	.path-image {
		width: 100%;
		border-radius: 12px;
		opacity: 0.9;
	}

	.lineup {
		margin: 3.5rem auto 0;
		max-width: 640px;
		opacity: 0.9;
	}

	.lineup-title {
		text-align: center;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		font-size: 0.9rem;
		margin-bottom: 0.5rem;
	}

	.lineup-sub {
		text-align: center;
		font-size: 0.9rem;
		color: rgba(255,255,255,0.6);
		margin-bottom: 1.5rem;
	}

	.lineup-list {
		list-style: none;
		padding: 0;
		display: grid;
		gap: 0.6rem;
	}

	.lineup-list li {
		font-size: 0.9rem;
		color: rgba(255,255,255,0.7);
	}

	.lineup-list span {
		display: block;
		font-size: 0.8rem;
		color: rgba(255,255,255,0.5);
	}

	.divider {
		margin: 3rem 0 2rem;
		height: 1px;
		background: rgba(255,255,255,0.12);
	}
</style>
