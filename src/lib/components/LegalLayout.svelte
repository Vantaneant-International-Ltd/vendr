<script>
	// Shared shell for legal/info pages — canon: left-aligned, ruled, mono.
	import Wordmark from './Wordmark.svelte';
	import Eyebrow from './Eyebrow.svelte';
	import Rule from './Rule.svelte';
	import Footer from './Footer.svelte';

	let { eyebrow, title, updated = true, children } = $props();
	const today = new Date().toISOString().slice(0, 10);
</script>

<div class="wrap">
	<header class="head">
		<a href="/" aria-label="Vendr — home"><Wordmark size={20} /></a>
		<Eyebrow>{eyebrow}</Eyebrow>
		<h1 class="display">{title}</h1>
	</header>
	<Rule />
	<div class="body">
		{@render children()}
		{#if updated}<p class="updated">Last updated: {today}</p>{/if}
	</div>
	<Footer compact />
</div>

<style>
	.wrap {
		max-width: 800px;
		margin: 0 auto;
		padding: var(--s-64) clamp(var(--s-24), 5vw, var(--s-40)) 0;
		min-height: 100svh;
	}
	.head {
		display: flex;
		flex-direction: column;
		gap: var(--s-16);
		margin-bottom: var(--s-24);
	}
	.head h1 {
		font-size: var(--t-36);
		color: var(--ink);
	}
	.body {
		padding: var(--s-40) 0 var(--s-64);
	}
	.body :global(p) {
		font-family: var(--mono);
		font-size: var(--t-body);
		line-height: 1.7;
		color: var(--grey);
		max-width: 64ch;
		margin-bottom: var(--s-24);
	}
	.body :global(a) {
		color: var(--ink);
		border-bottom: 1px solid var(--line-strong);
	}
	.updated {
		font-size: var(--t-small) !important;
		color: var(--grey-dim) !important;
	}
</style>
