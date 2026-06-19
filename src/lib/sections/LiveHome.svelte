<script>
	// STATE: live — EDITORIAL, paper-led. Paper is the home base (warm paper,
	// ink mono + Archivo statements, structured mastheads and rules); the dark
	// cinematic world appears only as PUNCTUATION — the machine film-still and an
	// inverted Vendr Pass moment. Its own identity: a confident editorial site,
	// distinct from the Coming Soon title-card. Monochrome, the "\" motif. Cosy mobile.
	import { brand, subBrands, contact } from '$lib/brand.js';
	import Wordmark from '$lib/components/Wordmark.svelte';

	const index = [
		{ k: 'Approach', v: 'Irish-first' },
		{ k: 'Placement', v: 'Workplaces & hospitality' },
		{ k: 'Status', v: `Launching ${brand.launchLabel}` }
	];
	const values = [
		{ n: '01', h: 'Clarity', p: 'Legible at a glance. Nothing to puzzle over.' },
		{ n: '02', h: 'Intent', p: 'Every placement is chosen. One room done well before a hundred filled.' },
		{ n: '03', h: 'Infrastructure', p: 'Built into the wall, not bolted onto it. Quiet when idle.' },
		{ n: '04', h: 'Longevity', p: 'Made to last years, not seasons.' }
	];
	const passRows = [
		['Status', subBrands.pass.status],
		['Arrives', 'With launch, 2026'],
		['Where', 'Every machine'],
		['For', 'Returning members']
	];

</script>

<!-- NAV -->
<header class="nav">
	<div class="wrap nav-in">
		<a href="#top" aria-label={brand.name}><Wordmark src="/wordmark-dark.png" size={22} /></a>
		<nav class="nav-links" aria-label="Sections">
			<a href="#about">About</a>
			<a href="#pass">Pass</a>
			<a href="/placement">Placement</a>
		</nav>
	</div>
</header>

<main id="top">
	<!-- HERO — editorial masthead -->
	<section class="hero">
		<div class="wrap">
			<span class="marker" data-reveal>Ireland <span class="bs">\</span> Est. {brand.established}</span>
			<p class="lede" data-reveal>
				A quieter form of retail. <span class="bs">\</span> A short, Irish-first list. Machines that
				simply work. <span class="bs">\</span> Coming to Ireland in 2026.
			</p>
		</div>
		<div class="wrap hero-index" data-reveal>
			{#each index as i}
				<div class="idx">
					<span class="ik">{i.k}</span>
					<span class="iv">{i.v}</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- MACHINE SCENE — dark punctuation -->
	<section class="band" aria-label="Vendr in space">
		<img src="/assets/machine1.jpg" alt="" class="band-img" loading="lazy" decoding="async" />
		<div class="band-veil"></div>
		<div class="wrap band-in">
			<p class="band-copy" data-reveal>
				A small glass unit in the wall. <span class="bs">\</span><br />
				Quiet. Almost unnoticed. <span class="bs">\</span><br />
				Not a shop. Not exactly a machine. <span class="bs">\</span><br />
				Something in between.
			</p>
			<span class="band-mark" data-reveal><Wordmark src="/wordmark.png" size={20} /></span>
		</div>
	</section>

	<!-- ABOUT + VALUES -->
	<section class="block" id="about">
		<div class="wrap">
			<span class="eyebrow">01 <span class="bs">\</span> About</span>
			<p class="big" data-reveal>
				No queue. No upsell. Nothing asking for your attention. Just the thing you came for.
			</p>
			<div class="cols" data-reveal>
				<p>
					Not volume. Not noise. A short product list, dependable machines, and locations chosen
					one at a time.
				</p>
			</div>
			<div class="values">
				{#each values as v}
					<div class="value" data-reveal>
						<span class="vn">{v.n}</span>
						<h3>{v.h}</h3>
						<p>{v.p}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- VENDR PASS — dark punctuation -->
	<section class="block dark" id="pass">
		<div class="wrap pass" data-reveal>
			<div>
				<span class="eyebrow">02 <span class="bs">\</span> {subBrands.pass.name}</span>
				<h2 class="head">A rewards programme for the people who come back.</h2>
				<p class="sub">
					Buy often and it should count for something. More to share closer to launch.
				</p>
			</div>
			<dl class="data">
				{#each passRows as [k, v]}
					<div><dt>{k}</dt><dd>{v}</dd></div>
				{/each}
			</dl>
		</div>
	</section>

	<!-- FOOTER — plain editorial -->
	<footer class="foot">
		<div class="wrap foot-in">
			<a href="#top" aria-label={brand.name}><Wordmark src="/wordmark-dark.png" size={20} /></a>
			<div class="entity">
				<span class="lead">{brand.legalEntity}</span>
				<span>A <a href={brand.parentUrl} target="_blank" rel="noopener">{brand.parent}</a> Company, sister to <a href={brand.affiliate.url} target="_blank" rel="noopener">{brand.affiliate.name}</a></span>
				<span>Est. {brand.established}</span>
			</div>
			<nav class="foot-links" aria-label="Footer">
				<a href="/placement">Placement</a>
				<a href="/privacy">Privacy</a>
				<a href="/terms">Terms</a>
				<a href="/legal">Legal</a>
				<a href={contact.linkedin} target="_blank" rel="noopener">LinkedIn</a>
			</nav>
		</div>
	</footer>
</main>

<style>
	:global(body) {
		background: var(--vd-paper);
	}
	main {
		background: var(--vd-paper);
		color: var(--vd-ink);
	}
	.wrap {
		max-width: 1180px;
		margin: 0 auto;
		padding: 0 clamp(20px, 6vw, 80px);
	}
	.bs {
		color: var(--vd-ink-grey);
	}

	/* NAV — paper */
	.nav {
		position: sticky;
		top: 0;
		z-index: 40;
		background: color-mix(in srgb, var(--vd-paper) 86%, transparent);
		backdrop-filter: blur(8px);
		border-bottom: 1px solid var(--vd-ink-rule);
	}
	.nav-in {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 66px;
	}
	.nav-links {
		display: flex;
		gap: clamp(16px, 2.4vw, 34px);
		align-items: center;
	}
	.nav-links a {
		font-family: var(--vd-mono);
		font-size: 12px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--vd-ink-grey);
		transition: color 200ms ease;
	}
	.nav-links a:hover {
		color: var(--vd-ink) !important;
	}

	/* shared technical bits */
	.marker,
	.eyebrow {
		display: block;
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.24em;
		text-transform: uppercase;
		color: var(--vd-ink-grey);
	}
	.lede {
		font-family: var(--vd-mono);
		font-size: clamp(13px, 1.3vw, 15px);
		line-height: 1.85;
		color: var(--vd-ink);
		max-width: 58ch;
		margin: clamp(24px, 3vw, 36px) 0 0;
	}

	/* HERO — editorial masthead with an index strip */
	.hero {
		padding: clamp(64px, 11vw, 132px) 0 0;
	}
	.hero-index {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: clamp(16px, 3vw, 40px);
		margin-top: clamp(48px, 8vw, 104px);
		padding: clamp(20px, 2.4vw, 28px) 0 clamp(56px, 9vw, 112px);
		border-top: 1px solid var(--vd-ink-rule-strong);
	}
	.idx {
		display: flex;
		flex-direction: column;
		gap: 7px;
	}
	.ik {
		font-family: var(--vd-mono);
		font-size: 10.5px;
		letter-spacing: 0.24em;
		text-transform: uppercase;
		color: var(--vd-ink-faint);
	}
	.iv {
		font-family: var(--vd-mono);
		font-size: 13px;
		letter-spacing: 0.02em;
		color: var(--vd-ink);
	}
	@media (max-width: 640px) {
		.hero-index {
			grid-template-columns: 1fr;
			gap: 16px;
		}
	}

	/* MACHINE SCENE — dark punctuation */
	.band {
		position: relative;
		overflow: hidden;
		background: var(--vd-ground);
		padding: clamp(88px, 16vw, 200px) 0;
	}
	.band-img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 60%;
		filter: brightness(0.46) saturate(0.82) contrast(1.05);
	}
	.band-veil {
		position: absolute;
		inset: 0;
		background:
			linear-gradient(to right, rgba(0, 0, 0, 0.94) 8%, rgba(0, 0, 0, 0.5) 55%, rgba(0, 0, 0, 0.7)),
			linear-gradient(to bottom, rgba(0, 0, 0, 0.55), transparent 32%, rgba(0, 0, 0, 0.72));
	}
	.band-in {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: clamp(28px, 5vw, 48px);
	}
	.band-copy {
		font-family: var(--vd-mono);
		font-size: clamp(14px, 1.6vw, 19px);
		line-height: 1.85;
		letter-spacing: 0.03em;
		text-transform: uppercase;
		color: var(--vd-on-ground);
		margin: 0;
	}
	.band .bs {
		color: var(--vd-faint);
	}

	/* BLOCKS — paper by default */
	.block {
		padding: clamp(56px, 10vw, 128px) 0;
		border-top: 1px solid var(--vd-ink-rule);
	}
	.big {
		font-family: var(--vd-display);
		font-weight: 400;
		font-size: clamp(26px, 3.6vw, 48px);
		line-height: 1.14;
		letter-spacing: -0.016em;
		color: var(--vd-ink);
		max-width: 22ch;
		margin: clamp(20px, 3vw, 34px) 0 0;
	}
	.head {
		font-family: var(--vd-display);
		font-weight: 400;
		font-size: clamp(24px, 3.2vw, 42px);
		line-height: 1.08;
		letter-spacing: -0.016em;
		color: var(--vd-ink);
		margin: clamp(14px, 2vw, 24px) 0 0;
		max-width: 20ch;
	}
	.cols {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: clamp(24px, 5vw, 64px);
		max-width: 820px;
		margin-top: clamp(28px, 4vw, 40px);
	}
	.cols p,
	.sub {
		font-family: var(--vd-mono);
		font-size: 13.5px;
		line-height: 1.85;
		color: var(--vd-ink-grey);
	}
	.sub {
		max-width: 56ch;
		margin-top: 14px;
	}
	@media (max-width: 640px) {
		.cols {
			grid-template-columns: 1fr;
			gap: 18px;
		}
	}

	/* VALUES */
	.values {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		border-top: 1px solid var(--vd-ink-rule);
		margin-top: clamp(40px, 6vw, 80px);
	}
	.value {
		padding: clamp(28px, 3vw, 40px) 24px 40px 0;
		border-bottom: 1px solid var(--vd-ink-rule);
	}
	.value:not(:last-child) {
		border-right: 1px solid var(--vd-ink-rule);
		padding-right: 24px;
	}
	.value:not(:first-child) {
		padding-left: 24px;
	}
	.vn {
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.2em;
		color: var(--vd-ink-faint);
	}
	.value h3 {
		font-family: var(--vd-display);
		font-weight: 400;
		font-size: 20px;
		color: var(--vd-ink);
		margin: 14px 0 8px;
	}
	.value p {
		font-family: var(--vd-mono);
		font-size: 12.5px;
		line-height: 1.65;
		color: var(--vd-ink-grey);
	}
	@media (max-width: 860px) {
		.values {
			grid-template-columns: 1fr 1fr;
		}
		.value {
			padding-right: 24px !important;
			padding-left: 0 !important;
			border-right: none !important;
		}
		.value:nth-child(odd) {
			border-right: 1px solid var(--vd-ink-rule) !important;
			padding-right: 24px !important;
		}
		.value:nth-child(even) {
			padding-left: 24px !important;
		}
	}
	@media (max-width: 640px) {
		.values {
			grid-template-columns: 1fr;
		}
		.value {
			border-right: none !important;
			padding-left: 0 !important;
			padding-right: 0 !important;
		}
	}

	/* PASS — dark punctuation */
	.block.dark {
		background: var(--vd-ground);
		color: var(--vd-on-ground);
		border-top: none;
	}
	.dark .eyebrow {
		color: var(--vd-grey);
	}
	.dark .bs {
		color: var(--vd-faint);
	}
	.dark .head {
		color: var(--vd-on-ground);
	}
	.dark .sub {
		color: var(--vd-muted);
	}
	.pass {
		display: grid;
		grid-template-columns: 1.4fr 1fr;
		gap: clamp(28px, 6vw, 72px);
		align-items: center;
	}
	.pass .head {
		margin-top: 16px;
	}
	.data {
		margin: 0;
		border-top: 1px solid var(--vd-rule);
	}
	.data div {
		display: flex;
		justify-content: space-between;
		gap: 16px;
		padding: 14px 0;
		border-bottom: 1px solid var(--vd-rule);
	}
	.data dt {
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.24em;
		text-transform: uppercase;
		color: var(--vd-faint);
	}
	.data dd {
		margin: 0;
		font-family: var(--vd-mono);
		font-size: 13px;
		color: var(--vd-grey);
	}
	@media (max-width: 720px) {
		.pass {
			grid-template-columns: 1fr;
		}
	}

	/* FOOTER — plain editorial */
	.foot {
		border-top: 1px solid var(--vd-ink-rule-strong);
		padding: clamp(40px, 6vw, 64px) 0;
	}
	.foot-in {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: 32px;
		flex-wrap: wrap;
	}
	.entity {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
	.entity span {
		font-family: var(--vd-mono);
		font-size: 10px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--vd-ink-faint);
		line-height: 1.5;
	}
	.entity .lead {
		color: var(--vd-ink-grey);
	}
	.entity a {
		color: var(--vd-ink-grey);
		transition: color 200ms ease;
	}
	.entity a:hover {
		color: var(--vd-ink);
	}
	.foot-links {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
	}
	.foot-links a {
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--vd-ink-faint);
		transition: color 200ms ease;
	}
	.foot-links a:hover {
		color: var(--vd-ink);
	}
	@media (max-width: 640px) {
		.foot-in {
			gap: 24px;
		}
	}

	/* reveal — pure CSS, zero JS dependency. Content is VISIBLE by default; when
	   JS confirms (html.vd-js, set synchronously in app.html) a one-shot fade-up
	   plays on load. If the animation never runs (no JS, reduced motion, an error)
	   content simply stays visible — the page can never be blank again. */
	[data-reveal] {
		opacity: 1;
		transform: none;
	}
	@media (prefers-reduced-motion: no-preference) {
		:global(html.vd-js) [data-reveal] {
			animation: vd-rise 0.7s cubic-bezier(0.22, 0.61, 0.36, 1) both;
		}
	}
	@keyframes vd-rise {
		from {
			opacity: 0;
			transform: translateY(12px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}

	@media (max-width: 600px) {
		.band {
			padding: 100px 0;
		}
		.band-veil {
			background: linear-gradient(to bottom, rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.4) 36%, rgba(0, 0, 0, 0.8));
		}
	}

	/* mobile cosiness — airier type and rhythm so the page never reads cramped */
	@media (max-width: 640px) {
		.lede {
			font-size: 14px;
			line-height: 1.95;
		}
		.cols p,
		.sub {
			font-size: 14px;
			line-height: 1.9;
		}
		.hero-index {
			gap: 22px;
		}
		.value {
			padding-top: 30px;
			padding-bottom: 30px;
		}
		.value h3 {
			font-size: 21px;
			margin: 16px 0 10px;
		}
		.value p {
			font-size: 13.5px;
			line-height: 1.8;
		}
		.data div {
			padding: 16px 0;
		}
		.entity span {
			font-size: 10.5px;
			line-height: 1.6;
		}
	}
</style>
