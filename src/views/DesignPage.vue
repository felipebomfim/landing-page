<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import AppFooter from '@/components/AppFooter.vue'
import { navLinks } from '@/data/content.js'
import { designs } from '@/designs-list.js'

// Importar todos os temas para aplicar variáveis por design
import '@/styles/designs/01.css'
import '@/styles/designs/02.css'
import '@/styles/designs/03.css'
import '@/styles/designs/04.css'
import '@/styles/designs/05.css'
import '@/styles/designs/06.css'
import '@/styles/designs/07.css'
import '@/styles/designs/08.css'
import '@/styles/designs/09.css'
import '@/styles/designs/10.css'
import '@/styles/designs/11.css'
import '@/styles/designs/12.css'
import '@/styles/designs/13.css'
import '@/styles/designs/14.css'
import '@/styles/designs/15.css'
import '@/styles/designs/16.css'
import '@/styles/designs/17.css'
import '@/styles/designs/18.css'
import '@/styles/designs/19.css'
import '@/styles/designs/20.css'

const route = useRoute()
const router = useRouter()

const designId = computed(() => {
  const id = parseInt(route.params.id, 10)
  return id >= 1 && id <= 20 ? id : 1
})

const designClass = computed(() => `design-${String(designId.value).padStart(2, '0')}`)

const currentDesign = computed(() => designs.find((d) => d.id === designId.value))

function scrollTo(id) {
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function goToGallery() {
  router.push('/')
}
</script>

<template>
  <div :class="['design-wrapper', designClass]">
    <nav class="nav" aria-label="Navegação principal">
      <div class="nav-inner">
        <button type="button" class="nav-brand" @click="scrollTo('top')">
          Felipe Bomfim
        </button>
        <div class="nav-right">
          <ul class="nav-links">
            <li v-for="link in navLinks" :key="link.id">
              <button type="button" class="nav-link" @click="scrollTo(link.id)">
                {{ link.label }}
              </button>
            </li>
          </ul>
          <button type="button" class="nav-gallery" @click="goToGallery">
            ← Galeria
          </button>
        </div>
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
.design-wrapper {
  min-height: 100vh;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 100;
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

.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
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

.nav-gallery {
  font-family: var(--font-sans);
  font-size: 0.85rem;
  color: var(--color-secondary);
  background: none;
  border: 1px solid var(--color-border);
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
}

.nav-gallery:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
}

#app-main {
  padding-top: 0;
}
</style>
