<script>
	// STATE: live — CINEMATIC film-studio surface (one world with the Coming Soon).
	// A dark cinematic spine — hero, machine scene, path, lineup, contact — lit by
	// two PAPER "intermissions" (ethos/values + Vendr Pass) for rhythm, like lit
	// scenes inside a dark film. Heavy grotesk statements, mono technical labels,
	// the "\" motif, vignettes, slow reveals. Monochrome. Cosy mobile.
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

	let scrolled = $state(false);

	onMount(() => {
		const io = new IntersectionObserver(
			(es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
			{ threshold: 0.12 }
		);
		document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

		const onScroll = () => (scrolled = window.scrollY > 24);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<!-- NAV -->
<header class="nav" class:scrolled>
	<div class="wrap nav-in">
		<a href="#top" aria-label={brand.name}><Wordmark src="/wordmark.png" size={22} /></a>
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
	<!-- HERO — cinematic dark opening -->
	<section class="hero">
		<div class="plate" aria-hidden="true"></div>
		<div class="wrap hero-in">
			<span class="marker" data-reveal>Curated vending — Ireland <span class="bs">\</span> Est. {brand.established}</span>
			<h1 class="statement" data-reveal>Where vending evolves <span class="bs">\</span></h1>
			<p class="lede" data-reveal>
				A quieter form of retail. <span class="bs">\</span> Curated products. Reliable infrastructure.
				Placement made with intention. <span class="bs">\</span> Quietly emerging in Ireland.
			</p>
			<div class="cta" data-reveal>
				<a href="#contact" class="btn">Discuss a placement →</a>
				<a href="#path" class="link">See the path</a>
			</div>
		</div>
		<span class="scroll-cue" aria-hidden="true">Scroll <span class="bs">\</span></span>
	</section>

	<!-- MACHINE SCENE -->
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

	<!-- PAPER INTERMISSION I — ETHOS + VALUES -->
	<section class="block paper" id="about">
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

	<!-- PATH — dark scene -->
	<section class="block" id="path">
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

	<!-- LINEUP — dark scene -->
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

	<!-- PAPER INTERMISSION II — VENDR PASS -->
	<section class="block paper" id="pass">
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

	<!-- CONTACT — dark closing scene -->
	<section class="block contact" id="contact">
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

	<!-- FOOTER — cinematic production card -->
	<footer class="foot">
		<div class="foot-card">
			<a href="#top" aria-label={brand.name} class="foot-mark"><Wordmark src="/wordmark.png" size={22} /></a>
			<p class="entity">
				<span class="lead">{brand.legalEntity}</span>
				<span>A <a href={brand.parentUrl} target="_blank" rel="noopener">{brand.parent}</a> Company · sister to <a href={brand.affiliate.url} target="_blank" rel="noopener">{brand.affiliate.name}</a></span>
				<span>Est. {brand.established}</span>
			</p>
			<nav class="foot-links" aria-label="Footer">
				<a href="/privacy">Privacy</a>
				<span class="dot"></span>
				<a href="/terms">Terms</a>
				<span class="dot"></span>
				<a href="/legal">Legal</a>
				<span class="dot"></span>
				<a href={contact.linkedin} target="_blank" rel="noopener">LinkedIn</a>
			</nav>
		</div>
	</footer>
</main>

<style>
	:global(body) {
		background: var(--vd-ground);
	}
	main {
		background: var(--vd-ground);
		color: var(--vd-on-ground);
	}
	.wrap {
		max-width: 1180px;
		margin: 0 auto;
		padding: 0 clamp(20px, 6vw, 80px);
	}
	.bs {
		color: var(--vd-grey);
	}

	/* NAV — transparent over the hero, faint dark bar once scrolled */
	.nav {
		position: sticky;
		top: 0;
		z-index: 40;
		border-bottom: 1px solid transparent;
		transition: background 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease;
	}
	.nav.scrolled {
		background: color-mix(in srgb, var(--vd-ground) 78%, transparent);
		backdrop-filter: blur(10px);
		border-bottom-color: var(--vd-rule);
	}
	.nav-in {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 68px;
	}
	.nav-links {
		display: flex;
		gap: clamp(16px, 2.4vw, 34px);
		align-items: center;
	}
	.nav-links a {
		font-family: var(--vd-mono);
		font-size: 12px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--vd-faint);
		transition: color 200ms ease;
	}
	.nav-links a:hover,
	.enquire {
		color: var(--vd-on-ground) !important;
	}
	@media (max-width: 680px) {
		.nav-links a:not(.enquire) {
			display: none;
		}
	}

	/* shared technical bits */
	.marker,
	.eyebrow {
		display: block;
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--vd-grey);
	}
	.statement {
		font-family: var(--vd-display);
		font-weight: 500;
		font-size: clamp(38px, 6.6vw, 92px);
		line-height: 1.02;
		letter-spacing: -0.022em;
		color: var(--vd-on-ground);
		margin: clamp(22px, 3vw, 36px) 0 0;
		max-width: 14ch;
		text-shadow: 0 0 60px rgba(244, 243, 240, 0.06);
	}
	.lede {
		font-family: var(--vd-mono);
		font-size: clamp(13px, 1.3vw, 15px);
		line-height: 1.85;
		color: var(--vd-muted);
		max-width: 58ch;
		margin: clamp(24px, 3vw, 36px) 0 0;
	}

	.cta {
		display: flex;
		gap: clamp(16px, 3vw, 28px);
		align-items: center;
		flex-wrap: wrap;
		margin-top: clamp(30px, 4vw, 44px);
	}
	.btn {
		font-family: var(--vd-mono);
		font-size: 12px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		background: var(--vd-on-ground);
		color: var(--vd-ground);
		border: 1px solid var(--vd-on-ground);
		padding: 15px 24px;
		transition: opacity 200ms ease;
	}
	.btn:hover {
		opacity: 0.86;
	}
	.link {
		font-family: var(--vd-mono);
		font-size: 12px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--vd-grey);
		border-bottom: 1px solid var(--vd-rule-strong);
		padding-bottom: 3px;
		transition: color 200ms ease;
	}
	.link:hover {
		color: var(--vd-on-ground);
	}

	/* HERO — cinematic plate (light-pool + vignette), statement-led */
	.hero {
		position: relative;
		min-height: 92svh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: clamp(80px, 14vh, 160px) 0 clamp(64px, 10vh, 120px);
		margin-top: -68px; /* slide hero under the transparent nav */
		overflow: hidden;
	}
	.hero .plate {
		position: absolute;
		inset: 0;
		z-index: 0;
		background:
			radial-gradient(120% 80% at 18% 30%, rgba(154, 155, 150, 0.06), transparent 56%),
			radial-gradient(120% 90% at 70% 100%, rgba(86, 70, 48, 0.34), transparent 60%),
			radial-gradient(150% 130% at 50% 50%, transparent 42%, rgba(4, 3, 2, 0.66) 100%),
			var(--vd-ground);
	}
	.hero-in {
		position: relative;
		z-index: 1;
		width: 100%;
	}
	.scroll-cue {
		position: absolute;
		left: 50%;
		bottom: clamp(20px, 4vh, 36px);
		transform: translateX(-50%);
		z-index: 1;
		font-family: var(--vd-mono);
		font-size: 10px;
		letter-spacing: 0.3em;
		text-transform: uppercase;
		text-indent: 0.3em;
		color: var(--vd-faint);
		animation: cue 2.4s ease-in-out infinite;
	}
	@keyframes cue {
		0%, 100% { opacity: 0.4; transform: translate(-50%, 0); }
		50% { opacity: 0.85; transform: translate(-50%, 4px); }
	}

	/* MACHINE SCENE — full-bleed dark film still */
	.band {
		position: relative;
		overflow: hidden;
		background: var(--vd-ground);
		padding: clamp(96px, 18vw, 220px) 0;
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
			linear-gradient(to right, rgba(11, 10, 9, 0.94) 8%, rgba(11, 10, 9, 0.5) 55%, rgba(11, 10, 9, 0.7)),
			linear-gradient(to bottom, rgba(11, 10, 9, 0.6), transparent 30%, rgba(11, 10, 9, 0.75)),
			radial-gradient(140% 120% at 30% 50%, transparent 42%, rgba(4, 3, 2, 0.55));
	}
	.band-in {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: clamp(32px, 5vw, 56px);
	}
	.band-copy {
		font-family: var(--vd-mono);
		font-size: clamp(14px, 1.7vw, 20px);
		line-height: 1.85;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--vd-on-ground);
		margin: 0;
	}
	.band .bs {
		color: var(--vd-faint);
	}

	/* BLOCKS — dark by default */
	.block {
		position: relative;
		padding: clamp(72px, 13vw, 168px) 0;
		border-top: 1px solid var(--vd-rule);
	}

	/* PAPER INTERMISSIONS — the lit scenes */
	.block.paper {
		background: var(--vd-paper);
		color: var(--vd-ink);
		border-top: none;
	}
	.paper .eyebrow,
	.paper .marker {
		color: var(--vd-ink-grey);
	}
	.paper .bs {
		color: var(--vd-ink-grey);
	}
	.paper .big {
		color: var(--vd-ink);
	}
	.paper .head {
		color: var(--vd-ink);
	}
	.paper .cols p,
	.paper .sub {
		color: var(--vd-ink-grey);
	}

	.big {
		font-family: var(--vd-display);
		font-weight: 500;
		font-size: clamp(26px, 3.6vw, 48px);
		line-height: 1.16;
		letter-spacing: -0.016em;
		max-width: 22ch;
		margin: clamp(20px, 3vw, 34px) 0 0;
	}
	.head {
		font-family: var(--vd-display);
		font-weight: 500;
		font-size: clamp(24px, 3.2vw, 42px);
		line-height: 1.08;
		letter-spacing: -0.016em;
		color: var(--vd-on-ground);
		margin: clamp(14px, 2vw, 24px) 0 0;
		max-width: 20ch;
	}
	.head.big-head {
		font-size: clamp(30px, 4.8vw, 62px);
		max-width: 15ch;
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
		color: var(--vd-muted);
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

	/* VALUES (paper) */
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

	/* PATH (dark) */
	.path {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		border-top: 1px solid var(--vd-rule-strong);
		margin-top: clamp(32px, 5vw, 56px);
	}
	.stage {
		position: relative;
		padding: 28px 24px 40px 0;
		border-bottom: 1px solid var(--vd-rule);
	}
	.stage:not(:last-child) {
		border-right: 1px solid var(--vd-rule);
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
		background: var(--vd-on-ground);
	}
	.stage.current .bar {
		width: 100%;
	}
	.stage.done .bar {
		width: 100%;
		background: var(--vd-faint);
	}
	.tick {
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--vd-faint);
	}
	.stage.current .tick {
		color: var(--vd-on-ground);
	}
	.stage h4 {
		font-family: var(--vd-display);
		font-weight: 500;
		font-size: 19px;
		color: var(--vd-on-ground);
		margin: 14px 0 8px;
	}
	.stage.done h4 {
		color: var(--vd-grey);
	}
	.stage p {
		font-family: var(--vd-mono);
		font-size: 12.5px;
		line-height: 1.65;
		color: var(--vd-muted);
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
			border-right: 1px solid var(--vd-rule) !important;
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

	/* LINEUP (dark) */
	.cat {
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--vd-grey);
		margin: clamp(36px, 5vw, 52px) 0 0;
	}
	.menu {
		border-top: 1px solid var(--vd-rule);
		margin-top: 10px;
	}
	.item {
		display: flex;
		justify-content: space-between;
		gap: 24px;
		align-items: baseline;
		padding: 16px 0;
		border-bottom: 1px solid var(--vd-rule);
		transition: padding-left 0.25s ease, background 0.25s ease;
	}
	.item:hover {
		padding-left: 14px;
		background: rgba(154, 155, 150, 0.04);
	}
	.item b {
		font-family: var(--vd-mono);
		font-weight: 500;
		font-size: 14px;
		color: var(--vd-on-ground);
		display: block;
	}
	.item .d {
		display: block;
		font-family: var(--vd-mono);
		font-size: 12px;
		color: var(--vd-muted);
		margin-top: 3px;
	}
	.item .src {
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--vd-faint);
		white-space: nowrap;
	}

	/* PASS (paper) */
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

	/* CONTACT — closing scene with a faint light pool */
	.contact {
		overflow: hidden;
	}
	.contact::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 0;
		background: radial-gradient(90% 120% at 50% 120%, rgba(86, 70, 48, 0.26), transparent 60%);
		pointer-events: none;
	}
	.contact .wrap {
		position: relative;
		z-index: 1;
	}

	/* FOOTER — centered cinematic production card (echoes the Coming Soon) */
	.foot {
		border-top: 1px solid var(--vd-rule);
		padding: clamp(56px, 9vw, 96px) 0 clamp(40px, 6vw, 64px);
	}
	.foot-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: clamp(20px, 3vw, 30px);
	}
	.foot-mark {
		opacity: 0.92;
	}
	.entity {
		display: flex;
		flex-direction: column;
		gap: 9px;
		margin: 0;
	}
	.entity span {
		font-family: var(--vd-mono);
		font-size: 10px;
		letter-spacing: 0.3em;
		text-transform: uppercase;
		text-indent: 0.3em;
		color: var(--vd-faint);
		line-height: 1.4;
	}
	.entity .lead {
		color: var(--vd-grey);
	}
	.entity a {
		color: var(--vd-grey);
		transition: color 200ms ease;
	}
	.entity a:hover {
		color: var(--vd-on-ground);
	}
	.foot-links {
		display: flex;
		align-items: center;
		gap: 12px;
		flex-wrap: wrap;
		justify-content: center;
	}
	.foot-links a {
		font-family: var(--vd-mono);
		font-size: 10px;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		text-indent: 0.2em;
		color: var(--vd-faint);
		transition: color 200ms ease;
	}
	.foot-links a:hover {
		color: var(--vd-on-ground);
	}
	.foot-links .dot {
		width: 2px;
		height: 2px;
		border-radius: 50%;
		background: var(--vd-rule-strong);
	}

	/* reveal */
	[data-reveal] {
		opacity: 0;
		transform: translateY(14px);
		transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16, 0.84, 0.3, 1);
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
		.scroll-cue {
			animation: none;
		}
	}

	/* Mobile — cosy */
	@media (max-width: 600px) {
		.hero {
			min-height: 88svh;
		}
		.band {
			padding: 110px 0;
		}
		.band-veil {
			background:
				linear-gradient(to bottom, rgba(11, 10, 9, 0.66), rgba(11, 10, 9, 0.4) 36%, rgba(11, 10, 9, 0.82));
		}
	}
</style>
