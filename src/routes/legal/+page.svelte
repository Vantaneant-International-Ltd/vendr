<script>
	import LegalLayout from '$lib/components/LegalLayout.svelte';
	import { brand, contact } from '$lib/brand.js';
</script>

<svelte:head>
	<title>Legal | Vendr</title>
	<meta name="description" content="Vendr legal information." />
</svelte:head>

<LegalLayout eyebrow="Legal" title="Legal">
	<p>
		Vendr is a trading name of {brand.legalEntity}, part of {brand.parent} (Vantanéant
		International). For enquiries, contact <a href={contact.href}>{contact.email}</a>.
	</p>
	<p>
		If/when applicable, company registration details (registered office, CRO/VAT numbers) will be
		listed here.
	</p>
</LegalLayout>
