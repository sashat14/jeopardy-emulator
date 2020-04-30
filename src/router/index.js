import Vue from 'vue'
import VueRouter from 'vue-router'
import Categories from '../views/Categories.vue'
import Category from '../views/Category.vue'
import Clue from '../views/Clue.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category
  },
  {
    path: '/category/:id/:value',
    name: 'Clue',
    component: Clue
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
