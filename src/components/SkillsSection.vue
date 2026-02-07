<script setup>
const groups = [
  {
    title: 'Desenvolvimento',
    items: [
      'Java',
      'Spring Boot',
      'JavaScript',
      'Web Development',
      'Git',
      'Shell Script',
      'Docker',
      'Python',
      'Vue',
      'HTML',
      'CSS',
      'Bancos de dados SQL',
    ],
  },
  {
    title: 'Segurança',
    items: ['Ethical Hacking', 'Pentesting', 'Cyber Security'],
  },
  {
    title: 'Outros',
    items: ['Sistemas Operacionais', 'Redes'],
  },
  {
    title: 'Idiomas',
    items: [
      'Português (nativo)',
      'Inglês (profissional)',
      'Espanhol (básico)',
    ],
  },
]
</script>

<template>
  <section class="section" id="habilidades" aria-labelledby="skills-title">
    <h2 id="skills-title" class="section-title">Habilidades e Tecnologias</h2>
    <div class="skills-grid">
      <div v-for="(group, i) in groups" :key="i" class="skill-group">
        <h3 class="skill-group-title">{{ group.title }}</h3>
        <ul class="skill-list">
          <li v-for="(item, j) in group.items" :key="j" class="skill-tag">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.skill-group-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-accent);
  margin: 0 0 0.75rem;
}

.skill-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  padding: 0.35rem 0.65rem;
  background: rgba(59, 130, 246, 0.15);
  color: var(--color-text);
  border-radius: 6px;
  border: 1px solid var(--color-border);
}
</style>
