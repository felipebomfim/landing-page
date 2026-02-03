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

1. [x] Projeto Vue 3 + Vite
2. [x] Arquivo `src/data/projects.js` com estrutura extensível
3. [x] Componentes e seções: Hero, Sobre, Experiência, Habilidades, Formação, Projetos, Contato
4. [x] Seção Projetos consumindo dados de `projects.js` (fácil adicionar novos)
5. [x] Links para GitHub e LinkedIn
6. [ ] Build estático → deploy na VPS em `./landing`
7. [ ] Design responsivo e testes em diferentes dispositivos

---

## Referências

-   [LinkedIn - Felipe Bomfim](https://www.linkedin.com/in/felipe-dos-santos-bomfim-33695914a/)
-   [GitHub - felipebomfim](https://github.com/felipebomfim)
-   [FreeCodeCamp - bomfimfelipe](https://www.freecodecamp.org/bomfimfelipe)
-   `dep4E64-F607loy-info/vps/docker-compose.yml` — infraestrutura da VPS
-   `deploy-info/vps/deploy-step-by-step-felipedev-vps.md` — passo a passo de deploy
-   `deploy-info/vps/infra-final-felipedev-vps.md` — visão geral da infra

---

## Passo 1 — Opções: Paleta de Cores e Tipografia

Escolha **uma opção de paleta** e **uma opção de tipografia** (ou combine à vontade). Depois marque o passo 1 como concluído e siga para o passo 2.

### Paletas de cores (sugestões)

| Opção | Nome                   | Cores                                                                                                             | Uso sugerido                         |
| ----- | ---------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| **A** | Profissional azul      | Fundo: `#0f172a` (slate-900), texto: `#f8fafc`, acento: `#3b82f6` (blue-500), secundário: `#64748b`               | Tech/confiança, escuro moderno       |
| **B** | Tech verde/ciano       | Fundo: `#0c1222`, texto: `#e2e8f0`, acento: `#22d3ee` (cyan-400), secundário: `#2dd4bf` (teal-400)                | Segurança/cyber, sensação “terminal” |
| **C** | Neutro com acento      | Fundo: `#fafafa`, texto: `#1e293b`, acento: `#0ea5e9` (sky-500), bordas: `#e2e8f0`                                | Claro, minimalista, acessível        |
| **D** | Azul + verde (híbrido) | Fundo: `#0f1419`, texto: `#f0f6fc`, acento primário: `#58a6ff`, acento secundário: `#3fb950` (verde GitHub-style) | Dev/segurança, referência GitHub     |

### Tipografia (sugestões)

| Opção | Fonte                                              | Característica                        | Link (Google Fonts)                                                |
| ----- | -------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------ |
| **1** | **Inter**                                          | Neutra, ótima para UI e leitura longa | [Inter](https://fonts.google.com/specimen/Inter)                   |
| **2** | **Poppins**                                        | Geométrica, leve, boa para títulos    | [Poppins](https://fonts.google.com/specimen/Poppins)               |
| **3** | **DM Sans**                                        | Limpa, moderna, boa hierarquia        | [DM Sans](https://fonts.google.com/specimen/DM+Sans)               |
| **4** | **JetBrains Mono** (só código) + **Inter** (texto) | Destaque para trechos de código/tech  | [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) |

**Recomendações rápidas:**

-   Se preferir **claro e minimalista:** Paleta **C** + Tipografia **1** (Inter).
-   Se preferir **escuro tech/cyber:** Paleta **B** ou **D** + Tipografia **2** (Poppins) ou **3** (DM Sans).
-   Para **consistência com GitHub/dev:** Paleta **D** + **Inter** para texto e **JetBrains Mono** só em trechos de código.

**Ver exemplos visuais:** abra no navegador o arquivo `exemplos-paleta-tipografia.html` (na raiz do projeto) para ver as quatro paletas e as fontes aplicadas em um mini hero.

### Escolha definida: **A + 4**

-   **Paleta A — Profissional azul:** fundo `#0f172a`, texto `#f8fafc`, acento `#3b82f6`, secundário `#64748b`.
-   **Tipografia 4:** **Inter** para texto e títulos; **JetBrains Mono** apenas para trechos de código/tech.

Usar essas variáveis/valores ao implementar a landing (CSS/design tokens).

---

## Detalhamento dos Passos 2, 3 e 4

### Passo 2 — Inicializar projeto Vue 3 + Vite

**Objetivo:** Criar a base do projeto com Vue 3 (Composition API) e Vite.

**Ações:**

-   Rodar `npm create vite@latest . -- --template vue` (ou equivalente) na raiz do repositório.
-   Garantir que o template seja **Vue** (não Vue+TS se preferir JS puro; pode ser Vue+JS).
-   Instalar dependências com `npm install`.
-   Configurar **design tokens** no CSS (variáveis para paleta A e fontes):
    -   `--color-bg`, `--color-text`, `--color-accent`, `--color-secondary`
    -   `--font-sans` (Inter), `--font-mono` (JetBrains Mono)
-   Incluir Google Fonts: Inter e JetBrains Mono no `index.html` ou via CSS.
-   Estrutura de pastas sugerida: `src/`, `src/components/`, `src/data/`, `src/assets/`, `public/`.

**Resultado:** Projeto que sobe com `npm run dev`, página em branco pronta para os componentes.

---

### Passo 3 — Criar `src/data/projects.js` com estrutura base

**Objetivo:** Centralizar a lista de projetos (VPS e GitHub) em um único arquivo para extensibilidade.

**Estrutura de cada item:**

-   `name` (string): Nome do projeto.
-   `url` (string): Link (subdomínio ou GitHub).
-   `description` (string): Breve descrição.
-   `type` (string): `'vps'` ou `'github'`.
-   `tags` (array de strings): Tecnologias/destaques (ex.: `["Vue", "SSO"]`).

**Dados iniciais:**

-   **VPS:** Roadmap — `https://roadmap.felipedev.com.br`, type `vps`, tags como Vue, SSO.
-   **GitHub:** Pelo menos 3–5 repositórios (OSCP-Notes, SpringBoot3Course, MERN-restaurant-review, myTabNews, freeCodeCamp ou outros do perfil). Type `github`, URL para o repositório ou página do projeto.

**Resultado:** Arquivo exportando `projects` (array) e, se desejado, constantes auxiliares (ex.: `PROJECT_TYPES`). Seção Projetos consumirá esse array.

---

### Passo 4 — Implementar seções e componentes

**Objetivo:** Montar a landing page com todas as seções definidas no plano, usando a paleta A e tipografia 4.

**Componentes por seção:**

| Seção       | Componente (sugestão)   | Conteúdo principal                                                                              |
| ----------- | ----------------------- | ----------------------------------------------------------------------------------------------- |
| Hero        | `HeroSection.vue`       | Headline, subheadline, CTA "Vamos conversar?", avatar, links GitHub/LinkedIn                    |
| Sobre Mim   | `AboutSection.vue`      | Texto resumido (visão, web dev, ethical hacking, curiosidade)                                   |
| Experiência | `ExperienceSection.vue` | Timeline ou cards: Câmara, FAB, ITA Space Center, CCA-SJ (cargo + breve descrição)              |
| Habilidades | `SkillsSection.vue`     | Dev (Java, Spring, JS, Web), Segurança (Pentest, Cyber), Outros (Git, Shell, BD…)               |
| Formação    | `EducationSection.vue`  | ITA, Pós CIGE, certificações (CompTIA, INE, Udemy, DIO), menções honrosas                       |
| Projetos    | `ProjectsSection.vue`   | Lista vinda de `projects.js`; cards com nome, descrição, tags, link; filtro VPS/GitHub opcional |
| Contato     | `ContactSection.vue`    | LinkedIn, GitHub, e-mail, FreeCodeCamp                                                          |
| Footer      | `AppFooter.vue`         | Copyright, ano, links rápidos                                                                   |

**Comportamento:**

-   `App.vue`: estrutura de página única com scroll; importar e ordenar os componentes; aplicar variáveis CSS globais.
-   Navegação: âncoras suaves para cada seção (opcional: barra fixa com links).
-   Projetos: consumir `import { projects } from '@/data/projects'` (ou path relativo); exibir em grid/list; diferenciar visualmente `type === 'vps'` e `type === 'github'` se desejado.
-   Responsivo: mobile-first; seções empilhadas; botões e textos legíveis em telas pequenas.
-   Acessibilidade: títulos hierárquicos (h1 no Hero, h2 por seção), contraste conforme paleta A.

**Resultado:** Landing completa em uma única página, com todas as seções preenchidas e Projetos dinâmicos a partir de `projects.js`.

---

## Próximos Passos

1. [x] Escolher paleta de cores e tipografia (ver opções acima) — **A + 4**
2. [x] Inicializar projeto Vue 3 + Vite (detalhes acima)
3. [x] Criar `src/data/projects.js` com estrutura base (detalhes acima)
4. [x] Implementar seções e componentes (detalhes acima)
5. [ ] Fazer build e deploy na VPS (`./landing`)
