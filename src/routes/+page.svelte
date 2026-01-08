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

			<!-- Sample lineup (collapsed, discoverable) -->
			<details class="lineup">
				<summary class="lineup-summary">
					View a sample Vendr lineup
				</summary>

				<div class="lineup-inner">
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

					<p class="lineup-micro">
						Products shown are indicative of the Vendr range.
					</p>
				</div>
			</details>

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
	/* supporting path */
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
		color: rgba(255,255,255,0.55);
		margin-bottom: 0.5rem;
	}

	.path-copy {
		font-size: 0.9rem;
		color: rgba(255,255,255,0.6);
		margin-bottom: 1.25rem;
	}

	.path-image {
		width: 100%;
		border-radius: 12px;
		opacity: 0.85;
	}

	/* Lineup accordion */
	.lineup {
		margin: 3.5rem auto 0;
		max-width: 640px;
	}

	.lineup-summary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.6rem;
		padding: 0.65rem 0.9rem;
		border-radius: 999px;
		border: 1px solid rgba(255,255,255,0.14);
		background: rgba(0,0,0,0.14);
		cursor: pointer;
		font-size: 0.85rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(255,255,255,0.65);
		transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
	}

	.lineup-summary:hover {
		border-color: rgba(255,255,255,0.28);
		background: rgba(0,0,0,0.22);
		color: rgba(255,255,255,0.85);
	}

	.lineup-summary::after {
		content: '▾';
		font-size: 0.9rem;
		opacity: 0.7;
		transform: translateY(-1px);
	}

	.lineup[open] .lineup-summary::after {
		content: '▴';
		opacity: 0.8;
	}

	.lineup-inner {
		margin-top: 1.5rem;
	}

	.lineup-sub {
		text-align: center;
		font-size: 0.85rem;
		color: rgba(255,255,255,0.6);
		margin-bottom: 1.5rem;
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
		color: rgba(255,255,255,0.5);
		margin-bottom: 0.5rem;
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

	.lineup-micro {
		margin-top: 1.2rem;
		text-align: center;
		font-size: 0.75rem;
		color: rgba(255,255,255,0.45);
	}

	.divider {
		margin: 3rem 0 2rem;
		height: 1px;
		background: rgba(255,255,255,0.12);
	}

	@media (max-width: 640px) {
		.lineup-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
