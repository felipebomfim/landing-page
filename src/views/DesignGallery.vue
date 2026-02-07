<script setup>
import { RouterLink } from 'vue-router'
import { designs } from '@/designs-list.js'
import { site } from '@/data/content.js'
</script>

<template>
  <div class="gallery">
    <header class="gallery-header">
      <h1 class="gallery-title">Galeria de Designs</h1>
      <p class="gallery-subtitle">
        {{ site.name }} — {{ designs.length }} variações da mesma landing page.
        Clique em um card para ver o design.
      </p>
      <RouterLink to="/original" class="gallery-original">Ver versão original (sem tema) →</RouterLink>
    </header>
    <div class="gallery-grid">
      <RouterLink
        v-for="d in designs"
        :key="d.id"
        :to="d.path"
        class="card"
      >
        <span class="card-number">{{ String(d.id).padStart(2, '0') }}</span>
        <h2 class="card-title">{{ d.name }}</h2>
        <p class="card-desc">{{ d.description }}</p>
        <span class="card-cta">Ver design →</span>
      </RouterLink>
    </div>
    <footer class="gallery-footer">
      <p>Use os links acima para navegar entre as variações.</p>
    </footer>
  </div>
</template>

<style scoped>
.gallery {
  min-height: 100vh;
  padding: clamp(2rem, 5vw, 4rem) 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-header {
  text-align: center;
  margin-bottom: 3rem;
}

.gallery-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: var(--color-text);
}

.gallery-subtitle {
  color: var(--color-secondary);
  margin: 0 0 1rem;
  max-width: 50ch;
  margin-left: auto;
  margin-right: auto;
}

.gallery-original {
  display: inline-block;
  font-size: 0.95rem;
  font-weight: 500;
  margin-top: 0.5rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

.card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  color: inherit;
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s, transform 0.15s;
}

.card:hover {
  border-color: var(--color-accent);
  background: rgba(59, 130, 246, 0.08);
  transform: translateY(-2px);
}

.card-number {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: var(--color-text);
}

.card-desc {
  font-size: 0.9rem;
  color: var(--color-secondary);
  margin: 0 0 1rem;
  flex-grow: 1;
  line-height: 1.5;
}

.card-cta {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-accent);
}

.gallery-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
  text-align: center;
  font-size: 0.9rem;
  color: var(--color-secondary);
}
</style>
