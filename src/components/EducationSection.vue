<script setup>
const education = [
  {
    name: 'ITA',
    title: 'Bacharelado em Engenharia de Computação',
    period: '2017 — 2021',
  },
  {
    name: 'Centro de Instrução de Guerra Eletrônica',
    title: 'Pós-graduação em Guerra Cibernética',
    period: '2022',
  },
]

const certifications = [
  'CompTIA PenTest+',
  'Junior Penetration Tester (INE)',
  'Java Programming (Udemy)',
]

const honors = [
  'Menção Honrosa — Física',
  'Menção Honrosa — Metodologias de Computação',
  'Menção Honrosa — Software e Sistemas de Informação',
]
</script>

<template>
  <section class="section" id="formacao" aria-labelledby="edu-title">
    <h2 id="edu-title" class="section-title">Formação e Certificações</h2>
    <div class="edu-block">
      <h3 class="edu-subtitle">Formação</h3>
      <ul class="edu-list">
        <li v-for="(item, i) in education" :key="i" class="edu-item">
          <strong>{{ item.name }}</strong> — {{ item.title }}
          <span class="edu-period">{{ item.period }}</span>
        </li>
      </ul>
    </div>
    <div class="edu-block">
      <h3 class="edu-subtitle">Certificações</h3>
      <ul class="edu-list tags">
        <li v-for="(cert, i) in certifications" :key="i" class="edu-tag">
          {{ cert }}
        </li>
      </ul>
    </div>
    <div class="edu-block">
      <h3 class="edu-subtitle">Menções Honrosas (ITA)</h3>
      <ul class="edu-list">
        <li v-for="(h, i) in honors" :key="i" class="edu-item">{{ h }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.edu-block {
  margin-bottom: 2rem;
}

.edu-block:last-child {
  margin-bottom: 0;
}

.edu-subtitle {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-accent);
  margin: 0 0 0.75rem;
}

.edu-list {
  margin: 0;
  padding-left: 1.25rem;
}

.edu-list.tags {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.edu-item {
  margin-bottom: 0.5rem;
  color: var(--color-secondary);
}

.edu-item .edu-period {
  display: block;
  font-size: 0.9rem;
  margin-top: 0.2rem;
}

.edu-tag {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  padding: 0.35rem 0.65rem;
  background: rgba(59, 130, 246, 0.15);
  border-radius: 6px;
  border: 1px solid var(--color-border);
}
</style>
