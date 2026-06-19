<script>
	// NotFound / error route. SvelteKit renders the nearest +error.svelte when a
	// route fails to match — with adapter-static fallback (404.html) on GitHub
	// Pages, any unknown path lands here as a 404. The dispenser is the 404; any
	// other status falls back to a stripped, calm holding card.
	//
	// On-brand rebuild of the static prototype: Andale/Cousine mono (NOT Space
	// Mono), paper-side tokens (NOT prototype hexes), 2px-max radius, dot accent,
	// the "\" machine-text terminator. Emotional bible governs the copy — dry and
	// calm, asks nothing, never sells. Deck is an editable array.
	import { onMount, tick } from 'svelte';
	import { page } from '$app/stores';
	import { brand } from '$lib/brand.js';
	import Wordmark from '$lib/components/Wordmark.svelte';

	// The column: each pull vends a sold-out card; the last one is the way out.
	// Edit freely — keep one trailing { exit: true } card as the resolution.
	const deck = [
		{ code: '/404', desc: 'Selection not found. This row is empty.', no: '001', foot: 'OUT OF STOCK' },
		{ code: '/SOLD-OUT', desc: 'Sold out. Nothing left in this column.', no: '002', foot: 'OUT OF STOCK' },
		{ code: '/STILL-NO', desc: 'Still empty. The machine has nothing here.', no: '003', foot: 'OUT OF STOCK' },
		{ code: '/EXIT', desc: 'This one is stocked. The way back home.', no: '004', foot: '/EXIT', exit: true }
	];

	const is404 = $derived(($page.status ?? 404) === 404);

	let i = $state(0); // index of the next card to dispense
	let current = $state(null); // the card showing in the slot (null = empty)
	let animating = $state(false);
	let dispensed = $state(false); // reached the exit card
	let reduce = false;

	let cardEl; // the physical card node (for the slide animation)
	let homeEl; // the revealed exit link (focus target on the final pull)
	let leverEl;

	const status = $derived(
		dispensed
			? 'DISPENSED.'
			: current
				? 'DISPENSED. PULL AGAIN.'
				: 'READY.'
	);
	const leverLabel = $derived(current ? 'DISPENSE AGAIN' : 'DISPENSE');

	onMount(() => {
		reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	});

	async function settle(item) {
		if (item.exit) {
			dispensed = true;
			await tick();
			homeEl?.focus();
		}
	}

	async function dispense() {
		if (animating || i >= deck.length) return;
		const item = deck[i];
		i += 1;

		if (reduce) {
			current = item;
			await settle(item);
			return;
		}

		animating = true;
		const drop = async () => {
			current = item;
			await tick();
			if (cardEl) {
				cardEl.classList.remove('retract');
				void cardEl.offsetWidth; // reflow so the dispense keyframe re-runs
				cardEl.classList.add('out');
			}
		};

		if (current && cardEl) {
			// retract the showing card up into the slot, then drop the next
			cardEl.classList.remove('out');
			cardEl.classList.add('retract');
			setTimeout(async () => {
				await drop();
				setTimeout(() => settle(item), 820);
				animating = false;
			}, 320);
		} else {
			await drop();
			setTimeout(() => settle(item), 820);
			animating = false;
		}
	}
</script>

<svelte:head>
	<title>{brand.name} | {is404 ? 'Out of stock' : 'Something went wrong'}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

{#if is404}
	<main class="nf">
		<div class="wrap">
			<header class="bar">
				<a class="brandmark" href="/" aria-label={brand.name}>
					<Wordmark src="/wordmark-dark.png" size={26} />
				</a>
				<span class="tag">Ireland-first <span class="dot" aria-hidden="true"></span></span>
			</header>

			<section class="stage">
				<p class="kick">404 <span class="bs">\</span> out of stock</p>
				<h1 class="headline">Nothing in this slot.</h1>
				<p class="sub">That selection is empty. Pull the lever for the way back.</p>

				<div class="machine">
					<div class="slot-housing"><div class="slot"></div></div>

					<div class="rail">
						{#if current}
							<article
								class="card"
								class:out={!reduce}
								bind:this={cardEl}
								role="status"
								aria-live="polite"
							>
								<span class="perf" aria-hidden="true"></span>
								<div class="code">{current.code}</div>
								<p class="desc">{current.desc}</p>
								<div class="foot">
									<span class="sys">Vendr systems <span class="bs">\</span></span>
									<span class="no">{current.no}</span>
								</div>
							</article>
						{/if}
					</div>

					<div class="controls">
						<button
							class="lever"
							bind:this={leverEl}
							onclick={dispense}
							disabled={dispensed}
							aria-label="Dispense"
						>
							<span>{leverLabel}</span>
							<span class="ldot" aria-hidden="true"></span>
						</button>

						{#if dispensed}
							<a class="home" href="/" bind:this={homeEl}>Back to safety <span aria-hidden="true">→</span></a>
						{/if}
					</div>
				</div>
			</section>

			<footer class="status" aria-live="polite">
				<span class="sdot" class:on={dispensed} aria-hidden="true"></span>
				<span>{status}</span>
			</footer>
		</div>
	</main>
{:else}
	<main class="nf err">
		<div class="wrap">
			<header class="bar">
				<a class="brandmark" href="/" aria-label={brand.name}>
					<Wordmark src="/wordmark-dark.png" size={26} />
				</a>
				<span class="tag">Ireland-first <span class="dot" aria-hidden="true"></span></span>
			</header>
			<section class="stage">
				<p class="kick">{$page.status} <span class="bs">\</span> system fault</p>
				<h1 class="headline">Something stalled.</h1>
				<p class="sub">The machine hit a fault, not you. Give it a moment, or head back.</p>
				<a class="home static" href="/">Back to safety <span aria-hidden="true">→</span></a>
			</section>
		</div>
	</main>
{/if}

<style>
	.nf {
		min-height: 100svh;
		background: var(--vd-paper);
		color: var(--vd-ink);
		font-family: var(--vd-mono);
		overflow-x: hidden;
		-webkit-font-smoothing: antialiased;
	}
	.wrap {
		min-height: 100svh;
		max-width: 1080px;
		margin: 0 auto;
		padding: 0 clamp(22px, 6vw, 40px);
		display: grid;
		grid-template-rows: auto 1fr auto;
	}

	/* ── top bar ──────────────────────────────────────────────────────────── */
	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--s-24);
		height: clamp(72px, 10vh, 96px);
	}
	.brandmark {
		display: inline-flex;
		color: var(--vd-ink); /* paper ink — covers the wordmark text fallback */
	}
	.tag {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		font-size: 11px;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--vd-ink-grey);
	}
	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--vd-ink);
	}

	/* ── stage (centered — deliberate single-focus exception) ─────────────── */
	.stage {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: clamp(16px, 4vh, 40px) 0;
	}
	.kick {
		font-size: 12px;
		letter-spacing: 0.32em;
		text-transform: uppercase;
		color: var(--vd-ink-grey);
		margin: 0;
	}
	.bs {
		color: var(--vd-ink-faint);
	}
	.headline {
		font-family: var(--vd-display);
		font-weight: 400;
		font-size: clamp(30px, 5vw, 52px);
		letter-spacing: -0.02em;
		line-height: 1.05;
		margin: clamp(16px, 3vh, 22px) 0 12px;
	}
	.sub {
		font-size: 13px;
		letter-spacing: 0.06em;
		line-height: 1.85;
		color: var(--vd-ink-grey);
		max-width: 42ch;
		margin: 0 0 clamp(36px, 6vh, 54px);
	}

	/* ── machine ──────────────────────────────────────────────────────────── */
	.machine {
		position: relative;
		width: 540px;
		max-width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.slot-housing {
		position: relative;
		width: 100%;
		height: 30px;
		z-index: 3;
	}
	.slot {
		position: absolute;
		left: 50%;
		top: 0;
		transform: translateX(-50%);
		width: 420px;
		max-width: 96%;
		height: 18px;
		background: var(--vd-ink);
		border-radius: 2px;
	}
	.slot::after {
		content: '';
		position: absolute;
		left: 14px;
		right: 14px;
		top: 7px;
		height: 3px;
		background: #000;
		border-radius: 2px;
		opacity: 0.5;
	}

	/* the card is hidden up inside the slot; it slides down on dispense */
	.rail {
		position: relative;
		width: 360px;
		max-width: 90%;
		height: 236px;
		margin-top: -9px;
	}
	.card {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		min-height: 228px;
		background: var(--vd-paper-card);
		border: 1px solid var(--vd-paper-edge);
		border-top: none;
		border-radius: 0 0 2px 2px;
		padding: 34px 30px 26px;
		text-align: left;
		display: flex;
		flex-direction: column;
		/* Single restrained shadow — the sanctioned physical-depth exception for
		   the dispensed card only (book: shadows are an exception, never default). */
		box-shadow: 0 18px 30px -24px rgba(22, 20, 15, 0.4);
	}
	.card.out {
		transform: translateY(-244px);
		opacity: 0;
		animation: dispense 0.9s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
	}
	.card.retract {
		animation: retract 0.32s ease-in forwards;
	}
	@keyframes dispense {
		0% {
			transform: translateY(-244px);
			opacity: 0;
		}
		12% {
			opacity: 1;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}
	@keyframes retract {
		0% {
			transform: translateY(0);
			opacity: 1;
		}
		100% {
			transform: translateY(-244px);
			opacity: 0;
		}
	}
	.perf {
		position: absolute;
		left: 22px;
		right: 22px;
		top: 11px;
		height: 1px;
		border-top: 1px dashed var(--vd-paper-edge);
	}
	.code {
		font-size: 34px;
		letter-spacing: -0.01em;
	}
	.desc {
		font-size: 12px;
		letter-spacing: 0.04em;
		line-height: 1.6;
		color: var(--vd-ink-grey);
		margin: 12px 0 0;
		max-width: 26ch;
	}
	.foot {
		margin-top: auto;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}
	.foot .sys {
		font-size: 11px;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--vd-ink-faint);
	}
	.foot .no {
		font-size: 11px;
		letter-spacing: 0.18em;
		color: var(--vd-ink);
	}

	/* ── controls ─────────────────────────────────────────────────────────── */
	.controls {
		margin-top: 44px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
	}
	.lever {
		display: inline-flex;
		align-items: center;
		gap: 18px;
		border: 1px solid var(--vd-ink);
		background: var(--vd-paper);
		color: var(--vd-ink);
		font-family: var(--vd-mono);
		font-size: 13px;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		padding: 16px 30px;
		cursor: pointer;
		transition: background 0.15s, color 0.15s, transform 0.06s;
	}
	.lever:hover:not(:disabled) {
		background: var(--vd-ink);
		color: var(--vd-paper);
	}
	.lever:hover:not(:disabled) .ldot {
		background: var(--vd-paper);
	}
	.lever:active:not(:disabled) {
		transform: translateY(1px);
	}
	.lever:disabled {
		opacity: 0.32;
		cursor: default;
	}
	.lever:focus-visible {
		outline: 2px solid var(--vd-ink);
		outline-offset: 3px;
	}
	.ldot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--vd-ink);
		transition: background 0.15s;
	}

	.home {
		display: inline-flex;
		align-items: center;
		gap: 14px;
		background: var(--vd-ink);
		color: var(--vd-paper);
		font-size: 12px;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		padding: 15px 26px;
		animation: rise 0.4s ease both;
	}
	.home.static {
		margin-top: clamp(28px, 5vh, 40px);
		animation: none;
	}
	.home:hover {
		background: var(--vd-warm, #1a1714);
	}
	.home:focus-visible {
		outline: 2px solid var(--vd-ink);
		outline-offset: 3px;
	}
	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(6px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}

	/* ── status footer ────────────────────────────────────────────────────── */
	.status {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 12px;
		height: 80px;
		border-top: 1px solid var(--vd-ink-rule);
		font-size: 11px;
		letter-spacing: 0.24em;
		text-transform: uppercase;
		color: var(--vd-ink-faint);
	}
	.sdot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--vd-ink-faint);
		transition: background 0.3s;
	}
	.sdot.on {
		background: var(--vd-ink);
	}

	/* error variant centers its single card */
	.err .stage {
		min-height: 60vh;
		justify-content: center;
	}

	@media (max-width: 600px) {
		.machine {
			width: 100%;
		}
		.headline {
			font-size: 30px;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.card.out {
			animation: none;
			transform: translateY(0);
			opacity: 1;
		}
		.home {
			animation: none;
		}
	}
</style>
