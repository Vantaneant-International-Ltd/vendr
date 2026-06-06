<script>
	// STATE: maintenance — its OWN identity: a left-aligned, structured technical
	// "system status" holding page. Lives in the dark Vendr world (mono, the "\"
	// motif, monochrome) but is NOT the centered title-card — it reads like a
	// control panel. (A true 503 needs a server; this is the holding page.)
	import { brand, contact } from '$lib/brand.js';
	import Wordmark from '$lib/components/Wordmark.svelte';

	let {
		status = 'Scheduled maintenance',
		eta = 'When ready',
		affected = 'vendr.ie'
	} = $props();

	const rows = [
		['Status', status],
		['Back by', eta],
		['Affected', affected]
	];
</script>

<main class="mt">
	<header class="bar top">
		<a href="/" aria-label={brand.name}><Wordmark src="/wordmark.png" size={24} /></a>
		<span class="tag">{brand.tagline}</span>
	</header>

	<section class="core">
		<span class="marker">System paused <span class="bs">\</span> back shortly</span>
		<h1 class="headline">We're refining something <span class="bs">\</span></h1>
		<p class="lede">
			Vendr is briefly offline for scheduled maintenance. Nothing is wrong. Back shortly.
		</p>

		<dl class="data">
			{#each rows as [k, v]}
				<div><dt>{k}</dt><dd>{v}</dd></div>
			{/each}
		</dl>

		<a class="contact" href={contact.href}>Urgent? {contact.email}</a>
	</section>

	<footer class="bar bottom">
		<span class="tag">{brand.legalEntity}</span>
		<span class="tag">Est. {brand.established}</span>
	</footer>
</main>

<style>
	.mt {
		min-height: 100svh;
		background: var(--vd-ground);
		color: var(--vd-on-ground);
		display: flex;
		flex-direction: column;
		padding: clamp(20px, 4vw, 40px) clamp(20px, 6vw, 80px);
		gap: clamp(40px, 8vh, 96px);
	}
	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--s-24);
		flex-wrap: wrap;
	}
	.tag {
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--vd-faint);
	}
	.core {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		max-width: 640px;
	}
	.marker {
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--vd-grey);
		margin-bottom: clamp(20px, 4vh, 32px);
	}
	.headline {
		font-family: var(--vd-display);
		font-weight: 500;
		font-size: clamp(30px, 5vw, 60px);
		line-height: 1.05;
		letter-spacing: -0.02em;
		color: var(--vd-on-ground);
		max-width: 16ch;
		margin: 0;
	}
	.bs {
		color: var(--vd-grey);
	}
	.lede {
		font-family: var(--vd-mono);
		font-size: clamp(13px, 1.3vw, 15px);
		line-height: 1.75;
		color: var(--vd-muted);
		max-width: 48ch;
		margin: clamp(20px, 3vh, 28px) 0 0;
	}
	.data {
		margin: clamp(32px, 5vh, 44px) 0 0;
		max-width: 420px;
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
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--vd-faint);
	}
	.data dd {
		margin: 0;
		font-family: var(--vd-mono);
		font-size: 13px;
		color: var(--vd-grey);
	}
	.contact {
		display: inline-block;
		margin-top: clamp(28px, 4vh, 40px);
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--vd-grey);
		border-bottom: 1px solid var(--vd-rule-strong);
		padding-bottom: 3px;
		transition: color 200ms ease;
	}
	.contact:hover {
		color: var(--vd-on-ground);
	}
	@media (max-width: 600px) {
		.mt {
			padding: 28px 22px 34px;
			gap: 40px;
		}
		.top .tag {
			display: none;
		}
	}
</style>
