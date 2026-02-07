<script setup>
const jobs = [
  {
    company: 'Servidor público',
    role: 'Software Engineer',
    period: 'ago/2024 — presente',
    description: 'Desenvolvimento de software em Java, Vue, HTML, CSS e JavaScript. Docker, Kubernetes, Jenkins, Git e outras ferramentas.',
  },
  {
    company: 'Força Aérea Brasileira (FAB)',
    role: 'Cyber Security Analyst',
    period: 'jan/2022 — ago/2024',
    description: 'Análise de segurança cibernética e operações correlatas.',
  },
  {
    company: 'ITA Space Center',
    role: 'Cyber Security Analyst',
    period: 'jul/2020 — dez/2021',
    description: 'Segurança e análise em ambiente aeroespacial.',
  },
]
</script>

<template>
  <section class="section" id="experiencia" aria-labelledby="exp-title">
    <h2 id="exp-title" class="section-title">Experiência</h2>
    <div class="timeline">
      <article v-for="(job, i) in jobs" :key="i" class="timeline-item">
        <div class="timeline-marker" aria-hidden="true" />
        <div class="timeline-content">
          <h3 class="timeline-role">{{ job.role }}</h3>
          <p class="timeline-company">{{ job.company }}</p>
          <p class="timeline-period">{{ job.period }}</p>
          <p class="timeline-desc">{{ job.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  padding-left: 1.5rem;
  border-left: 2px solid var(--color-border);
}

.timeline-item {
  position: relative;
  padding-bottom: 2rem;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -1.5rem;
  top: 0.35rem;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-accent);
}

.timeline-content {
  margin-left: 0.5rem;
}

.timeline-role {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.25rem;
}

.timeline-company {
  font-weight: 500;
  color: var(--color-accent);
  margin: 0 0 0.25rem;
}

.timeline-period {
  font-size: 0.9rem;
  color: var(--color-secondary);
  margin: 0 0 0.5rem;
}

.timeline-desc {
  font-size: 0.95rem;
  color: var(--color-secondary);
  margin: 0;
}
</style>
