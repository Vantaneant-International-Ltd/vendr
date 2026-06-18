<script>
	// Square key/value data panel — the book's restrained metadata device.
	// rows: Array<{ k: string, v: string }>
	let { rows = [] } = $props();
</script>

<dl class="panel">
	{#each rows as row}
		<div class="row">
			<dt>{row.k}</dt>
			<dd>{row.v}</dd>
		</div>
	{/each}
</dl>

<style>
	.panel {
		margin: 0;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--warm);
	}
	.row {
		display: flex;
		justify-content: space-between;
		gap: var(--s-16);
		padding: var(--s-16) var(--s-24);
		border-bottom: 1px solid var(--line);
	}
	.row:last-child {
		border-bottom: none;
	}
	dt {
		font-family: var(--mono);
		font-size: var(--t-eyebrow);
		letter-spacing: 0.24em;
		text-transform: uppercase;
		color: var(--grey-dim);
	}
	dd {
		margin: 0;
		font-family: var(--mono);
		font-size: var(--t-small);
		color: var(--grey);
		text-align: right;
	}
</style>
