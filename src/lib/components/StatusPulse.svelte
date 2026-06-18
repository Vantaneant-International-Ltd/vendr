<script>
	// Slow "breathing" status mark — kept from the HTML, rebuilt in canon (grey,
	// no chroma). Used on the Maintenance state.
	let { label = null } = $props();
</script>

<span class="wrap">
	<span class="pulse" aria-hidden="true"></span>
	{#if label}<span class="label">{label}</span>{/if}
</span>

<style>
	.wrap {
		display: inline-flex;
		align-items: center;
		gap: var(--s-16);
	}
	.pulse {
		position: relative;
		width: 10px;
		height: 10px;
		border-radius: 0;
		background: var(--grey);
		flex: none;
	}
	.pulse::after {
		content: '';
		position: absolute;
		inset: -8px;
		border-radius: 0;
		border: 1px solid var(--line-strong);
		animation: ring 2.8s ease-out infinite;
	}
	.label {
		font-family: var(--mono);
		font-size: var(--t-eyebrow);
		letter-spacing: var(--ls-eyebrow);
		text-transform: uppercase;
		color: var(--grey);
	}
	@keyframes ring {
		0% {
			transform: scale(0.6);
			opacity: 0.9;
		}
		100% {
			transform: scale(1.8);
			opacity: 0;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.pulse::after {
			animation: none;
		}
	}
</style>
