<template>
  <header class="hero">
    <div class="hero-inner">
      <div class="terminal-line" aria-hidden="true">
        <span class="terminal-prompt">$ </span>
        <h2 class="terminal-name">
          <template v-for="(char, i) in nameChars" :key="i">
            <span v-show="i < visibleCount" class="terminal-char">{{ char }}</span>
          </template>
          <span class="terminal-cursor">█</span>
        </h2>
      </div>
      <h1 class="hero-title">Programar é o meu esporte!</h1>
      <p class="hero-subtitle">
        Engenheiro de Computação (ITA) · Software Engineer
      </p>
      <nav class="hero-links" aria-label="Redes sociais">
        <a href="https://github.com/felipebomfim" target="_blank" rel="noopener noreferrer" class="hero-link">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/felipe-dos-santos-bomfim" target="_blank" rel="noopener noreferrer"
          class="hero-link">
          LinkedIn
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const prompt = '$ ';
const name = 'Felipe Bomfim';
const nameChars = [...name].map((c) => (c === ' ' ? '\u00A0' : c));
const visibleCount = ref(0);
let intervalId = null;

onMounted(() => {
  const delay = 80;
  let count = 0;
  intervalId = setInterval(() => {
    count++;
    if (count > nameChars.length) {
      clearInterval(intervalId);
      return;
    }
    visibleCount.value = count;
  }, delay);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

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

.terminal-line {
  margin: 0 auto 1.5rem;
  min-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.terminal-prompt {
  font-family: var(--font-mono);
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  color: var(--color-accent);
  user-select: none;
}

.terminal-name {
  font-family: var(--font-mono);
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  font-weight: 500;
  color: var(--color-text);
  margin: 0;
  display: inline;
}

.terminal-char {
  display: inline-block;
}

.terminal-cursor {
  display: inline-block;
  font-family: var(--font-mono);
  color: var(--color-accent);
  animation: cursorBlink 1s step-end infinite;
  margin-left: 1px;
}

@keyframes cursorBlink {
  50% {
    opacity: 0;
  }
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
