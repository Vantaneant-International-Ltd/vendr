<script>
	// Letter-spaced uppercase mono eyebrow — the book's small-label device.
	let { children, as = 'span' } = $props();
</script>

<svelte:element this={as} class="eyebrow">{@render children()}</svelte:element>

<style>
	.eyebrow {
		display: block;
		font-family: var(--mono);
		font-size: var(--t-eyebrow);
		letter-spacing: var(--ls-eyebrow);
		text-transform: uppercase;
		color: var(--grey);
	}
</style>
