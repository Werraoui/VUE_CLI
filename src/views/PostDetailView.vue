
<template>
  <div class="detail-view" v-if="post">
    <article>
      <h1>{{ post.title }}</h1>
      <ul class="tags">
        <li v-for="tag in post.tags" :key="tag">#{{ tag }}</li>
      </ul>
      <p class="body">
        {{ post.body }}
      </p>
      <div class="actions">
        <RouterLink :to="`/edit/${post.id}`">Edit</RouterLink>
        <button type="button" @click="handleDelete">Delete</button>
      </div>
    </article>
    <TagCloud />
  </div>
  <p v-else class="not-found">Post not found.</p>
</template>

<script setup>
import { toRef } from 'vue'
import { useRouter } from 'vue-router'
import TagCloud from '@/components/TagCloud.vue'
import { usePost } from '@/composables/getPost'
import { usePosts } from '@/composables/getPosts'

const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  }
})

const router = useRouter()
const idRef = toRef(props, 'id')
const { post } = usePost(idRef)
const { deletePost } = usePosts()

const handleDelete = () => {
  if (!post.value) return
  deletePost(post.value.id)
  router.push('/')
}
</script>

<style scoped>
.detail-view {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  padding: 2rem;
}

article {
  padding: 2rem;
  background: #fff;
  border-radius: 1rem;
  border: 1px solid #e1e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

h1 {
  margin-top: 0;
}

.tags {
  list-style: none;
  display: flex;
  gap: 0.5rem;
  padding: 0;
  margin: 0.5rem 0 1.5rem;
}

.tags li {
  background: #edf2ff;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
}

.body {
  line-height: 1.6;
  color: #334e68;
}

.actions {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}

button {
  border: none;
  background: #e03131;
  color: white;
  padding: 0.45rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.not-found {
  text-align: center;
  padding: 2rem;
}
</style>

