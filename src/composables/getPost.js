import { computed, unref } from 'vue'
import { postsState } from './getPosts'

function normalizeId(source) {
  const raw = unref(source)
  if (typeof raw === 'function') {
    return normalizeId(raw())
  }
  const numeric = Number(raw)
  return Number.isNaN(numeric) ? null : numeric
}

export function usePost(id) {
  const resolvedId = computed(() => normalizeId(id))
  const post = computed(() => {
    if (resolvedId.value === null) return undefined
    return postsState.value.find((entry) => entry.id === resolvedId.value)
  })

  return { post }
}
