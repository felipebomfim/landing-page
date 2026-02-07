# Landing Page — Felipe Bomfim

Landing page pessoal e portfólio de **Felipe Bomfim** — Engenheiro de Computação (ITA), Desenvolvedor e Cyber Security. Funciona como hub central de [felipedev.com.br](https://felipedev.com.br), com navegação por seções e links para projetos e redes.

## Tecnologias

-   **Vue 3** (Composition API, `<script setup>`)
-   **Vite 7**
-   HTML/CSS (tema visual inspirado em terminal)

## Estrutura do projeto

```
src/
├── App.vue              # Layout principal e navegação
├── main.js
├── style.css            # Estilos globais e variáveis
├── components/          # Seções da página
│   ├── HeroSection.vue
│   ├── AboutSection.vue
│   ├── ExperienceSection.vue
│   ├── SkillsSection.vue
│   ├── EducationSection.vue
│   ├── ProjectsSection.vue
│   ├── ContactSection.vue
│   └── AppFooter.vue
├── data/
│   └── projects.js      # Dados dos projetos em destaque
└── styles/
    └── terminal.css     # Estilos do tema terminal
```

## Como rodar

### Pré-requisitos

-   Node.js 18+ e npm

### Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173).

### Build para produção

```bash
npm run build
```

Artefatos em `dist/`.

### Preview do build

```bash
npm run preview
```

## Seções da página

| Seção       | Conteúdo                                                  |
| ----------- | --------------------------------------------------------- |
| Hero        | Headline, subtítulo, CTA e links (GitHub, LinkedIn)       |
| Sobre       | Visão e propósito profissional                            |
| Experiência | Timeline de cargos (Câmara, FAB, ITA, etc.)               |
| Habilidades | Tecnologias e idiomas                                     |
| Formação    | ITA, pós-graduação, certificações e menções               |
| Projetos    | Projetos em destaque (editável em `src/data/projects.js`) |
| Contato     | Forma de contato e redes                                  |

## Personalização

-   **Projetos:** edite `src/data/projects.js` para incluir ou alterar os projetos exibidos.
-   **Conteúdo:** textos e links estão nos componentes em `src/components/`.
-   **Tema:** variáveis e estilos em `src/style.css` e `src/styles/terminal.css`.

## Licença

Projeto privado. Uso conforme definido pelo autor.
