
<template>
  <section class="post-list">
    <SinglePost v-for="post in filteredPosts" :key="post.id" :post="post" />
    <p v-if="!filteredPosts.length" class="empty">
      No posts found<span v-if="tag"> for “{{ tag }}”</span>.
    </p>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import SinglePost from './SinglePost.vue'
import { usePosts } from '@/composables/getPosts'

const props = defineProps({
  tag: {
    type: String,
    default: null
  }
})

const { posts } = usePosts()

const filteredPosts = computed(() => {
  if (!props.tag) {
    return posts.value
  }
  return posts.value.filter((post) =>
    post.tags.some((tag) => tag.toLowerCase() === props.tag?.toLowerCase())
  )
})
</script>

<style scoped>
.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.empty {
  grid-column: 1 / -1;
  text-align: center;
  color: #7b8794;
}
</style>

