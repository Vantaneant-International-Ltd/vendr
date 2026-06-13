// ============================================================================
// VENDR — brand strings & architecture
// Vendr is a SYSTEM of three wordmarks in one type family:
//   Vendr (primary) · Vendr Select · Vendr Pass
// Never hardcode "Vendr" as the only brand string elsewhere — import from here.
// Select & Pass are teaser-stage: copy may reference them; there are NO
// /select or /pass routes. Adding one later is a new folder, zero refactor.
// ============================================================================

export const brand = {
	name: 'Vendr',
	mark: 'vendr.', // official logotype (bold sans), per brand book pp.9–13
	tagline: 'A quieter form of retail',
	launchLine: 'Launching Spring 2026',
	launchLabel: 'Spring 2026',
	legalEntity: 'Atlas Refreshments Limited',
	established: '2026',
	// Corporate family
	parent: 'VNTA',
	parentUrl: 'https://www.vnta.xyz',
	affiliate: { name: 'Éirvox', url: 'https://eirvox.ie' } // sister company
};

// First-class sub-brands. Reference by key; never inline the strings.
export const subBrands = {
	select: { name: 'Vendr Select', status: 'For formal & corporate placements' },
	pass: { name: 'Vendr Pass', status: 'In development' }
};

export const contact = {
	email: 'hello@vendr.ie',
	get href() {
		return `mailto:${this.email}`;
	},
	enquiryHref: 'mailto:hello@vendr.ie?subject=Vendr%20placement%20enquiry',
	linkedin: 'https://www.linkedin.com/company/110655743/'
};
