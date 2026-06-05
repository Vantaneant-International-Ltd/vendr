<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { siteMode } from '$lib/site.js';
	import { brand } from '$lib/brand.js';
	import { supabase, isAdmin } from '$lib/supabase.js';
	import ComingSoon from '$lib/sections/ComingSoon.svelte';
	import Maintenance from '$lib/sections/Maintenance.svelte';
	import LiveHome from '$lib/sections/LiveHome.svelte';
	import PreviewBar from '$lib/components/PreviewBar.svelte';

	const buildMode = siteMode(); // deployed (prerendered) state — what the public sees

	let admin = $state(false);
	let override = $state(null); // admin-only client-side preview
	const mode = $derived(override ?? buildMode);

	const meta = {
		coming_soon: {
			title: `${brand.name} | Coming Soon`,
			desc: `${brand.name} is bringing a quieter, more considered form of retail to Ireland. ${brand.launchLine}.`
		},
		maintenance: {
			title: `${brand.name} | We'll be back shortly`,
			desc: 'Vendr is briefly offline for scheduled maintenance.'
		},
		live: {
			title: `${brand.name} | ${brand.tagline}`,
			desc: `A quieter form of retail. ${brand.launchLine}.`
		}
	};
	const m = $derived(meta[buildMode]); // SEO always reflects the real public state

	const MODES = ['coming_soon', 'maintenance', 'live'];

	onMount(async () => {
		// ?preview=<mode> previews any state client-side — review convenience.
		// Crawlers/SEO still see the deployed (prerendered) mode. The on-page
		// switcher stays admin-only.
		const url = new URL(location.href);
		const req = url.searchParams.get('preview');
		if (req && MODES.includes(req)) override = req === buildMode ? null : req;

		const { data } = await supabase.auth.getSession();
		if (!data.session) return;
		admin = await isAdmin();
		if (admin && !req) {
			const stored = localStorage.getItem('vendr_preview');
			if (stored && stored !== buildMode) override = stored;
		}
	});

	function selectPreview(v) {
		override = v === buildMode ? null : v;
		localStorage.setItem('vendr_preview', v);
	}
</script>

<svelte:head>
	<title>{m.title}</title>
	<meta name="description" content={m.desc} />
	<link rel="canonical" href={$page.url.href} />
	<meta name="theme-color" content="#000000" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={m.title} />
	<meta property="og:description" content={m.desc} />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:image" content={`${$page.url.origin}/og.png`} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={m.title} />
	<meta name="twitter:description" content={m.desc} />
	<meta name="twitter:image" content={`${$page.url.origin}/og.png`} />
	{#if buildMode === 'maintenance'}<meta name="robots" content="noindex" />{/if}
</svelte:head>

{#if mode === 'coming_soon'}
	<ComingSoon />
{:else if mode === 'maintenance'}
	<Maintenance />
{:else}
	<LiveHome />
{/if}

{#if admin}
	<PreviewBar active={mode} build={buildMode} onSelect={selectPreview} />
{/if}
