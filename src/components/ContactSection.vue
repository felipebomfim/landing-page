<script setup>
const links = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/felipe-dos-santos-bomfim',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/felipebomfim',
  },
  {
    label: 'FreeCodeCamp',
    url: 'https://www.freecodecamp.org/bomfimfelipe',
  },
]
</script>

<template>
  <section class="section" id="contato" aria-labelledby="contact-title">
    <h2 id="contact-title" class="section-title">Contato</h2>
    <p class="contact-intro">
      Entre em contato pelo LinkedIn ou GitHub. Você também pode me encontrar no FreeCodeCamp.
    </p>
    <div class="contact-links">
      <a
        v-for="(link, i) in links"
        :key="i"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-outline"
      >
        {{ link.label }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.contact-intro {
  color: var(--color-secondary);
  margin: 0 0 1.5rem;
  max-width: 50ch;
}

.contact-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
