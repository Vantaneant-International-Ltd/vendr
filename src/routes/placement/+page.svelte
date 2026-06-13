<script>
	// PLACEMENT — the B2B sales surface, its own prerendered route (distinct from
	// the consumer home at /). prerender=true is inherited from +layout.js.
	import { page } from '$app/stores';
	import { brand } from '$lib/brand.js';
	import Placement from '$lib/sections/Placement.svelte';

	const title = `${brand.name} | Placement`;
	const desc =
		'Vendr placements for workplaces and hospitality across Ireland. A short, Irish-first list; machines that simply work. Discuss a placement.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<link rel="canonical" href={$page.url.href} />
	<meta name="theme-color" content="#f4f3f0" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:image" content={`${$page.url.origin}/og.png`} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={desc} />
	<meta name="twitter:image" content={`${$page.url.origin}/og.png`} />
</svelte:head>

<Placement />
