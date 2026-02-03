<script setup>
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import EducationSection from './components/EducationSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'

const navLinks = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'formacao', label: 'Formação' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' },
]

function scrollTo(id) {
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="app">
    <nav class="nav" aria-label="Navegação principal">
      <div class="nav-inner">
        <button type="button" class="nav-brand" @click="scrollTo('top')">
          Felipe Bomfim
        </button>
        <ul class="nav-links">
          <li v-for="link in navLinks" :key="link.id">
            <button
              type="button"
              class="nav-link"
              @click="scrollTo(link.id)"
            >
              {{ link.label }}
            </button>
          </li>
        </ul>
      </div>
    </nav>
    <main id="app-main">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
      <AppFooter />
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-border);
}

.nav-inner {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.nav-brand {
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 1rem;
  color: var(--color-text);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem 0;
}
.nav-brand:hover {
  color: var(--color-accent);
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
}

.nav-link {
  font-family: var(--font-sans);
  font-size: 0.9rem;
  color: var(--color-secondary);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.35rem 0;
}
.nav-link:hover {
  color: var(--color-accent);
}

#app-main {
  padding-top: 0;
}
</style>
