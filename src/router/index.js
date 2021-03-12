import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/top-rated',
    name: 'TopRated',
    component: () => import('../views/TopRated.vue')
  },
  
  {
    path: '/upcoming',
    name: 'Upcoming',
    component: () => import('../views/Upcoming.vue')
  },
  
  {
    path: '/genre/:name',
    name: 'genre',
    component: () => import('../views/Genre.vue')
  },
  
  {
    path: '/movie/:id',
    name: 'movie',
    component: () => import('../views/Movie.vue')
  },
  
  {
    path: '/search/:criteria',
    name: 'search',
    component: () => import('../views/Search.vue')
  }
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
