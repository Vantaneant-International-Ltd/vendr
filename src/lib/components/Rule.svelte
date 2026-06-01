<script>
	// Hairline grey rule. `strong` uses the heavier line token.
	let { strong = false } = $props();
</script>

<hr class="rule" class:strong aria-hidden="true" />

<style>
	.rule {
		border: 0;
		height: 1px;
		width: 100%;
		background: var(--line);
		margin: 0;
	}
	.rule.strong {
		background: var(--line-strong);
	}
</style>
