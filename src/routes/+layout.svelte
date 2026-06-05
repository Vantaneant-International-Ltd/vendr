<script lang="ts">
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	import { trackPageView } from '$lib/analytics.js';
	import CookieBanner from '$lib/components/CookieBanner.svelte';

	let { children } = $props();

	// Fires on first mount AND every client-side navigation, so GA records
	// the real route (gtag's auto-pageview is off — see app.html).
	afterNavigate(({ to }) => {
		if (to?.url) trackPageView(to.url);
	});
</script>

{@render children()}
<CookieBanner />
