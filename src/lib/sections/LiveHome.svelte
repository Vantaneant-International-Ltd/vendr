<script>
	// STATE: live — full landing. Structure ported from the Premium Landing HTML,
	// executed entirely in brand-book canon: left-aligned, hairline-ruled, Andale
	// mono throughout, serif for display headlines only, square, no shadows.
	import { onMount } from 'svelte';
	import { brand, subBrands, contact } from '$lib/brand.js';
	import Wordmark from '$lib/components/Wordmark.svelte';
	import Eyebrow from '$lib/components/Eyebrow.svelte';
	import Rule from '$lib/components/Rule.svelte';
	import DataPanel from '$lib/components/DataPanel.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const values = [
		{ n: '01', h: 'Clarity', p: 'Systems and interactions designed to be simple, legible, and intuitive.' },
		{ n: '02', h: 'Intent', p: 'Every placement and product is deliberate — thoughtful integration over scale.' },
		{ n: '03', h: 'Infrastructure', p: 'Reliable, unobtrusive, designed to support everyday use without disruption.' },
		{ n: '04', h: 'Longevity', p: 'Built for durability and long-term relevance over short-term trends.' }
	];

	const path = [
		{ tick: 'Complete', h: 'Soft Launch', p: 'Presence and credibility established. We listened, learned, refined.', state: 'done' },
		{ tick: 'Now · Validation', h: 'Validation', p: 'Selective pilot placements underway. Proving reliability and fit in real spaces.', state: 'current' },
		{ tick: 'Then', h: 'Operations', p: 'Operational foundations locked. Systems proven at scale.', state: '' },
		{ tick: brand.launchLabel, h: 'Launch', p: 'Careful expansion begins across Ireland.', state: '' }
	];

	const drinks = [
		{ name: 'Ballygowan Still', desc: 'Irish natural spring water', src: 'Ballygowan' },
		{ name: 'Ballygowan Sparkling', desc: 'Irish sparkling spring water', src: 'Ballygowan' },
		{ name: 'BLK Water', desc: 'Mineral-rich alkaline water', src: 'BLK' },
		{ name: 'Actiph Alkaline 8.0+', desc: 'Functional hydration', src: 'Actiph' },
		{ name: 'San Pellegrino Limonata', desc: 'Premium citrus soft drink', src: 'San Pellegrino' }
	];
	const snacks = [
		{ name: "Keogh's Sweet Chilli & Irish Red Pepper", desc: 'Irish artisan crisps', src: "Keogh's" },
		{ name: "Keogh's Shamrock & Sour Cream", desc: 'Irish artisan crisps', src: "Keogh's" },
		{ name: 'Butlers Chocolate Bar', desc: 'Irish chocolate', src: 'Butlers' },
		{ name: 'Fulfil Protein Bar', desc: 'High-protein, low sugar', src: 'Fulfil' },
		{ name: 'Graze Savoury Snack', desc: 'Portion-controlled snacking', src: 'Graze' }
	];

	const passRows = [
		{ k: 'Status', v: subBrands.pass.status },
		{ k: 'Arrives', v: 'With launch, 2026' },
		{ k: 'Where', v: 'Every placement' },
		{ k: 'For', v: 'Returning members' }
	];

	onMount(() => {
		const els = document.querySelectorAll('[data-reveal]');
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						e.target.classList.add('in');
						io.unobserve(e.target);
					}
				});
			},
			{ threshold: 0.12 }
		);
		els.forEach((el) => io.observe(el));
	});
</script>

<!-- TOP BAR -->
<header class="topbar">
	<a href="#top" aria-label={brand.name}><Wordmark size={20} /></a>
	<div class="meta">
		<span class="hide-sm">{brand.launchLine}</span>
		<a href={contact.href}>{contact.email}</a>
	</div>
</header>

<!-- HERO -->
<section class="hero" id="top">
	<div class="hero-bg" aria-hidden="true">
		<img src="/assets/machine1.jpg" alt="" loading="eager" decoding="async" />
		<div class="hero-veil"></div>
	</div>
	<div class="hero-inner wrap">
		<Eyebrow>{brand.tagline}</Eyebrow>
		<h1 class="display statement">{brand.statement}</h1>
		<p class="hero-lede">
			A quieter form of retail — curated products, reliable infrastructure, and thoughtful placement
			across Ireland's workplaces and hospitality spaces.
		</p>
		<div class="cta-row">
			<a href="#contact" class="btn">Discuss a placement</a>
			<a href="#path" class="text-link">See our path →</a>
		</div>
	</div>
</section>

<!-- ABOUT + VALUES -->
<section class="block" id="about">
	<div class="wrap">
		<Eyebrow>01 — About</Eyebrow>
		<p class="display big" data-reveal>
			Vendr exists to modernise vending — replacing outdated machines with something more considered.
		</p>
		<div class="support" data-reveal>
			<p>
				Not volume. Not noise. A modern vending platform built on product curation, intelligent
				infrastructure, and placement made with intention.
			</p>
			<p>
				Designed for workplaces, operators, and environments that value quality, reliability, and
				brand alignment — where retail, technology, and environment meet.
			</p>
		</div>

		<div class="values">
			{#each values as v}
				<div class="value" data-reveal>
					<span class="vn">{v.n}</span>
					<h3 class="display">{v.h}</h3>
					<p>{v.p}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- PATH -->
<section class="block" id="path">
	<div class="wrap">
		<div class="path-head">
			<div>
				<Eyebrow>02 — Our path</Eyebrow>
				<h2 class="display">A deliberate progression.</h2>
			</div>
			<p class="path-sub">Toward premium, unattended retail in Ireland. We move by readiness, not noise.</p>
		</div>
		<div class="path">
			{#each path as s}
				<div class="stage {s.state}" data-reveal>
					<span class="bar"></span>
					<span class="tick">{s.tick}</span>
					<h4 class="display">{s.h}</h4>
					<p>{s.p}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- LINEUP -->
<section class="block" id="lineup">
	<div class="wrap">
		<Eyebrow>03 — A sample lineup</Eyebrow>
		<h2 class="display lineup-h">Curated. Irish-first. Seasonal.</h2>
		<p class="path-sub wide">
			A considered selection of premium refreshments. Availability varies by location and season —
			products shown are indicative of the Vendr range.
		</p>

		<p class="cat">Hydration &amp; Drinks</p>
		<div class="menu">
			{#each drinks as item}
				<div class="item" data-reveal>
					<span><span class="name">{item.name}</span><span class="desc">{item.desc}</span></span>
					<span class="src">{item.src}</span>
				</div>
			{/each}
		</div>

		<p class="cat">Snacks</p>
		<div class="menu">
			{#each snacks as item}
				<div class="item" data-reveal>
					<span><span class="name">{item.name}</span><span class="desc">{item.desc}</span></span>
					<span class="src">{item.src}</span>
				</div>
			{/each}
		</div>

		<p class="lineup-note">Products shown are indicative of the Vendr range.</p>
	</div>
</section>

<!-- VENDR PASS -->
<section class="block" id="pass">
	<div class="wrap">
		<div class="pass" data-reveal>
			<div>
				<Eyebrow>04 — {subBrands.pass.name}</Eyebrow>
				<h2 class="display pass-h">A rewards system designed to make premium vending feel fair.</h2>
				<p class="pass-p">
					Recognising the people who return. Quietly rewarding everyday choices, across every Vendr
					placement. More to share closer to launch.
				</p>
			</div>
			<div class="pass-aside"><DataPanel rows={passRows} /></div>
		</div>
	</div>
</section>

<!-- CONTACT -->
<section class="block" id="contact">
	<div class="wrap">
		<Eyebrow>05 — Enquire</Eyebrow>
		<h2 class="display contact-h">A placement is a conversation.</h2>
		<p class="path-sub wide">
			Tell us where you'd like a Vendr machine. We respond to institutional and partnership enquiries
			within two working days.
		</p>
		<div class="cta-row">
			<a href={contact.enquiryHref} class="btn">Discuss a placement</a>
			<a href={contact.href} class="text-link">{contact.email}</a>
		</div>
	</div>
</section>

<div class="wrap"><Footer /></div>

<style>
	.wrap {
		max-width: var(--maxw);
		margin: 0 auto;
		padding: 0 clamp(var(--s-24), 5vw, var(--s-64));
	}

	/* TOP BAR */
	.topbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 50;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--s-24) clamp(var(--s-24), 5vw, var(--s-64));
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0));
	}
	.meta {
		display: flex;
		gap: var(--s-24);
		align-items: center;
		font-family: var(--mono);
		font-size: var(--t-eyebrow);
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--grey);
	}
	.meta a:hover {
		color: var(--ink);
	}
	@media (max-width: 720px) {
		.meta .hide-sm {
			display: none;
		}
	}

	/* HERO */
	.hero {
		position: relative;
		min-height: 100svh;
		display: grid;
		align-items: center;
		overflow: hidden;
		padding: var(--s-160) 0 var(--s-96);
	}
	.hero-bg {
		position: absolute;
		inset: 0;
		z-index: 0;
	}
	.hero-bg img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: brightness(0.4) saturate(0.85) contrast(1.02);
	}
	.hero-veil {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(120% 90% at 28% 32%, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.8) 70%),
			linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(26, 23, 20, 0.15) 42%, rgba(0, 0, 0, 0.86));
	}
	.hero-inner {
		position: relative;
		z-index: 1;
		width: 100%;
	}
	.statement {
		font-size: var(--t-64);
		font-style: italic;
		line-height: 1.1;
		max-width: 16ch;
		margin: var(--s-24) 0 0;
		color: var(--ink);
	}
	.hero-lede {
		margin-top: var(--s-24);
		max-width: 52ch;
		font-family: var(--mono);
		font-size: var(--t-body);
		color: var(--grey);
	}
	.cta-row {
		display: flex;
		gap: var(--s-24);
		align-items: center;
		flex-wrap: wrap;
		margin-top: var(--s-40);
	}
	.btn {
		font-family: var(--mono);
		font-size: var(--t-eyebrow);
		letter-spacing: var(--ls-eyebrow);
		text-transform: uppercase;
		color: var(--ink);
		border: 1px solid var(--line-strong);
		border-radius: var(--radius);
		padding: var(--s-16) var(--s-24);
		transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
	}
	.btn:hover {
		background: var(--ink);
		color: var(--bg);
		border-color: var(--ink);
	}
	.text-link {
		font-family: var(--mono);
		font-size: var(--t-eyebrow);
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--grey);
		border-bottom: 1px solid transparent;
		padding-bottom: var(--s-4);
		transition: color 0.2s ease, border-color 0.2s ease;
	}
	.text-link:hover {
		color: var(--ink);
		border-color: var(--line-strong);
	}

	/* SECTION SHELL */
	.block {
		padding: clamp(var(--s-64), 12vw, var(--s-160)) 0;
		border-top: 1px solid var(--line);
	}
	.big {
		font-size: var(--t-48);
		line-height: 1.18;
		max-width: 20ch;
		margin: var(--s-24) 0 0;
		color: var(--ink);
	}
	.support {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: clamp(var(--s-24), 5vw, var(--s-64));
		max-width: 820px;
		margin-top: var(--s-40);
	}
	.support p {
		font-family: var(--mono);
		color: var(--grey);
	}
	@media (max-width: 680px) {
		.support {
			grid-template-columns: 1fr;
			gap: var(--s-24);
		}
	}

	/* VALUES */
	.values {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		border-top: 1px solid var(--line);
		margin-top: clamp(var(--s-40), 7vw, var(--s-96));
	}
	.value {
		padding: var(--s-40) var(--s-24) var(--s-40) 0;
		border-bottom: 1px solid var(--line);
	}
	.value:not(:last-child) {
		border-right: 1px solid var(--line);
		padding-right: var(--s-24);
	}
	.value:not(:first-child) {
		padding-left: var(--s-24);
	}
	.vn {
		font-family: var(--mono);
		font-size: var(--t-eyebrow);
		letter-spacing: 0.2em;
		color: var(--grey-dim);
	}
	.value h3 {
		font-size: var(--t-24);
		margin: var(--s-16) 0 var(--s-8);
		color: var(--ink);
	}
	.value p {
		font-family: var(--mono);
		font-size: var(--t-small);
		color: var(--grey);
	}
	@media (max-width: 860px) {
		.values {
			grid-template-columns: repeat(2, 1fr);
		}
		.value {
			padding-right: var(--s-24) !important;
			padding-left: 0 !important;
			border-right: none !important;
		}
		.value:nth-child(odd) {
			border-right: 1px solid var(--line) !important;
			padding-right: var(--s-24) !important;
		}
		.value:nth-child(even) {
			padding-left: var(--s-24) !important;
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
	.path-head {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		flex-wrap: wrap;
		gap: var(--s-16);
		margin-bottom: var(--s-64);
	}
	.path-head h2 {
		font-size: var(--t-36);
		margin: var(--s-8) 0 0;
		color: var(--ink);
	}
	.path-sub {
		font-family: var(--mono);
		color: var(--grey);
		max-width: 34ch;
		font-size: var(--t-small);
	}
	.path-sub.wide {
		max-width: 56ch;
		margin-top: var(--s-16);
	}
	.path {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		border-top: 1px solid var(--line-strong);
	}
	.path .stage {
		padding: var(--s-24) var(--s-24) var(--s-40) 0;
		border-bottom: 1px solid var(--line);
		position: relative;
	}
	.path .stage:not(:last-child) {
		border-right: 1px solid var(--line);
		padding-right: var(--s-24);
	}
	.path .stage:not(:first-child) {
		padding-left: var(--s-24);
	}
	.tick {
		font-family: var(--mono);
		font-size: var(--t-eyebrow);
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--grey-dim);
	}
	.path .stage h4 {
		font-size: var(--t-24);
		margin: var(--s-16) 0 var(--s-8);
		color: var(--ink);
	}
	.path .stage p {
		font-family: var(--mono);
		font-size: var(--t-small);
		color: var(--grey);
	}
	.bar {
		position: absolute;
		top: -1px;
		left: 0;
		height: 2px;
		width: 0;
		background: var(--ink);
	}
	.stage.current .bar {
		width: 100%;
	}
	.stage.done .bar {
		width: 100%;
		background: var(--grey-dim);
	}
	.stage.current .tick {
		color: var(--ink);
	}
	.stage.done .tick,
	.stage.done h4 {
		color: var(--grey);
	}
	@media (max-width: 860px) {
		.path {
			grid-template-columns: repeat(2, 1fr);
		}
		.path .stage {
			padding-right: var(--s-24) !important;
			padding-left: 0 !important;
			border-right: none !important;
		}
		.path .stage:nth-child(odd) {
			border-right: 1px solid var(--line) !important;
			padding-right: var(--s-24) !important;
		}
		.path .stage:nth-child(even) {
			padding-left: var(--s-24) !important;
		}
	}
	@media (max-width: 480px) {
		.path {
			grid-template-columns: 1fr;
		}
		.path .stage {
			border-right: none !important;
			padding-left: 0 !important;
			padding-right: 0 !important;
		}
	}

	/* LINEUP */
	.lineup-h {
		font-size: var(--t-36);
		margin: var(--s-8) 0 0;
		color: var(--ink);
	}
	.cat {
		font-family: var(--mono);
		font-size: var(--t-eyebrow);
		letter-spacing: var(--ls-eyebrow);
		text-transform: uppercase;
		color: var(--grey);
		margin: var(--s-40) 0 0;
	}
	.menu {
		border-top: 1px solid var(--line);
		margin-top: var(--s-8);
	}
	.item {
		display: flex;
		justify-content: space-between;
		gap: var(--s-24);
		align-items: baseline;
		padding: var(--s-16) 0;
		border-bottom: 1px solid var(--line);
		transition: padding-left 0.25s ease;
	}
	.item:hover {
		padding-left: var(--s-16);
	}
	.name {
		font-family: var(--mono);
		font-size: var(--t-body);
		color: var(--ink);
		display: block;
	}
	.desc {
		display: block;
		font-family: var(--mono);
		font-size: var(--t-small);
		color: var(--grey);
		margin-top: var(--s-4);
	}
	.src {
		font-family: var(--mono);
		font-size: var(--t-eyebrow);
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--grey-dim);
		white-space: nowrap;
	}
	.lineup-note {
		margin-top: var(--s-40);
		font-family: var(--mono);
		font-size: var(--t-small);
		color: var(--grey-dim);
	}

	/* VENDR PASS */
	.pass {
		background: var(--warm);
		border-radius: var(--radius);
		padding: clamp(var(--s-40), 8vw, var(--s-96)) clamp(var(--s-24), 6vw, var(--s-64));
		display: grid;
		grid-template-columns: 1.3fr 1fr;
		gap: clamp(var(--s-24), 6vw, var(--s-64));
		align-items: center;
	}
	.pass-h {
		font-size: var(--t-36);
		line-height: 1.12;
		margin: var(--s-16) 0 0;
		color: var(--ink);
	}
	.pass-p {
		margin-top: var(--s-24);
		font-family: var(--mono);
		font-size: var(--t-small);
		color: var(--grey);
		max-width: 42ch;
	}
	@media (max-width: 760px) {
		.pass {
			grid-template-columns: 1fr;
		}
	}

	/* CONTACT */
	.contact-h {
		font-size: var(--t-48);
		font-style: italic;
		margin: var(--s-16) 0 0;
		max-width: 16ch;
		color: var(--ink);
	}

	/* reveal */
	[data-reveal] {
		opacity: 0;
		transform: translateY(14px);
		transition: opacity 0.7s cubic-bezier(0.22, 0.61, 0.36, 1),
			transform 0.7s cubic-bezier(0.22, 0.61, 0.36, 1);
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
