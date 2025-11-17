<template>
  <section class="form-view" v-if="post">
    <h1>Edit post</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Title
        <input v-model="form.title" required />
      </label>
      <label>
        Body
        <textarea v-model="form.body" rows="6" required />
      </label>
      <label>
        Tags (comma separated)
        <input v-model="form.tags" />
      </label>
      <div class="actions">
        <button type="submit">Save changes</button>
        <RouterLink :to="`/posts/${post.id}`">Cancel</RouterLink>
      </div>
    </form>
  </section>
  <p v-else class="not-found">Post not found.</p>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { usePost } from '@/composables/getPost'
import { usePosts } from '@/composables/getPosts'

const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  }
})

const router = useRouter()
const { post } = usePost(() => Number(props.id))
const { updatePost } = usePosts()

const form = reactive({
  title: '',
  body: '',
  tags: ''
})

watch(
  () => post.value,
  (value) => {
    if (!value) return
    form.title = value.title
    form.body = value.body
    form.tags = value.tags.join(', ')
  },
  { immediate: true }
)

const handleSubmit = () => {
  const tags = form.tags
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean)

  updatePost(props.id, {
    title: form.title,
    body: form.body,
    tags
  })

  router.push(`/posts/${props.id}`)
}
</script>

<style scoped>
.form-view {
  max-width: 720px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 1rem;
  border: 1px solid #e4e7eb;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  display: flex;
  flex-direction: column;
  font-weight: 600;
  color: #243b53;
}

input,
textarea {
  margin-top: 0.4rem;
  padding: 0.65rem;
  border-radius: 0.6rem;
  border: 1px solid #d9e2ec;
}

.actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

button {
  background: #364fc7;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 0.6rem;
  cursor: pointer;
}

.not-found {
  text-align: center;
  padding: 2rem;
}
</style>
