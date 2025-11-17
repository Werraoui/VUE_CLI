
<template>
  <section class="form-view">
    <h1>Create a new post</h1>
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
        <input v-model="form.tags" placeholder="vue, javascript" />
      </label>
      <button type="submit">Publish</button>
    </form>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { usePosts } from '@/composables/getPosts'

const router = useRouter()
const { addPost } = usePosts()

const form = reactive({
  title: '',
  body: '',
  tags: ''
})

const handleSubmit = () => {
  const tags = form.tags
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean)

  const id = addPost({
    title: form.title,
    body: form.body,
    tags
  })

  router.push(`/posts/${id}`)
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

button {
  align-self: flex-start;
  background: #0b7285;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 0.6rem;
  cursor: pointer;
}
</style>

