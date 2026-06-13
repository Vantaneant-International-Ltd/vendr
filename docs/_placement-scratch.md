# PLACEMENT — reframe as track record?

Recoverable holding pen. This is the **PATH / roadmap section cut from the
consumer page** (`src/lib/sections/LiveHome.svelte`). On the consumer surface it
read as startup "watch us grow" and invited rooting for the company, which
crosses the no-hero stance (bible §3). It may return on the **placement** (B2B)
surface, where a track record is allowed to make a case to a landlord — reframe
it there rather than dropping it back onto the consumer brand page.

Pasted verbatim so it can be restored wholesale: the `path` data, the section
markup, and the CSS that styled it (`.path`, `.stage`, `.bar`, `.tick`, and the
`.block.alt` background it used). `.head` is shared and stayed in LiveHome.

Two inbound links into this section were also removed from LiveHome (not
preserved here — trivial to recreate): the nav item `<a href="#path">Path</a>`
and the hero CTA `<a href="#path" class="link">See the path</a>`. Note the
shared `Footer.svelte` still has `<a href="/#path">Our path</a>` — left untouched
(off the change list); it will resolve once a section with `id="path"` exists
again.

## Data (was the `path` array)

```js
const path = [
	{ tick: 'Complete', h: 'Foundation', p: 'The brand is set. The website is live.', s: 'done' },
	{ tick: 'Now', h: 'First placements', p: 'Selecting the first locations. Conversations underway with venues.', s: 'current' },
	{ tick: 'Then', h: 'Operations', p: 'Install, stock, service. The routine that keeps a machine full.', s: '' },
	{ tick: brand.launchLabel, h: 'Launch', p: 'Wider rollout across Ireland.', s: '' }
];
```

## Markup (was the `#path` section)

```svelte
<!-- PATH -->
<section class="block alt" id="path">
	<div class="wrap">
		<span class="eyebrow">02 <span class="bs">\</span> Our path</span>
		<h2 class="head" data-reveal>A deliberate progression.</h2>
		<div class="path">
			{#each path as st}
				<div class="stage {st.s}" data-reveal>
					<span class="bar"></span>
					<span class="tick">{st.tick}</span>
					<h4>{st.h}</h4>
					<p>{st.p}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
```

## Styles

```css
.block.alt {
	background: color-mix(in srgb, var(--vd-ink) 4%, var(--vd-paper));
}

/* PATH */
.path {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	border-top: 1px solid var(--vd-ink-rule-strong);
	margin-top: clamp(32px, 5vw, 56px);
}
.stage {
	position: relative;
	padding: 28px 24px 40px 0;
	border-bottom: 1px solid var(--vd-ink-rule);
}
.stage:not(:last-child) {
	border-right: 1px solid var(--vd-ink-rule);
	padding-right: 24px;
}
.stage:not(:first-child) {
	padding-left: 24px;
}
.stage .bar {
	position: absolute;
	top: -1px;
	left: 0;
	height: 2px;
	width: 0;
	background: var(--vd-ink);
}
.stage.current .bar {
	width: 100%;
}
.stage.done .bar {
	width: 100%;
	background: var(--vd-ink-faint);
}
.tick {
	font-family: var(--vd-mono);
	font-size: 11px;
	letter-spacing: 0.16em;
	text-transform: uppercase;
	color: var(--vd-ink-faint);
}
.stage.current .tick {
	color: var(--vd-ink);
}
.stage h4 {
	font-family: var(--vd-display);
	font-weight: 500;
	font-size: 19px;
	color: var(--vd-ink);
	margin: 14px 0 8px;
}
.stage.done h4 {
	color: var(--vd-ink-grey);
}
.stage p {
	font-family: var(--vd-mono);
	font-size: 12.5px;
	line-height: 1.65;
	color: var(--vd-ink-grey);
}
@media (max-width: 860px) {
	.path {
		grid-template-columns: 1fr 1fr;
	}
	.stage {
		padding-right: 24px !important;
		padding-left: 0 !important;
		border-right: none !important;
	}
	.stage:nth-child(odd) {
		border-right: 1px solid var(--vd-ink-rule) !important;
		padding-right: 24px !important;
	}
	.stage:nth-child(even) {
		padding-left: 24px !important;
	}
}
@media (max-width: 480px) {
	.path {
		grid-template-columns: 1fr;
	}
	.stage {
		border-right: none !important;
		padding-left: 0 !important;
		padding-right: 0 !important;
	}
}
```
