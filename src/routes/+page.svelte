<script>
	import { page } from '$app/stores';
	import { siteMode } from '$lib/site.js';
	import { brand } from '$lib/brand.js';
	import ComingSoon from '$lib/sections/ComingSoon.svelte';
	import Maintenance from '$lib/sections/Maintenance.svelte';
	import LiveHome from '$lib/sections/LiveHome.svelte';

	const mode = siteMode();

	const meta = {
		coming_soon: {
			title: `${brand.name} — Coming Soon | ${brand.tagline}`,
			desc: `${brand.name} is bringing a quieter, more considered form of retail to Ireland. ${brand.launchLine}.`
		},
		maintenance: {
			title: `${brand.name} — We'll be back shortly`,
			desc: 'Vendr is briefly offline for scheduled maintenance.'
		},
		live: {
			title: `${brand.name} — ${brand.tagline}`,
			desc: `A quieter form of retail. ${brand.launchLine}.`
		}
	}[mode];
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.desc} />
	<link rel="canonical" href={$page.url.href} />
	<meta name="theme-color" content="#000000" />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.desc} />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:image" content={`${$page.url.origin}/og.png`} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={meta.title} />
	<meta name="twitter:description" content={meta.desc} />
	<meta name="twitter:image" content={`${$page.url.origin}/og.png`} />

	{#if mode === 'maintenance'}<meta name="robots" content="noindex" />{/if}
</svelte:head>

{#if mode === 'coming_soon'}
	<ComingSoon />
{:else if mode === 'maintenance'}
	<Maintenance />
{:else}
	<LiveHome />
{/if}
