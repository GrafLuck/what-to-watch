import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import SignInView from '@/views/SignInView.vue'
import MyListView from '@/views/MyListView.vue'
import PlayerView from '@/views/PlayerView.vue'
import FilmView from '@/views/FilmView.vue'
import AddReviewView from '@/views/AddReviewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/login',
      name: 'login',
      component: SignInView
    },
    {
      path: '/mylist',
      name: 'mylist',
      component: MyListView
    },
    {
      path: '/films/:id',
      name: 'films',
      component: FilmView
    },
    {
      path: '/films/:id/review',
      name: 'review',
      component: AddReviewView
    },
    {
      path: '/player/:id',
      name: 'player',
      component: PlayerView
    },
  ]
})

export default router
