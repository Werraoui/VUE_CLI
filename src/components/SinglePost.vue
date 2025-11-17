
<template>
  <article class="single-post">
    <header>
      <h2>{{ post.title }}</h2>
      <ul class="tags">
        <li v-for="tag in post.tags" :key="tag">#{{ tag }}</li>
      </ul>
    </header>
    <p class="snippet">
      {{ snippet }}
    </p>
    <RouterLink class="detail-link" :to="`/posts/${post.id}`">
      Read more →
    </RouterLink>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const snippet = computed(() => {
  const text = props.post.body ?? ''
  return text.length > 120 ? `${text.substring(0, 120)}…` : text
})
</script>

<style scoped>
.single-post {
  padding: 1.5rem;
  border: 1px solid #e4e7eb;
  border-radius: 0.75rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
}

h2 {
  margin: 0;
  color: #102a43;
}

.tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
  margin: 0.25rem 0 0;
}

.tags li {
  background: #edf2ff;
  color: #364fc7;
  padding: 0.15rem 0.6rem;
  border-radius: 999px;
  font-size: 0.85rem;
}

.snippet {
  margin: 0;
  color: #486581;
  line-height: 1.5;
}

.detail-link {
  align-self: flex-start;
  text-decoration: none;
  font-weight: 600;
  color: #0b7285;
}
</style>

