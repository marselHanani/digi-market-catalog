import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

import MainLayout from '../layouts/MainLayout.vue'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue'
import DealsView from '@/views/DealsView.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,

    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
      },

      {
        path: 'products',
        name: 'products',
        component: ProductsView,
      },

      {
        path: 'products/:id',
        name: 'product-details',
        component: ProductDetailsView,
      },

      {
        path: 'deals',
        name: 'deals',
        component: DealsView,
      },
    ],
  },
]

export function createAppRouter({ webComponent = false } = {}) {
  return createRouter({
    history: webComponent ? createMemoryHistory() : createWebHistory(),

    routes,
  })
}

const router = createAppRouter()

export default router
