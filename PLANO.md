# Plano: Landing Page - Felipe Bomfim

## Objetivo

Criar uma landing page profissional que apresente Felipe Bomfim como desenvolvedor, destacando sua trajetória, habilidades técnicas, experiência e projetos. A página deve funcionar como um portfólio digital e ponto de contato.

A landing será o **hub central** de `felipedev.com.br`, com links para projetos futuros hospedados em subdomínios da VPS (ex.: `roadmap.felipedev.com.br`, `meuapp.felipedev.com.br`). A estrutura deve permitir adicionar novos projetos de forma simples, apenas editando dados/config.

---

## Sobre o Perfil (baseado em LinkedIn e GitHub)

### Resumo Profissional

-   **Nome:** Felipe dos Santos Bomfim
-   **Título:** Software Engineer | Engenheiro de Computação pelo ITA
-   **Cargo atual:** Analista Legislativo na Câmara dos Deputados (desde ago/2024)
-   **Experiência total:** 5+ anos
-   **Localização:** Brasília, DF

### Trajetória de Carreira

1. **Câmara dos Deputados** — Analista Legislativo (ago/2024 - presente)
2. **Força Aérea Brasileira (FAB)** — Cyber Security Analyst (jan/2022 - ago/2024)
3. **ITA Space Center** — Cyber Security Analyst (jul/2020 - dez/2021)
4. **CCA-SJ** — Software Engineer (jan/2020 - fev/2020)

### Formação

-   **ITA** — Bacharelado em Engenharia de Computação (2017-2021)
-   **Centro de Instrução de Guerra Eletrônica** — Pós-graduação em Operações Cibernéticas e Guerra Eletrônica (2022)

### Diferenciais

-   3 Menções Honrosas no ITA (Física, Metodologias de Computação, Software e Sistemas de Informação)
-   Certificações: CompTIA PenTest+, Junior Penetration Tester (INE), Java Programming
-   Participação em CTF (ex.: Ho-Ho-Hacking da Febraban)
-   **GitHub:** [github.com/felipebomfim](https://github.com/felipebomfim) — 105+ repositórios
-   **LinkedIn:** [linkedin.com/in/felipe-dos-santos-bomfim](https://www.linkedin.com/in/felipe-dos-santos-bomfim)

---

## Estrutura da Landing Page

### 1. Hero Section

-   **Headline:** Frase de impacto (ex.: "Programar é o meu esporte!" — adaptada da bio do GitHub)
-   **Subheadline:** Engenheiro de Computação (ITA) | Desenvolvedor | Cyber Security
-   **CTA principal:** Botão para contato (ex.: "Vamos conversar?", "Entre em contato")
-   **Foto/avatar** e links para GitHub e LinkedIn

### 2. Sobre Mim

-   Texto resumido da visão e propósito profissional
-   Destaque para: resolução de problemas, foco em web development (Java/Spring Boot), Ethical Hacking
-   Curiosidade, persistência e pensamento "fora da caixa"

### 3. Experiência

-   Timeline ou cards com os cargos principais
-   Foco em: Câmara dos Deputados, FAB, ITA Space Center
-   Breve descrição do papel em cada posição

### 4. Habilidades e Tecnologias

-   **Desenvolvimento:** Java, Spring Boot, JavaScript, Web Development
-   **Segurança:** Ethical Hacking, Pentesting, Cyber Security
-   **Outros:** Git, Shell Script, Bancos de Dados NoSQL, Sistemas Operacionais, Redes
-   **Idiomas:** Português (nativo), Inglês (profissional), Espanhol (intermediário)

### 5. Formação e Certificações

-   ITA — Engenharia de Computação
-   Pós-graduação em Operações Cibernéticas
-   Badges/certificações: CompTIA PenTest+, Junior Penetration Tester, Java (Udemy), Git/GitHub (DIO), Web Components (DIO)
-   Menções Honrosas do ITA

### 6. Projetos em Destaque

Seção extensível que lista projetos hospedados na VPS e repositórios relevantes do GitHub:

-   **Projetos na VPS** (links para subdomínios `*.felipedev.com.br`):
    -   **Roadmap** — `roadmap.felipedev.com.br` (app privado com SSO)
    -   Novos projetos conforme forem criados
-   **Repositórios GitHub** (links externos):
    -   OSCP-Notes, SpringBoot3Course, MERN-restaurant-review, myTabNews, freeCodeCamp, etc.

A lista de projetos deve vir de um **arquivo de dados** (ex.: `src/data/projects.js`) para facilitar inclusão de novos itens sem alterar componentes.

### 7. Contato

-   Botões/links: LinkedIn, GitHub, e-mail (se disponível)
-   Opção de formulário simples ou link para e-mail
-   Link para FreeCodeCamp: [freecodecamp.org/bomfimfelipe](https://www.freecodecamp.org/bomfimfelipe)

### 8. Footer

-   Copyright e ano
-   Links rápidos (GitHub, LinkedIn)
-   Tecnologias usadas na página (opcional)

---

## Stack Técnica

**Escolha: Vue 3 + Vite**

-   Familiaridade com Vue (preferência sobre React)
-   Build gera HTML/CSS/JS estático → encaixa perfeitamente no Nginx da VPS (`./landing` → `/usr/share/nginx/html`)
-   Componentes e dados separados → fácil adicionar projetos editando apenas um arquivo de configuração
-   SPA leve, boa performance e manutenção simples

---

## Extensibilidade e Integração com a VPS

### Estrutura de dados para projetos

Os projetos serão definidos em um arquivo central (ex.: `src/data/projects.js`):

```js
// Exemplo de estrutura
export const projects = [
	{
		name: "Roadmap",
		url: "https://roadmap.felipedev.com.br",
		description: "...",
		type: "vps", // ou 'github'
		tags: ["Vue", "SSO"],
	},
	{
		name: "Meu Novo App",
		url: "https://meuapp.felipedev.com.br",
		description: "...",
		type: "vps",
		tags: ["..."],
	},
	// ...
];
```

**Para adicionar um novo projeto:**

1. Deploy do app na VPS (ver `deploy-info/vps/`)
2. Adicionar entrada no array `projects`
3. Rebuild da landing e deploy em `./landing`

### Deploy na VPS

-   **Saída do build:** `dist/` (Vite)
-   **Destino na VPS:** pasta `./landing` montada no container Nginx
-   **Domínio:** `felipedev.com.br` (já configurado no `docker-compose.yml`)
-   **Documentação:** `deploy-info/vps/deploy-step-by-step-felipedev-vps.md` e `infra-final-felipedev-vps.md`

Padrão de subdomínios para projetos futuros: `[nome].felipedev.com.br` (ex.: `roadmap`, `blog`, `api`).

-   **Paleta:** Tons profissionais, com possível acento em azul/verde (tech/segurança)
-   **Tipografia:** Fonte limpa e legível (ex.: Inter, Poppins, ou similar)
-   **Layout:** Single page com scroll suave, seções bem definidas
-   **Responsivo:** Mobile-first para funcionar bem em celular e desktop
-   **Performance:** Imagens otimizadas, CSS/JS enxutos

---

## Entregas

1. [ ] Projeto Vue 3 + Vite
2. [ ] Arquivo `src/data/projects.js` com estrutura extensível
3. [ ] Componentes e seções: Hero, Sobre, Experiência, Habilidades, Formação, Projetos, Contato
4. [ ] Seção Projetos consumindo dados de `projects.js` (fácil adicionar novos)
5. [ ] Links para GitHub e LinkedIn
6. [ ] Build estático → deploy na VPS em `./landing`
7. [ ] Design responsivo e testes em diferentes dispositivos

---

## Referências

-   [LinkedIn - Felipe Bomfim](https://www.linkedin.com/in/felipe-dos-santos-bomfim-33695914a/)
-   [GitHub - felipebomfim](https://github.com/felipebomfim)
-   [FreeCodeCamp - bomfimfelipe](https://www.freecodecamp.org/bomfimfelipe)
-   `deploy-info/vps/docker-compose.yml` — infraestrutura da VPS
-   `deploy-info/vps/deploy-step-by-step-felipedev-vps.md` — passo a passo de deploy
-   `deploy-info/vps/infra-final-felipedev-vps.md` — visão geral da infra

---

## Próximos Passos

1. Escolher paleta de cores e tipografia
2. Inicializar projeto Vue 3 + Vite
3. Criar `src/data/projects.js` com estrutura base
4. Implementar seções e componentes
5. Fazer build e deploy na VPS (`./landing`)
