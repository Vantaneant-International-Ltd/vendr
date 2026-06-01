<script>
	// Supporting lede paragraph — mono, muted, measure-limited. Left-aligned.
	let { children, max = '52ch' } = $props();
</script>

<p class="lede" style="--lede-max:{max}">{@render children()}</p>

<style>
	.lede {
		font-family: var(--mono);
		font-size: var(--t-body);
		line-height: 1.65;
		color: var(--grey);
		max-width: var(--lede-max);
	}
</style>
