
<template>
  <aside class="tag-cloud">
    <h3>Tags</h3>
    <ul>
      <li v-for="tag in tags" :key="tag">
        <RouterLink :to="`/tags/${tag}`">#{{ tag }}</RouterLink>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { usePosts } from '@/composables/getPosts'

const { posts } = usePosts()

const tags = computed(() => {
  const bag = new Set()
  posts.value.forEach((post) => {
    post.tags?.forEach((tag) => bag.add(tag))
  })
  return Array.from(bag).sort()
})
</script>

<style scoped>
.tag-cloud {
  padding: 1.5rem;
  border: 1px solid #d9e2ec;
  border-radius: 0.75rem;
  background: #f8fbff;
}

h3 {
  margin-top: 0;
  color: #243b53;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

a {
  text-decoration: none;
  color: #1f7a8c;
  font-weight: 600;
}
</style>

