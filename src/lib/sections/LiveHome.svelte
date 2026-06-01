<script>
	// STATE: live — light "paper" editorial surface (the brand's lightbox panels):
	// warm paper, black monospace manifesto-style copy with the \ ## {} devices,
	// Archivo for big statements, one cinematic dark band (panel-in-dark-space).
	// Transit/infrastructure tone. Monochrome. Cosy mobile.
	import { onMount } from 'svelte';
	import { brand, subBrands, contact } from '$lib/brand.js';
	import Wordmark from '$lib/components/Wordmark.svelte';

	const values = [
		{ n: '01', h: 'Clarity', p: 'Systems and interactions designed to be simple, legible, intuitive.' },
		{ n: '02', h: 'Intent', p: 'Every placement is deliberate — thoughtful integration over scale.' },
		{ n: '03', h: 'Infrastructure', p: 'Reliable, unobtrusive. Built into the environment, not bolted on.' },
		{ n: '04', h: 'Longevity', p: 'Made for durability and long-term relevance over short-term trend.' }
	];
	const path = [
		{ tick: 'Complete', h: 'Soft Launch', p: 'Presence established. We listened, learned, refined.', s: 'done' },
		{ tick: 'Now', h: 'Validation', p: 'Selective pilot placements. Proving reliability and fit.', s: 'current' },
		{ tick: 'Then', h: 'Operations', p: 'Operational foundations locked. Systems proven at scale.', s: '' },
		{ tick: brand.launchLabel, h: 'Launch', p: 'Careful expansion begins across Ireland.', s: '' }
	];
	const drinks = [
		{ n: 'Ballygowan Still', d: 'Irish natural spring water', s: 'Ballygowan' },
		{ n: 'Ballygowan Sparkling', d: 'Irish sparkling spring water', s: 'Ballygowan' },
		{ n: 'BLK Water', d: 'Mineral-rich alkaline water', s: 'BLK' },
		{ n: 'Actiph Alkaline 8.0+', d: 'Functional hydration', s: 'Actiph' },
		{ n: 'San Pellegrino Limonata', d: 'Premium citrus soft drink', s: 'San Pellegrino' }
	];
	const snacks = [
		{ n: "Keogh's Sweet Chilli & Irish Red Pepper", d: 'Irish artisan crisps', s: "Keogh's" },
		{ n: "Keogh's Shamrock & Sour Cream", d: 'Irish artisan crisps', s: "Keogh's" },
		{ n: 'Butlers Chocolate Bar', d: 'Irish chocolate', s: 'Butlers' },
		{ n: 'Fulfil Protein Bar', d: 'High-protein, low sugar', s: 'Fulfil' },
		{ n: 'Graze Savoury Snack', d: 'Portion-controlled snacking', s: 'Graze' }
	];
	const passRows = [
		['Status', subBrands.pass.status],
		['Arrives', 'With launch, 2026'],
		['Where', 'Every placement'],
		['For', 'Returning members']
	];

	onMount(() => {
		const io = new IntersectionObserver(
			(es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
			{ threshold: 0.12 }
		);
		document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
	});
</script>

<!-- NAV -->
<header class="nav">
	<div class="wrap nav-in">
		<a href="#top" aria-label={brand.name}><Wordmark src="/wordmark-dark.png" size={22} /></a>
		<nav class="nav-links" aria-label="Sections">
			<a href="#about">About</a>
			<a href="#path">Path</a>
			<a href="#lineup">Lineup</a>
			<a href="#pass">Pass</a>
			<a href="#contact" class="enquire">Enquire →</a>
		</nav>
	</div>
</header>

<main id="top">
	<!-- HERO -->
	<section class="hero">
		<div class="wrap">
			<span class="marker">Curated vending — Ireland <span class="bs">\</span> Est. {brand.established}</span>
			<h1 class="statement">Where vending evolves <span class="bs">\</span></h1>
			<p class="lede">
				A quieter form of retail. <span class="bs">\</span> Curated products. Reliable infrastructure.
				Placement made with intention. <span class="bs">\</span> Quietly emerging in Ireland.
			</p>
			<div class="cta">
				<a href="#contact" class="btn">Discuss a placement →</a>
				<a href="#path" class="link">See the path</a>
			</div>
		</div>
	</section>

	<!-- CINEMATIC DARK BAND -->
	<section class="band" aria-label="Vendr in space">
		<img src="/assets/machine1.jpg" alt="" class="band-img" loading="lazy" decoding="async" />
		<div class="band-veil"></div>
		<div class="wrap band-in">
			<p class="band-copy">
				A small glass unit in the wall. <span class="bs">\</span><br />
				Quiet. Almost unnoticed. <span class="bs">\</span><br />
				Not a shop. Not exactly a machine. <span class="bs">\</span><br />
				Something in between.
			</p>
			<span class="band-mark"><Wordmark size={20} /></span>
		</div>
	</section>

	<!-- ABOUT + VALUES -->
	<section class="block" id="about">
		<div class="wrap">
			<span class="eyebrow">01 — About <span class="bs">\</span></span>
			<p class="big" data-reveal>
				Vendr exists to modernise vending — replacing outdated machines with something more
				considered.
			</p>
			<div class="cols" data-reveal>
				<p>
					Not volume. Not noise. A platform built on product curation, intelligent infrastructure,
					and placement made with intention.
				</p>
				<p>
					Designed for the environments that value quality, reliability, and brand alignment — where
					retail, technology, and place meet.
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

	<!-- PATH -->
	<section class="block alt" id="path">
		<div class="wrap">
			<span class="eyebrow">02 — Our path <span class="bs">\</span></span>
			<h2 class="head" data-reveal>A deliberate progression.</h2>
			<div class="path">
				{#each path as st}
					<div class="stage {st.s}" data-reveal>
						<span class="bar"></span>
						<span class="tick">{st.tick}</span>
						<h4>{st.h}</h4>
						<p>{st.p}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- LINEUP -->
	<section class="block" id="lineup">
		<div class="wrap">
			<span class="eyebrow">03 — A sample lineup <span class="bs">\</span></span>
			<h2 class="head" data-reveal>Curated. Irish-first. Seasonal.</h2>
			<p class="sub" data-reveal>
				Availability varies by location and season — products shown are indicative of the range.
			</p>
			<p class="cat">Hydration &amp; Drinks</p>
			<div class="menu">
				{#each drinks as i}
					<div class="item" data-reveal>
						<span><b>{i.n}</b><span class="d">{i.d}</span></span><span class="src">{i.s}</span>
					</div>
				{/each}
			</div>
			<p class="cat">Snacks</p>
			<div class="menu">
				{#each snacks as i}
					<div class="item" data-reveal>
						<span><b>{i.n}</b><span class="d">{i.d}</span></span><span class="src">{i.s}</span>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- VENDR PASS -->
	<section class="block alt" id="pass">
		<div class="wrap pass" data-reveal>
			<div>
				<span class="eyebrow">04 — {subBrands.pass.name} <span class="bs">\</span></span>
				<h2 class="head">A rewards system designed to make premium vending feel fair.</h2>
				<p class="sub">
					Recognising the people who return. Quietly rewarding everyday choices, across every
					placement. More to share closer to launch.
				</p>
			</div>
			<dl class="data">
				{#each passRows as [k, v]}
					<div><dt>{k}</dt><dd>{v}</dd></div>
				{/each}
			</dl>
		</div>
	</section>

	<!-- CONTACT -->
	<section class="block" id="contact">
		<div class="wrap">
			<span class="eyebrow">05 — Enquire <span class="bs">\</span></span>
			<h2 class="head big-head" data-reveal>A placement is a conversation.</h2>
			<p class="sub" data-reveal>
				Tell us where you'd like a Vendr machine. We respond to institutional and partnership
				enquiries within two working days.
			</p>
			<div class="cta" data-reveal>
				<a href={contact.enquiryHref} class="btn">Discuss a placement →</a>
				<a href={contact.href} class="link">{contact.email}</a>
			</div>
		</div>
	</section>

	<!-- FOOTER -->
	<footer class="foot">
		<div class="wrap foot-in">
			<a href="#top" aria-label={brand.name}><Wordmark src="/wordmark-dark.png" size={20} /></a>
			<div class="entity">
				<span>{brand.legalEntity}</span>
				<span>
					A <a href={brand.parentUrl} target="_blank" rel="noopener">{brand.parent}</a> company ·
					sister to <a href={brand.affiliate.url} target="_blank" rel="noopener">{brand.affiliate.name}</a>
				</span>
				<span>Est. {brand.established}</span>
			</div>
			<nav class="foot-links" aria-label="Footer">
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

	/* NAV */
	.nav {
		position: sticky;
		top: 0;
		z-index: 40;
		background: color-mix(in srgb, var(--vd-paper) 88%, transparent);
		backdrop-filter: blur(6px);
		border-bottom: 1px solid var(--vd-ink-rule);
	}
	.nav-in {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 64px;
	}
	.nav-links {
		display: flex;
		gap: clamp(16px, 2.4vw, 32px);
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
	.nav-links a:hover,
	.enquire {
		color: var(--vd-ink) !important;
	}
	@media (max-width: 680px) {
		.nav-links a:not(.enquire) {
			display: none;
		}
	}

	/* shared editorial bits */
	.marker,
	.eyebrow {
		display: block;
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--vd-ink-grey);
	}
	.statement {
		font-family: var(--vd-display);
		font-weight: 500;
		font-size: clamp(34px, 6vw, 80px);
		line-height: 1.04;
		letter-spacing: -0.02em;
		margin: clamp(20px, 3vw, 32px) 0 0;
		max-width: 15ch;
	}
	.lede {
		font-family: var(--vd-mono);
		font-size: clamp(13px, 1.3vw, 15px);
		line-height: 1.8;
		color: var(--vd-ink);
		max-width: 60ch;
		margin: clamp(24px, 3vw, 36px) 0 0;
	}

	.cta {
		display: flex;
		gap: clamp(16px, 3vw, 28px);
		align-items: center;
		flex-wrap: wrap;
		margin-top: clamp(28px, 4vw, 40px);
	}
	.btn {
		font-family: var(--vd-mono);
		font-size: 12px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		background: var(--vd-ink);
		color: var(--vd-paper);
		border: 1px solid var(--vd-ink);
		padding: 14px 22px;
		transition: opacity 200ms ease;
	}
	.btn:hover {
		opacity: 0.86;
	}
	.link {
		font-family: var(--vd-mono);
		font-size: 12px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--vd-ink-grey);
		border-bottom: 1px solid var(--vd-ink-rule-strong);
		padding-bottom: 3px;
		transition: color 200ms ease;
	}
	.link:hover {
		color: var(--vd-ink);
	}

	/* HERO */
	.hero {
		padding: clamp(64px, 12vw, 140px) 0 clamp(48px, 8vw, 96px);
	}

	/* CINEMATIC DARK BAND */
	.band {
		position: relative;
		overflow: hidden;
		background: var(--vd-ground);
		padding: clamp(64px, 12vw, 140px) 0;
	}
	.band-img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: brightness(0.4) saturate(0.85) contrast(1.02);
	}
	.band-veil {
		position: absolute;
		inset: 0;
		background: linear-gradient(to right, rgba(11, 10, 9, 0.92), rgba(11, 10, 9, 0.55));
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
		line-height: 1.8;
		letter-spacing: 0.02em;
		text-transform: uppercase;
		color: var(--vd-on-ground);
		margin: 0;
	}
	.band .bs {
		color: var(--vd-faint);
	}

	/* BLOCKS */
	.block {
		padding: clamp(56px, 10vw, 128px) 0;
		border-top: 1px solid var(--vd-ink-rule);
	}
	.block.alt {
		background: color-mix(in srgb, var(--vd-ink) 4%, var(--vd-paper));
	}
	.big {
		font-family: var(--vd-display);
		font-weight: 500;
		font-size: clamp(24px, 3.4vw, 44px);
		line-height: 1.18;
		letter-spacing: -0.015em;
		max-width: 22ch;
		margin: clamp(20px, 3vw, 32px) 0 0;
	}
	.head {
		font-family: var(--vd-display);
		font-weight: 500;
		font-size: clamp(22px, 3vw, 38px);
		line-height: 1.1;
		letter-spacing: -0.015em;
		margin: clamp(14px, 2vw, 22px) 0 0;
		max-width: 20ch;
	}
	.head.big-head {
		font-size: clamp(28px, 4.4vw, 56px);
		max-width: 16ch;
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
		line-height: 1.8;
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
		font-weight: 500;
		font-size: 20px;
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
	@media (max-width: 480px) {
		.values {
			grid-template-columns: 1fr;
		}
		.value {
			border-right: none !important;
			padding-left: 0 !important;
			padding-right: 0 !important;
		}
	}

	/* PATH */
	.path {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		border-top: 1px solid var(--vd-ink-rule-strong);
		margin-top: clamp(32px, 5vw, 56px);
	}
	.stage {
		position: relative;
		padding: 28px 24px 40px 0;
		border-bottom: 1px solid var(--vd-ink-rule);
	}
	.stage:not(:last-child) {
		border-right: 1px solid var(--vd-ink-rule);
		padding-right: 24px;
	}
	.stage:not(:first-child) {
		padding-left: 24px;
	}
	.stage .bar {
		position: absolute;
		top: -1px;
		left: 0;
		height: 2px;
		width: 0;
		background: var(--vd-ink);
	}
	.stage.current .bar {
		width: 100%;
	}
	.stage.done .bar {
		width: 100%;
		background: var(--vd-ink-faint);
	}
	.tick {
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--vd-ink-faint);
	}
	.stage.current .tick {
		color: var(--vd-ink);
	}
	.stage h4 {
		font-family: var(--vd-display);
		font-weight: 500;
		font-size: 19px;
		margin: 14px 0 8px;
	}
	.stage.done h4 {
		color: var(--vd-ink-grey);
	}
	.stage p {
		font-family: var(--vd-mono);
		font-size: 12.5px;
		line-height: 1.65;
		color: var(--vd-ink-grey);
	}
	@media (max-width: 860px) {
		.path {
			grid-template-columns: 1fr 1fr;
		}
		.stage {
			padding-right: 24px !important;
			padding-left: 0 !important;
			border-right: none !important;
		}
		.stage:nth-child(odd) {
			border-right: 1px solid var(--vd-ink-rule) !important;
			padding-right: 24px !important;
		}
		.stage:nth-child(even) {
			padding-left: 24px !important;
		}
	}
	@media (max-width: 480px) {
		.path {
			grid-template-columns: 1fr;
		}
		.stage {
			border-right: none !important;
			padding-left: 0 !important;
			padding-right: 0 !important;
		}
	}

	/* LINEUP */
	.cat {
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--vd-ink-grey);
		margin: clamp(36px, 5vw, 52px) 0 0;
	}
	.menu {
		border-top: 1px solid var(--vd-ink-rule);
		margin-top: 10px;
	}
	.item {
		display: flex;
		justify-content: space-between;
		gap: 24px;
		align-items: baseline;
		padding: 16px 0;
		border-bottom: 1px solid var(--vd-ink-rule);
		transition: padding-left 0.25s ease;
	}
	.item:hover {
		padding-left: 12px;
	}
	.item b {
		font-family: var(--vd-mono);
		font-weight: 500;
		font-size: 14px;
		color: var(--vd-ink);
		display: block;
	}
	.item .d {
		display: block;
		font-family: var(--vd-mono);
		font-size: 12px;
		color: var(--vd-ink-grey);
		margin-top: 3px;
	}
	.item .src {
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--vd-ink-faint);
		white-space: nowrap;
	}

	/* PASS */
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
		border-top: 1px solid var(--vd-ink-rule);
	}
	.data div {
		display: flex;
		justify-content: space-between;
		gap: 16px;
		padding: 14px 0;
		border-bottom: 1px solid var(--vd-ink-rule);
	}
	.data dt {
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--vd-ink-faint);
	}
	.data dd {
		margin: 0;
		font-family: var(--vd-mono);
		font-size: 13px;
		color: var(--vd-ink-grey);
	}
	@media (max-width: 720px) {
		.pass {
			grid-template-columns: 1fr;
		}
	}

	/* FOOTER */
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
		gap: 4px;
	}
	.entity span {
		font-family: var(--vd-mono);
		font-size: 10px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--vd-ink-faint);
		line-height: 1.5;
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

	/* reveal */
	[data-reveal] {
		opacity: 0;
		transform: translateY(12px);
		transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
	}
	[data-reveal].in {
		opacity: 1;
		transform: none;
	}
	@media (prefers-reduced-motion: reduce) {
		[data-reveal] {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}
</style>
