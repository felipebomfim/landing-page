/**
 * Lista centralizada de projetos (VPS e GitHub).
 * Para adicionar um novo projeto: inclua um objeto no array e faça rebuild da landing.
 */

export const PROJECT_TYPES = {
	VPS: "vps",
	GITHUB: "github",
};

export const projects = [
	{
		name: "Landing Page",
		url: "https://github.com/felipebomfim/landing-page",
		description: "Repositório desta landing page (portfólio).",
		type: "github",
		tags: ["Vue", "Vite"],
	},
];
