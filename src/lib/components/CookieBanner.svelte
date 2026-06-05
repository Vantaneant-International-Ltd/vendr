<script>
	// Vendr cookie consent — drives Google Consent Mode v2 (gtag is loaded
	// in app.html with analytics_storage default-denied). Accept all flips
	// it to granted; Decline leaves it denied (cookie-less pings only).
	import { onMount } from 'svelte';

	const STORAGE_KEY = 'vendr-cookie-consent';
	let visible = $state(false);

	function gtagConsent(analyticsGranted) {
		if (typeof window.gtag !== 'function') return;
		window.gtag('consent', 'update', {
			analytics_storage: analyticsGranted ? 'granted' : 'denied',
			ad_storage: 'denied',
			ad_user_data: 'denied',
			ad_personalization: 'denied'
		});
	}

	onMount(() => {
		try {
			visible = !localStorage.getItem(STORAGE_KEY);
		} catch {
			// localStorage blocked (private mode etc.) — show the banner once
			visible = true;
		}
	});

	function accept() {
		try { localStorage.setItem(STORAGE_KEY, 'all'); } catch {}
		gtagConsent(true);
		visible = false;
	}
	function decline() {
		try { localStorage.setItem(STORAGE_KEY, 'essential'); } catch {}
		gtagConsent(false);
		visible = false;
	}
</script>

{#if visible}
	<aside class="cb" role="region" aria-label="Cookie consent">
		<p class="copy">
			<span class="pre">Cookies <span class="bs">\</span></span>
			Vendr uses essential cookies to run the site, plus anonymous analytics to
			improve it. No advertising, ever.
			<a class="link" href="/privacy">Privacy</a>
		</p>
		<div class="actions">
			<button class="btn ghost" onclick={decline}>Decline</button>
			<button class="btn solid" onclick={accept}>Accept all</button>
		</div>
	</aside>
{/if}

<style>
	.cb {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 200;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: clamp(16px, 4vw, 48px);
		flex-wrap: wrap;
		background: var(--vd-ground);
		border-top: 1px solid var(--vd-rule-strong);
		padding: clamp(16px, 2.4vw, 22px) clamp(20px, 6vw, 80px);
		padding-bottom: calc(clamp(16px, 2.4vw, 22px) + env(safe-area-inset-bottom, 0px));
	}
	.copy {
		font-family: var(--vd-mono);
		font-size: 12px;
		line-height: 1.7;
		color: var(--vd-muted);
		max-width: 68ch;
		margin: 0;
	}
	.pre {
		color: var(--vd-grey);
		text-transform: uppercase;
		letter-spacing: 0.14em;
		font-size: 10px;
		margin-right: 8px;
	}
	.bs {
		color: var(--vd-faint);
	}
	.link {
		color: var(--vd-on-ground);
		border-bottom: 1px solid var(--vd-rule-strong);
		padding-bottom: 1px;
		margin-left: 4px;
		transition: color 200ms ease;
	}
	.link:hover {
		color: var(--vd-grey);
	}
	.actions {
		display: flex;
		gap: 10px;
		flex-shrink: 0;
	}
	.btn {
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		padding: 10px 18px;
		border-radius: 0;
		cursor: pointer;
		transition: all 200ms ease;
		white-space: nowrap;
	}
	.ghost {
		background: transparent;
		border: 1px solid var(--vd-rule-strong);
		color: var(--vd-grey);
	}
	.ghost:hover {
		border-color: var(--vd-grey);
		color: var(--vd-on-ground);
	}
	.solid {
		background: var(--vd-on-ground);
		border: 1px solid var(--vd-on-ground);
		color: var(--vd-ground);
	}
	.solid:hover {
		background: transparent;
		color: var(--vd-on-ground);
	}
	@media (max-width: 600px) {
		.cb {
			flex-direction: column;
			align-items: stretch;
			gap: 14px;
			padding: 18px 22px;
			padding-bottom: calc(18px + env(safe-area-inset-bottom, 0px));
		}
		.actions {
			justify-content: stretch;
		}
		.btn {
			flex: 1;
		}
	}
</style>
