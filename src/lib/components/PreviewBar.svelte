<script>
	// Floating preview switcher — shown ONLY to authenticated admins on the public
	// home. Lets staff view any site state client-side while the public still sees
	// the deployed mode. Selection persists in localStorage.
	let { active, build, onSelect } = $props();
	const MODES = [
		{ v: 'coming_soon', label: 'Coming soon' },
		{ v: 'live', label: 'Live' },
		{ v: 'maintenance', label: 'Maintenance' }
	];
</script>

<div class="bar">
	<span class="tag">Preview</span>
	<div class="seg">
		{#each MODES as m}
			<button class:on={active === m.v} onclick={() => onSelect(m.v)}>
				{m.label}{#if build === m.v}<sup>live</sup>{/if}
			</button>
		{/each}
	</div>
	<a class="link" href="/admin">Admin →</a>
</div>

<style>
	.bar {
		position: fixed;
		bottom: var(--s-16);
		left: 50%;
		transform: translateX(-50%);
		z-index: 90;
		display: flex;
		align-items: center;
		gap: var(--s-16);
		padding: var(--s-8) var(--s-16);
		background: var(--warm);
		border: 1px solid var(--line-strong);
	}
	.tag {
		font-family: var(--mono);
		font-size: var(--t-eyebrow);
		letter-spacing: var(--ls-eyebrow);
		text-transform: uppercase;
		color: var(--grey-dim);
	}
	.seg {
		display: inline-flex;
		border: 1px solid var(--line);
	}
	.seg button {
		font-family: var(--mono);
		font-size: var(--t-eyebrow);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		background: transparent;
		color: var(--grey);
		border: 0;
		border-right: 1px solid var(--line);
		padding: var(--s-8) var(--s-16);
		cursor: pointer;
	}
	.seg button:last-child {
		border-right: 0;
	}
	.seg button.on {
		background: var(--ink);
		color: var(--bg);
	}
	.seg sup {
		font-size: 8px;
		margin-left: 3px;
		opacity: 0.7;
	}
	.link {
		font-family: var(--mono);
		font-size: var(--t-eyebrow);
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--grey);
	}
	.link:hover {
		color: var(--ink);
	}
</style>
