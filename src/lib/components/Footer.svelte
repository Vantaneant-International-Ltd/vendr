<script>
	// Shared footer — left-aligned, hairline-ruled. Wordmark-only (no symbol).
	import { brand, contact } from '$lib/brand.js';
	import Wordmark from './Wordmark.svelte';
	import Rule from './Rule.svelte';

	const year = new Date().getFullYear();
	let { compact = false } = $props();
</script>

<footer class="footer">
	<Rule />
	<div class="grid" class:compact>
		<div class="mark-col">
			<Wordmark size={22} />
			<p class="legal">
				© {year}
				{brand.legalEntity} All rights reserved.<br />
				Vendr is a trading name of {brand.legalEntity}<br />
				Part of {brand.parent} · Ireland. Soft launch.
			</p>
		</div>

		{#if !compact}
			<nav class="col" aria-label="Explore">
				<h5>Explore</h5>
				<a href="/#about">About</a>
				<a href="/#path">Our path</a>
				<a href="/#lineup">Lineup</a>
				<a href="/#pass">Vendr Pass</a>
			</nav>
		{/if}

		<nav class="col" aria-label="Contact and legal">
			<h5>Contact</h5>
			<a href={contact.href}>{contact.email}</a>
			<a href={contact.linkedin} target="_blank" rel="noopener">LinkedIn</a>
			<a href="/privacy">Privacy</a>
			<a href="/terms">Terms</a>
			<a href="/legal">Legal</a>
		</nav>
	</div>
</footer>

<style>
	.footer {
		padding-top: var(--s-40);
	}
	.grid {
		display: grid;
		grid-template-columns: 1.6fr 1fr 1fr;
		gap: var(--s-40);
		align-items: start;
		padding: var(--s-40) 0 var(--s-64);
	}
	.grid.compact {
		grid-template-columns: 1.6fr 1fr;
	}
	.legal {
		margin-top: var(--s-16);
		font-family: var(--mono);
		font-size: var(--t-eyebrow);
		letter-spacing: 0.04em;
		color: var(--grey-dim);
		line-height: 1.9;
	}
	.col h5 {
		margin: 0 0 var(--s-16);
		font-family: var(--mono);
		font-size: var(--t-eyebrow);
		font-weight: 400;
		letter-spacing: var(--ls-eyebrow);
		text-transform: uppercase;
		color: var(--grey);
	}
	.col a {
		display: block;
		padding: var(--s-4) 0;
		font-family: var(--mono);
		font-size: var(--t-small);
		color: var(--grey);
		transition: color 0.2s ease;
	}
	.col a:hover {
		color: var(--ink);
	}
	@media (max-width: 720px) {
		.grid,
		.grid.compact {
			grid-template-columns: 1fr 1fr;
		}
		.mark-col {
			grid-column: 1 / -1;
		}
	}
	@media (max-width: 480px) {
		.grid,
		.grid.compact {
			grid-template-columns: 1fr;
		}
	}
</style>
