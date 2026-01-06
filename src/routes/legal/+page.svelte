<svelte:head>
	<title>Legal — Vendr</title>
	<meta name="description" content="Vendr legal information." />
</svelte:head>

<main class="wrap">
	<h1>Legal</h1>
	<p>
		Vendr is a subsidiary of VNTA (Vantanéant International). For enquiries, contact
		<a href="mailto:hello@vendr.ie">hello@vendr.ie</a>.
	</p>
	<p>
		If/when applicable, company registration details (registered office, CRO/VAT numbers) will be
		listed here.
	</p>
	<p class="fine">Last updated: {new Date().toISOString().slice(0, 10)}</p>
</main>

<style>
	.wrap {
		max-width: 800px;
		margin: 0 auto;
		padding: 3.5rem 1.5rem;
		color: #fff;
	}
	a {
		color: rgba(255, 255, 255, 0.85);
	}
	.fine {
		opacity: 0.7;
		font-size: 0.95rem;
	}
</style>
