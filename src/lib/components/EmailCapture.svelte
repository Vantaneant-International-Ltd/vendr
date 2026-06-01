<script>
	// Square email capture. Writes to the Supabase `subscribers` table (anon
	// insert is allowed by RLS; only admins can read). Falls back to mailto if
	// the network call fails, so a sign-up is never lost.
	import { contact } from '$lib/brand.js';
	import { supabase } from '$lib/supabase.js';

	let {
		placeholder = 'Your email — be first to know',
		cta = 'Notify me',
		note = 'No noise. One message when we open.',
		source = 'coming_soon'
	} = $props();

	let email = $state('');
	let done = $state(false);
	let busy = $state(false);

	async function submit(e) {
		e.preventDefault();
		if (!email || busy) return;
		busy = true;
		const { error } = await supabase.from('subscribers').insert({ email: email.trim(), source });
		busy = false;
		// Unique-violation (already subscribed) is a success from the user's view.
		if (error && error.code !== '23505') {
			// Network/RLS failure → don't lose the lead: hand off to mail.
			window.location.href = `${contact.href}?subject=${encodeURIComponent(
				'Notify me — Vendr'
			)}&body=${encodeURIComponent(email)}`;
			return;
		}
		done = true;
	}
</script>

{#if done}
	<p class="thanks">You're on the list. One message when we open.</p>
{:else}
	<form class="capture" onsubmit={submit}>
		<input
			type="email"
			bind:value={email}
			{placeholder}
			aria-label="Email"
			autocomplete="email"
			required
		/>
		<button type="submit" disabled={busy}>{busy ? '…' : cta}</button>
	</form>
	{#if note}<p class="note">{note}</p>{/if}
{/if}

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
	.thanks {
		font-family: var(--mono);
		font-size: var(--t-small);
		color: var(--ink);
		border-left: 1px solid var(--line-strong);
		padding-left: var(--s-16);
	}
</style>
