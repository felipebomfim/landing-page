<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <p class="footer-copy">
        © {{ year }} Felipe Bomfim. Todos os direitos reservados.
      </p>
      <nav class="footer-links" aria-label="Links rápidos">
        <a
          href="https://github.com/felipebomfim"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/felipe-dos-santos-bomfim"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 2rem 1.5rem;
  border-top: 1px solid var(--color-border);
  margin-top: 2rem;
}

.footer-inner {
  max-width: var(--content-max);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.footer-copy {
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-secondary);
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}
.footer-links a {
  color: var(--color-secondary);
  font-size: 0.9rem;
}
.footer-links a:hover {
  color: var(--color-accent);
}
</style>
