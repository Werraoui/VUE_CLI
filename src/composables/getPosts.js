import { ref } from 'vue'
import { posts as seedPosts } from '@/data/posts.js'

const postsState = ref([...seedPosts])
let lastId = seedPosts.length

export function usePosts() {
  const addPost = (payload) => {
    lastId += 1
    const newPost = {
      id: payload.id ?? lastId,
      title: payload.title?.trim() || 'Untitled post',
      body: payload.body?.trim() || '',
      tags: payload.tags?.length ? payload.tags : ['general']
    }
    postsState.value.push(newPost)
    return newPost.id
  }

  const updatePost = (id, payload) => {
    const numericId = Number(id)
    const index = postsState.value.findIndex((post) => post.id === numericId)
    if (index === -1) return false
    postsState.value[index] = {
      ...postsState.value[index],
      ...payload,
      tags: payload.tags?.length ? payload.tags : postsState.value[index].tags
    }
    return true
  }

  const deletePost = (id) => {
    const numericId = Number(id)
    const index = postsState.value.findIndex((post) => post.id === numericId)
    if (index === -1) return false
    postsState.value.splice(index, 1)
    return true
  }

  return {
    posts: postsState,
    addPost,
    updatePost,
    deletePost
  }
}

export { postsState }
