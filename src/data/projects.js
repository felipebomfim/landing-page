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
		name: "Roadmap",
		url: "https://roadmap.felipedev.com.br",
		description: "App de roadmap privado com SSO.",
		type: "vps",
		tags: ["Vue", "SSO"],
	},
	{
		name: "OSCP-Notes",
		url: "https://github.com/felipebomfim/OSCP-Notes",
		description: "Notas e materiais de estudo para certificação OSCP.",
		type: "github",
		tags: ["Segurança", "Pentest"],
	},
	{
		name: "SpringBoot3Course",
		url: "https://github.com/felipebomfim/SpringBoot3Course",
		description: "Projetos do curso de Spring Boot 3.",
		type: "github",
		tags: ["Java", "Spring Boot"],
	},
	{
		name: "MERN-restaurant-review",
		url: "https://github.com/felipebomfim/MERN-restaurant-review",
		description: "App de avaliação de restaurantes com stack MERN.",
		type: "github",
		tags: ["MongoDB", "Express", "React", "Node"],
	},
	{
		name: "myTabNews",
		url: "https://github.com/felipebomfim/myTabNews",
		description: "Clone/adaptação do TabNews para estudo.",
		type: "github",
		tags: ["Node", "Web"],
	},
	{
		name: "freeCodeCamp",
		url: "https://github.com/felipebomfim/freeCodeCamp",
		description: "Contribuições e fork do freeCodeCamp.",
		type: "github",
		tags: ["Open Source", "JavaScript"],
	},
];
