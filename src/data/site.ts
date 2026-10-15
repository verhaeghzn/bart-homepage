export const site = {
	name: 'Bart Verhaegh',
	title: 'Bart’s Experiments',
	url: 'https://bart.verhaeghzn.nl',
	description:
		'Bart’s Experiments. Founder of Closure and PhD researcher at TU/e, writing on language models, code, and publications.',
	email: 'b.j.verhaegh@tue.nl',
	place: 'Eindhoven',
};

export const profiles = [
	{
		name: 'Closure',
		href: 'https://closure.nl/',
		domain: 'closure.nl',
		note: 'Report a death once, and settle it with more than 1,600 organisations.',
	},
	{
		name: 'Verhaegh & Zn.',
		href: 'https://verhaeghzn.nl/',
		domain: 'verhaeghzn.nl',
		note: 'Father-and-son software practice, with Michel.',
	},
	{
		name: 'TU/e PURE',
		href: 'https://research.tue.nl/en/persons/bart-j-verhaegh/',
		domain: 'research.tue.nl',
		note: 'Doctoral research in Mechanics of Materials.',
	},
] as const;

export const orcid = 'https://orcid.org/0009-0001-4872-7247';

export const linkedin = 'https://www.linkedin.com/in/bartverhaegh';

export const sameAs = [...profiles.map((profile) => profile.href), orcid, linkedin];
