<script setup>
import { projects } from '../data/projects.js'
</script>

<template>
  <section class="section" id="projetos" aria-labelledby="proj-title">
    <h2 id="proj-title" class="section-title">Projetos em Destaque</h2>
    <ul class="projects-list">
      <li v-for="p in projects" :key="p.url" class="project-card">
        <a :href="p.url" target="_blank" rel="noopener noreferrer" class="project-link">
          <span class="project-name">{{ p.name }}</span>
          <span v-if="p.type === 'github'" class="project-badge" aria-label="GitHub">GitHub</span>
          <span v-else class="project-badge project-badge--vps" aria-label="VPS">VPS</span>
        </a>
        <p class="project-desc">{{ p.description }}</p>
        <div v-if="p.tags?.length" class="project-tags">
          <span v-for="tag in p.tags" :key="tag" class="project-tag">{{ tag }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.projects-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.project-card {
  padding: 1.25rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: rgba(248, 250, 252, 0.03);
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: var(--color-accent);
}

.project-link:hover {
  text-decoration: underline;
}

.project-name {
  font-weight: 600;
  font-size: 1.1rem;
}

.project-badge {
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.2);
  color: var(--color-accent);
}

.project-badge--vps {
  background: rgba(100, 116, 139, 0.3);
  color: var(--color-secondary);
}

.project-desc {
  color: var(--color-secondary);
  margin: 0 0 0.75rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.project-tag {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-secondary);
  background: rgba(248, 250, 252, 0.06);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}
</style>
