<template>
  <section class="home-view">
    <div class="layout">
      <PostList :tag="tag" />
      <TagCloud class="sticky" />
    </div>
  </section>
</template>

<script setup>
import PostList from '@/components/PostList.vue'
import TagCloud from '@/components/TagCloud.vue'

const props = defineProps({
  tag: {
    type: String,
    default: null
  }
})
</script>

<style scoped>
.home-view {
  padding: 2rem;
}

.layout {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(240px, 1fr);
  gap: 2rem;
}

.sticky {
  position: sticky;
  top: 2rem;
}

@media (max-width: 900px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .sticky {
    position: static;
  }
}
</style>
