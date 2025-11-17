<template>
  <div id="app">
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped>
#app {
  font-family: 'Inter', 'Segoe UI', Helvetica, Arial, sans-serif;
  background: #f5f7fa;
  min-height: 100vh;
  color: #1f2933;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}
</style>
