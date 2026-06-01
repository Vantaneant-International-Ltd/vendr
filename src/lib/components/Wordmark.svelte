<script>
	// Official logotype. Renders the supplied wordmark image (drop your file at
	// static/wordmark.png — see README). Falls back to a bold-sans text mark so
	// nothing breaks before the asset is uploaded. The wordmark is the brand's
	// SOLE identifier — no symbol anywhere.
	import { brand, subBrands } from '$lib/brand.js';

	let {
		/** @type {'select'|'pass'|null} */ sub = null,
		/** logotype height in px */ size = 22,
		/** heading element or inline */ as = 'span',
		src = '/wordmark.png',
		title = brand.name
	} = $props();

	let ok = $state(true);
	const lockup = sub ? subBrands[sub].name.replace(/^Vendr\s*/, '/ ') : null;
</script>

<svelte:element this={as} class="wordmark" style="--wm-size:{size}px" aria-label={title}>
	{#if ok}
		<img class="mark" {src} alt={title} height={size} onerror={() => (ok = false)} />
	{:else}
		<span class="mark text" aria-hidden="true">{brand.mark}</span>
	{/if}
	{#if lockup}<span class="lockup">{lockup}</span>{/if}
</svelte:element>

<style>
	.wordmark {
		display: inline-flex;
		align-items: baseline;
		gap: var(--s-8);
		line-height: 1;
		color: var(--ink);
	}
	.mark.text {
		/* logotype exception: the mark is a bold geometric sans, not Andale.
		   This is an emergency text fallback only — the real mark is the PNG. */
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		font-weight: 700;
		font-size: var(--wm-size);
		letter-spacing: -0.02em;
	}
	.mark {
		display: block;
		width: auto;
	}
	.lockup {
		font-family: var(--mono);
		font-size: calc(var(--wm-size) * 0.5);
		letter-spacing: 0.08em;
		color: var(--grey);
		text-transform: uppercase;
	}
</style>
