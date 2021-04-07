import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    name: 'use-index-as-key',
    path: '/use-index-as-key',
    component: () => import('./views/UseIndexAsKey.vue')
  },
  {
    name: 'use-id-as-key',
    path: '/use-id-as-key',
    component: () => import('./views/UseIdAsKey.vue')
  },
  {
    name: 'use-index-as-key-performance',
    path: '/use-index-as-key-performance',
    component: () => import('./views/UseIndexAsKeyPerformance.vue')
  },
  {
    name: 'use-id-as-key-performance',
    path: '/use-id-as-key-performance',
    component: () => import('./views/UseIdAsKeyPerformance.vue')
  },
  {
    name: 'use-sparse-array-and-vif',
    path: '/use-sparse-array-and-vif',
    component: () => import('./views/UseSparseArrayAndVif.vue')
  },
  {
    name: 'use-sparse-array-and-vshow',
    path: '/use-sparse-array-and-vshow',
    component: () => import('./views/UseSparseArrayAndVshow.vue')
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
