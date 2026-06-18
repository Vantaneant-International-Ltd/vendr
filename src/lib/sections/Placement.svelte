<script>
	// SURFACE: placement — the B2B sales page (a landlord-facing pitch, NOT the
	// consumer brand page). Unlike the consumer surface it is ALLOWED to ask:
	// the CTAs stay direct, "Premium" and "machine" are fine here. Copy relocated
	// as-is from the old mixed LiveHome. Same paper-led editorial idiom, the "\"
	// motif, cosy mobile.
	import { brand, contact } from '$lib/brand.js';
	import Wordmark from '$lib/components/Wordmark.svelte';

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

</script>

<!-- NAV -->
<header class="nav">
	<div class="wrap nav-in">
		<a href="/" aria-label={brand.name}><Wordmark src="/wordmark-dark.png" size={22} /></a>
		<nav class="nav-links" aria-label="Sections">
			<a href="#lineup">Lineup</a>
			<a href="#contact" class="enquire">Enquire →</a>
		</nav>
	</div>
</header>

<main id="top">
	<!-- HERO — placement masthead -->
	<section class="hero">
		<div class="wrap">
			<span class="marker" data-reveal>Placement <span class="bs">\</span> Ireland <span class="bs">\</span> Est. {brand.established}</span>
			<h1 class="head big-head" data-reveal>A placement is a conversation.</h1>
			<p class="lede" data-reveal>
				Made for places that care how things look and work. <span class="bs">\</span> Offices, hotels,
				gyms. The lobby that sets the tone.
			</p>
			<div class="cta" data-reveal>
				<a href={contact.enquiryHref} class="btn">Discuss a placement →</a>
				<a href={contact.href} class="link">{contact.email}</a>
			</div>
		</div>
	</section>

	<!-- LINEUP -->
	<section class="block" id="lineup">
		<div class="wrap">
			<span class="eyebrow">01 <span class="bs">\</span> A sample lineup</span>
			<h2 class="head" data-reveal>Irish-first. Stocked by season.</h2>
			<p class="sub" data-reveal>
				A sample, not the full list. What you find varies by location and season.
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

	<!-- THE MACHINE — the unit that carries it (third beat: conversation, stock, machine, ask) -->
	<section class="block dark" id="machine">
		<div class="wrap">
			<span class="eyebrow">02 <span class="bs">\</span> The machine</span>
			<h2 class="head big-head" data-reveal>One machine, chosen once.</h2>
			<p class="lede" data-reveal>
				Every Vendr runs on a commercial-grade Magex unit, chosen for reliability,
				faced and stocked to a standard. Bottles and delicate items are lowered, not
				dropped. Selection is by touchscreen, the way you would choose in a shop. It is
				monitored remotely, so most faults are resolved before anyone notices. One unit
				to start, with a companion alongside it when the space asks for more.
			</p>
			<div class="machines" data-reveal>
				<figure class="machine-card">
					<div class="machine-shot">
						<img src="/assets/idea9-master.jpg" alt="idea9 master vending unit" loading="lazy" decoding="async" />
					</div>
					<figcaption>
						<span class="mc-label">idea9 <span class="bs">\</span></span>
						<p class="mc-role">The master unit. Touchscreen, payment, full curation.</p>
						<p class="mc-note">Refrigerated, with elevator dispensing.</p>
					</figcaption>
				</figure>
				<figure class="machine-card">
					<div class="machine-shot">
						<img src="/assets/idea9-module.jpg" alt="idea9 companion module" loading="lazy" decoding="async" />
					</div>
					<figcaption>
						<span class="mc-label">idea9 module <span class="bs">\</span></span>
						<p class="mc-role">The companion. Added capacity, the same standard.</p>
					</figcaption>
				</figure>
			</div>
		</div>
	</section>

	<!-- CONTACT -->
	<section class="block" id="contact">
		<div class="wrap">
			<span class="eyebrow">03 <span class="bs">\</span> Enquire</span>
			<h2 class="head big-head" data-reveal>Tell us where a Vendr machine should go.</h2>
			<p class="sub" data-reveal>We read every enquiry and reply ourselves.</p>
			<div class="cta" data-reveal>
				<a href={contact.enquiryHref} class="btn">Discuss a placement →</a>
				<a href={contact.href} class="link">{contact.email}</a>
			</div>
		</div>
	</section>

	<!-- FOOTER — plain editorial -->
	<footer class="foot">
		<div class="wrap foot-in">
			<a href="/" aria-label={brand.name}><Wordmark src="/wordmark-dark.png" size={20} /></a>
			<div class="entity">
				<span class="lead">{brand.legalEntity}</span>
				<span>A <a href={brand.parentUrl} target="_blank" rel="noopener">{brand.parent}</a> Company, sister to <a href={brand.affiliate.url} target="_blank" rel="noopener">{brand.affiliate.name}</a></span>
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
	.nav-links a:hover,
	.enquire {
		color: var(--vd-ink) !important;
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

	/* HERO — editorial masthead */
	.hero {
		padding: clamp(64px, 11vw, 132px) 0 clamp(56px, 9vw, 112px);
	}

	/* BLOCKS — paper */
	.block {
		padding: clamp(56px, 10vw, 128px) 0;
		border-top: 1px solid var(--vd-ink-rule);
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
	.head.big-head {
		font-size: clamp(30px, 4.8vw, 60px);
		max-width: 15ch;
	}
	.sub {
		font-family: var(--vd-mono);
		font-size: 13.5px;
		line-height: 1.85;
		color: var(--vd-ink-grey);
		max-width: 56ch;
		margin-top: 14px;
	}

	/* LINEUP */
	.cat {
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.24em;
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
		font-weight: 400;
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
		letter-spacing: 0.24em;
		text-transform: uppercase;
		color: var(--vd-ink-faint);
		white-space: nowrap;
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

	/* THE MACHINE — quiet evidence, two cards, never a catalogue */
	.machines {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: clamp(20px, 4vw, 40px);
		margin-top: clamp(36px, 5vw, 56px);
		max-width: 760px;
	}
	.machine-card {
		margin: 0;
	}
	.machine-shot {
		aspect-ratio: 1 / 1;
		background: var(--vd-paper);
		border: 1px solid var(--vd-ink-rule-strong);
		border-radius: 2px;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.machine-shot img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		filter: grayscale(1) contrast(1.02);
	}
	.machine-card figcaption {
		margin-top: 16px;
	}
	.mc-label {
		display: block;
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.24em;
		text-transform: uppercase;
		color: var(--vd-ink-grey);
	}
	.mc-role {
		font-family: var(--vd-mono);
		font-size: 13px;
		line-height: 1.6;
		color: var(--vd-ink);
		margin: 8px 0 0;
		max-width: 30ch;
	}
	.mc-note {
		font-family: var(--vd-mono);
		font-size: 12px;
		line-height: 1.6;
		color: var(--vd-ink-grey);
		margin: 6px 0 0;
		max-width: 30ch;
	}
	@media (max-width: 640px) {
		.machines {
			grid-template-columns: 1fr;
			gap: 28px;
		}
	}

	/* THE MACHINE — dark punctuation, mirroring the homepage rhythm so the page
	   is not wall-to-wall paper. Machine renders sit as light plates on dark. */
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
	.dark .lede {
		color: var(--vd-muted);
	}
	.dark .mc-label {
		color: var(--vd-grey);
	}
	.dark .mc-role {
		color: var(--vd-on-ground);
	}
	.dark .mc-note {
		color: var(--vd-muted);
	}
	.dark .machine-shot {
		border-color: var(--vd-rule-strong);
	}

	/* reveal — pure CSS, zero JS dependency. Content is VISIBLE by default; when
	   JS confirms (html.vd-js, set synchronously in app.html) a one-shot fade-up
	   plays on load. If the animation never runs, content simply stays visible —
	   the page can never be blank. */
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
</style>
