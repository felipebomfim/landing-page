<script setup>
import { projects } from '@/data/projects.js'

const vpsProjects = () => projects.filter((p) => p.type === 'vps')
const githubProjects = () => projects.filter((p) => p.type === 'github')
</script>

<template>
  <section class="section" id="projetos" aria-labelledby="proj-title">
    <h2 id="proj-title" class="section-title">Projetos em Destaque</h2>
    <p class="section-intro">
      Projetos hospedados na VPS e repositórios relevantes no GitHub.
    </p>
    <div class="projects-grid">
      <a
        v-for="(proj, i) in projects"
        :key="i"
        :href="proj.url"
        target="_blank"
        rel="noopener noreferrer"
        class="project-card"
        :class="{ 'project-card--vps': proj.type === 'vps' }"
      >
        <span class="project-type">{{ proj.type === 'vps' ? 'VPS' : 'GitHub' }}</span>
        <h3 class="project-name">{{ proj.name }}</h3>
        <p class="project-desc">{{ proj.description }}</p>
        <div class="project-tags">
          <span
            v-for="(tag, j) in proj.tags"
            :key="j"
            class="project-tag"
          >
            {{ tag }}
          </span>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.section-intro {
  color: var(--color-secondary);
  margin: 0 0 1.5rem;
  max-width: 60ch;
}

.projects-grid {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

.project-card {
  display: block;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  transition: border-color 0.2s, background 0.2s;
  color: inherit;
  text-align: left;
}
.project-card:hover {
  border-color: var(--color-accent);
  background: rgba(59, 130, 246, 0.08);
  text-decoration: none;
  color: var(--color-text);
}

.project-card--vps {
  border-left: 3px solid var(--color-accent);
}

.project-type {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.project-name {
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0.5rem 0 0.5rem;
}

.project-desc {
  font-size: 0.9rem;
  color: var(--color-secondary);
  margin: 0 0 0.75rem;
  line-height: 1.5;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.project-tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  background: rgba(59, 130, 246, 0.2);
  border-radius: 4px;
  color: var(--color-text);
}
</style>
