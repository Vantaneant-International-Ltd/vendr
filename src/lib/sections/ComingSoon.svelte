<script>
	// STATE: coming_soon — teaser with email capture. Canon: left-aligned,
	// cinematic darkened hero + veil, mono body, serif display statement, square.
	import { brand, contact } from '$lib/brand.js';
	import Wordmark from '$lib/components/Wordmark.svelte';
	import Eyebrow from '$lib/components/Eyebrow.svelte';
	import EmailCapture from '$lib/components/EmailCapture.svelte';
</script>

<main class="stage">
	<div class="bg" aria-hidden="true">
		<img src="/assets/machine1.jpg" alt="" class="bg-img" loading="eager" decoding="async" />
		<div class="veil"></div>
	</div>

	<div class="inner">
		<header class="head">
			<Wordmark size={28} />
			<Eyebrow>{brand.tagline}</Eyebrow>
		</header>

		<h1 class="display statement">{brand.statement}</h1>
		<p class="lede">
			We're bringing a quieter, more considered form of retail to Ireland's workplaces and
			hospitality spaces. {brand.launchLine}.
		</p>

		<div class="capture-wrap">
			<EmailCapture />
		</div>
	</div>

	<footer class="foot">
		<Eyebrow>A {brand.parent} company</Eyebrow>
		<a class="foot-link" href={contact.href}>{contact.email}</a>
		<a class="foot-link" href={contact.linkedin} target="_blank" rel="noopener">LinkedIn</a>
		<a class="foot-link staff" href="/admin">Staff</a>
	</footer>
</main>

<style>
	.stage {
		position: relative;
		min-height: 100svh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow: hidden;
		padding: var(--s-96) clamp(var(--s-24), 6vw, var(--s-96));
	}
	.bg {
		position: absolute;
		inset: 0;
		z-index: 0;
	}
	.bg-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: brightness(0.34) saturate(0.82) contrast(1.02);
	}
	.veil {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(120% 90% at 30% 30%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.82) 72%),
			linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(26, 23, 20, 0.2) 45%, rgba(0, 0, 0, 0.88));
	}
	.inner {
		position: relative;
		z-index: 1;
		width: 100%;
		max-width: var(--maxw);
		margin: 0 auto;
	}
	.head {
		display: flex;
		flex-direction: column;
		gap: var(--s-16);
		margin-bottom: var(--s-64);
	}
	.statement {
		font-size: var(--t-64);
		font-style: italic;
		line-height: 1.08;
		max-width: 14ch;
		margin: 0;
		color: var(--ink);
	}
	.lede {
		margin-top: var(--s-24);
		max-width: 48ch;
		font-family: var(--mono);
		font-size: var(--t-body);
		line-height: 1.65;
		color: var(--grey);
	}
	.capture-wrap {
		margin-top: var(--s-40);
	}
	.foot {
		position: relative;
		z-index: 1;
		display: flex;
		gap: var(--s-24);
		flex-wrap: wrap;
		align-items: center;
		max-width: var(--maxw);
		margin: var(--s-64) auto 0;
	}
	.foot-link {
		font-family: var(--mono);
		font-size: var(--t-eyebrow);
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--grey-dim);
		border-bottom: 1px solid var(--line-strong);
		padding-bottom: var(--s-4);
		transition: color 0.2s ease;
	}
	.foot-link:hover {
		color: var(--ink);
	}
	.foot-link.staff {
		margin-left: auto;
		border-bottom-color: transparent;
		color: var(--grey-dim);
		opacity: 0.7;
	}
	.foot-link.staff:hover {
		opacity: 1;
		color: var(--ink);
	}
</style>
