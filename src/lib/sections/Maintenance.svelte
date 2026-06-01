<script>
	// STATE: maintenance — holding page. Canon re-skin: left-aligned, mono,
	// breathing status pulse, square data panel. (Host returns 200; a true 503
	// needs a server — noted in README.)
	import { brand, contact } from '$lib/brand.js';
	import Wordmark from '$lib/components/Wordmark.svelte';
	import StatusPulse from '$lib/components/StatusPulse.svelte';
	import DataPanel from '$lib/components/DataPanel.svelte';

	// These mirror the HTML's editable fields; surface as props if a CMS lands.
	let {
		status = 'Scheduled maintenance',
		eta = 'Today, 18:00 IST',
		affected = 'vendr.ie · Pass app'
	} = $props();

	const rows = [
		{ k: 'Status', v: status },
		{ k: 'Back by', v: eta },
		{ k: 'Affected', v: affected }
	];
</script>

<main class="stage">
	<div class="inner">
		<header class="head">
			<Wordmark size={28} />
			<div class="pulse"><StatusPulse label="Live again shortly" /></div>
		</header>

		<h1 class="display statement">We're refining something.</h1>
		<p class="lede">
			Vendr is briefly offline for scheduled maintenance. The machines are fine — we're just
			tightening a few bolts behind the scenes.
		</p>

		<div class="panel"><DataPanel {rows} /></div>

		<a class="contact" href={contact.href}>Urgent? {contact.email}</a>
	</div>
</main>

<style>
	.stage {
		min-height: 100svh;
		display: grid;
		align-content: center;
		padding: var(--s-96) clamp(var(--s-24), 6vw, var(--s-96));
		background: radial-gradient(120% 90% at 30% 38%, var(--warm), var(--bg) 72%);
	}
	.inner {
		width: 100%;
		max-width: 620px;
	}
	.head {
		display: flex;
		flex-direction: column;
		gap: var(--s-24);
		margin-bottom: var(--s-40);
	}
	.statement {
		font-size: var(--t-48);
		font-style: italic;
		line-height: 1.1;
		max-width: 16ch;
		margin: 0;
		color: var(--ink);
	}
	.lede {
		margin-top: var(--s-24);
		max-width: 44ch;
		font-family: var(--mono);
		font-size: var(--t-body);
		line-height: 1.65;
		color: var(--grey);
	}
	.panel {
		margin-top: var(--s-40);
		max-width: 420px;
	}
	.contact {
		display: inline-block;
		margin-top: var(--s-40);
		font-family: var(--mono);
		font-size: var(--t-eyebrow);
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--grey);
		border-bottom: 1px solid var(--line-strong);
		padding-bottom: var(--s-4);
		transition: color 0.2s ease;
	}
	.contact:hover {
		color: var(--ink);
	}
</style>
