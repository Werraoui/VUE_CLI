import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddPostView from '../views/AddPostView.vue'
import EditPostView from '../views/EditPostView.vue'
import PostDetailView from '../views/PostDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'create',
    component: AddPostView
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditPostView,
    props: true
  },
  {
    path: '/posts/:id',
    name: 'post-detail',
    component: PostDetailView,
    props: true
  },
  {
    path: '/tags/:tag',
    name: 'tag',
    component: HomeView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
