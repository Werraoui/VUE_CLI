
<template>
  <header class="nav-bar">
    <h1 class="logo">Blog</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/create">Add Post</RouterLink>
      <RouterLink v-if="firstPostId" :to="`/edit/${firstPostId}`">
        Edit Post
      </RouterLink>
      <span v-else class="disabled">Edit Post</span>
    </nav>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { usePosts } from '@/composables/getPosts'

const { posts } = usePosts()
const firstPostId = computed(() => posts.value[0]?.id ?? null)
</script>

<style scoped>
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background: #1f2933;
  color: #f5f7fa;
}

.logo {
  font-size: 1.5rem;
  margin: 0;
}

nav {
  display: flex;
  gap: 1rem;
}

a {
  color: #cbd2d9;
  text-decoration: none;
  font-weight: 600;
}

a.router-link-active {
  color: #53c1de;
}

.disabled {
  color: #7b8794;
  font-weight: 600;
  opacity: 0.6;
}
</style>

