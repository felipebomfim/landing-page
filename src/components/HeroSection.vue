<script setup>
const scrollToContact = () => {
  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="hero">
    <div class="hero-inner">
      <div class="avatar" aria-hidden="true">FB</div>
      <h1 class="hero-title">Programar é o meu esporte!</h1>
      <p class="hero-subtitle">
        Engenheiro de Computação (ITA) · Desenvolvedor · Cyber Security
      </p>
      <div class="hero-cta">
        <button type="button" class="btn" @click="scrollToContact">
          Vamos conversar?
        </button>
      </div>
      <nav class="hero-links" aria-label="Redes sociais">
        <a
          href="https://github.com/felipebomfim"
          target="_blank"
          rel="noopener noreferrer"
          class="hero-link"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/felipe-dos-santos-bomfim"
          target="_blank"
          rel="noopener noreferrer"
          class="hero-link"
        >
          LinkedIn
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  text-align: center;
}

.hero-inner {
  max-width: 600px;
}

.avatar {
  width: 120px;
  height: 120px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  background: var(--color-accent);
  color: var(--color-bg);
  font-family: var(--font-mono);
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-title {
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  font-weight: 700;
  margin: 0 0 0.75rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  color: var(--color-secondary);
  margin: 0 0 2rem;
}

.hero-cta {
  margin-bottom: 2rem;
}

.hero-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-link {
  color: var(--color-accent);
  font-weight: 500;
}
.hero-link:hover {
  color: var(--color-text);
  text-decoration: none;
}
</style>
