<script>
	// STATE: maintenance — cinematic title-card, sibling of the Coming Soon.
	// Centered, glowing wordmark emerging from a dark vignetted frame; a legible
	// off-white headline; status as a refined centered card. The "\" motif, mono,
	// monochrome. (A true 503 needs a server — this is the holding page.)
	import { brand, contact } from '$lib/brand.js';

	let {
		status = 'Scheduled maintenance',
		eta = 'Today, 18:00 IST',
		affected = 'vendr.ie · Pass app'
	} = $props();

	const rows = [
		['Status', status],
		['Back by', eta],
		['Affected', affected]
	];
</script>

<main class="mt">
	<div class="plate" aria-hidden="true">
		<div class="grain"></div>
	</div>

	<div class="frame">
		<header class="leader">
			<span class="reel">System paused</span>
			<span class="reel">Back shortly</span>
		</header>

		<section class="ident">
			<img class="mark" src="/wordmark.png" alt={brand.name} />
			<h1 class="headline">We're refining something<span class="bs"> \</span></h1>
			<p class="lede">
				Vendr is briefly offline for scheduled maintenance. The machines are fine — we're just
				tightening a few bolts behind the scenes.
			</p>

			<dl class="data">
				{#each rows as [k, v]}
					<div><dt>{k}</dt><dd>{v}</dd></div>
				{/each}
			</dl>

			<a class="contact" href={contact.href}>Urgent? {contact.email}</a>
		</section>

		<footer class="credit">
			<p class="card">
				<span class="lead">{brand.legalEntity}</span>
				<span>A {brand.parent} Company</span>
				<span>Est. {brand.established}</span>
			</p>
		</footer>
	</div>
</main>

<style>
	.mt {
		position: relative;
		min-height: 100svh;
		background: var(--vd-ground);
		color: var(--vd-on-ground);
		overflow: hidden;
		isolation: isolate;
	}
	.plate {
		position: absolute;
		inset: 0;
		z-index: 0;
		background:
			radial-gradient(115% 80% at 50% 92%, rgba(86, 70, 48, 0.42), rgba(86, 70, 48, 0) 58%),
			radial-gradient(85% 60% at 50% 12%, rgba(154, 155, 150, 0.05), transparent 60%),
			radial-gradient(150% 120% at 50% 50%, transparent 40%, rgba(5, 4, 3, 0.7) 100%),
			var(--vd-ground);
	}
	.grain {
		position: absolute;
		inset: -50%;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
		opacity: 0.045;
		mix-blend-mode: overlay;
	}

	.frame {
		position: relative;
		z-index: 1;
		min-height: 100svh;
		display: grid;
		grid-template-rows: auto 1fr auto;
		gap: clamp(28px, 6vh, 56px);
		padding: clamp(22px, 4vh, 40px) clamp(22px, 6vw, 72px) clamp(26px, 4vh, 44px);
		text-align: center;
	}
	.leader {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-family: var(--vd-mono);
		font-size: 10.5px;
		letter-spacing: 0.32em;
		text-transform: uppercase;
		color: var(--vd-faint);
	}
	.leader .reel {
		text-indent: 0.32em;
	}

	.ident {
		align-self: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: clamp(20px, 3.4vh, 32px);
		animation: fade-up 1.5s cubic-bezier(0.16, 0.84, 0.3, 1) both;
	}
	.mark {
		width: clamp(176px, 26vw, 320px);
		height: auto;
		filter: drop-shadow(0 0 40px rgba(244, 243, 240, 0.14))
			drop-shadow(0 14px 36px rgba(0, 0, 0, 0.5));
	}
	.headline {
		font-family: var(--vd-display);
		font-weight: 500;
		font-size: clamp(28px, 4.6vw, 56px);
		line-height: 1.04;
		letter-spacing: -0.02em;
		color: var(--vd-on-ground);
		max-width: 16ch;
		margin: 0;
	}
	.bs {
		color: var(--vd-grey);
	}
	.lede {
		font-family: var(--vd-mono);
		font-size: clamp(13px, 1.3vw, 15px);
		line-height: 1.75;
		color: var(--vd-muted);
		max-width: 52ch;
		margin: 0;
	}

	.data {
		margin: clamp(6px, 1.5vh, 14px) auto 0;
		width: min(420px, 86vw);
		border-top: 1px solid var(--vd-rule);
	}
	.data div {
		display: flex;
		justify-content: space-between;
		gap: 16px;
		padding: 13px 0;
		border-bottom: 1px solid var(--vd-rule);
	}
	.data dt {
		font-family: var(--vd-mono);
		font-size: 10.5px;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--vd-faint);
	}
	.data dd {
		margin: 0;
		font-family: var(--vd-mono);
		font-size: 12.5px;
		color: var(--vd-grey);
	}
	.contact {
		display: inline-block;
		margin-top: clamp(6px, 1.5vh, 14px);
		font-family: var(--vd-mono);
		font-size: 11px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--vd-grey);
		border-bottom: 1px solid var(--vd-rule-strong);
		padding-bottom: 3px;
		transition: color 200ms ease;
	}
	.contact:hover {
		color: var(--vd-on-ground);
	}

	.credit {
		align-self: end;
		animation: fade-up 1.5s cubic-bezier(0.16, 0.84, 0.3, 1) 0.5s both;
	}
	.card {
		display: flex;
		flex-direction: column;
		gap: 9px;
		margin: 0;
	}
	.card span {
		font-family: var(--vd-mono);
		font-size: 10px;
		letter-spacing: 0.34em;
		text-transform: uppercase;
		text-indent: 0.34em;
		color: var(--vd-faint);
		line-height: 1.3;
	}
	.card .lead {
		color: var(--vd-grey);
	}

	@keyframes fade-up {
		from {
			opacity: 0;
			transform: translateY(14px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.ident,
		.credit {
			animation: none;
		}
	}

	@media (max-width: 600px) {
		.frame {
			gap: 30px;
			padding: 26px 22px 30px;
		}
		.leader {
			font-size: 9.5px;
			letter-spacing: 0.26em;
		}
		.mark {
			width: min(58vw, 240px);
		}
		.card span {
			letter-spacing: 0.26em;
			text-indent: 0.26em;
		}
	}
</style>
