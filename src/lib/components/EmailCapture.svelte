<script>
	// Square email capture. Soft-launch: there is NO backend on this static host,
	// so submit composes a mailto. When a real endpoint exists, set `endpoint`
	// (a POST URL) — see the marked block below — and it will POST instead.
	import { contact } from '$lib/brand.js';

	let {
		placeholder = 'Your email — be first to know',
		cta = 'Notify me',
		note = 'No noise. One message when we open.',
		/** real subscribe endpoint, when built; null → mailto fallback */
		endpoint = null
	} = $props();

	let email = $state('');

	async function submit(e) {
		e.preventDefault();
		if (!email) return;
		// ── REAL ENDPOINT SLOTS IN HERE ──────────────────────────────────────
		if (endpoint) {
			await fetch(endpoint, {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ email })
			});
			return;
		}
		// ── Static / soft-launch fallback: mailto ────────────────────────────
		window.location.href = `${contact.href}?subject=${encodeURIComponent(
			'Notify me — Vendr'
		)}&body=${encodeURIComponent(email)}`;
	}
</script>

<form class="capture" onsubmit={submit}>
	<input
		type="email"
		bind:value={email}
		{placeholder}
		aria-label="Email"
		autocomplete="email"
		required
	/>
	<button type="submit">{cta}</button>
</form>
{#if note}<p class="note">{note}</p>{/if}

<style>
	.capture {
		display: flex;
		max-width: 460px;
		border: 1px solid var(--line-strong);
		border-radius: var(--radius);
	}
	input {
		flex: 1;
		min-width: 0;
		background: transparent;
		border: 0;
		outline: none;
		color: var(--ink);
		font-family: var(--mono);
		font-size: var(--t-small);
		letter-spacing: 0.02em;
		padding: var(--s-16) var(--s-24);
	}
	input::placeholder {
		color: var(--grey-dim);
	}
	button {
		font-family: var(--mono);
		font-size: var(--t-eyebrow);
		letter-spacing: var(--ls-eyebrow);
		text-transform: uppercase;
		color: var(--bg);
		background: var(--ink);
		border: 0;
		border-radius: var(--radius);
		padding: 0 var(--s-24);
		cursor: pointer;
		transition: opacity 0.2s ease;
	}
	button:hover {
		opacity: 0.85;
	}
	.note {
		margin-top: var(--s-16);
		font-family: var(--mono);
		font-size: var(--t-eyebrow);
		letter-spacing: 0.04em;
		color: var(--grey-dim);
	}
</style>
