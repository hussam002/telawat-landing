/**
 * Vue Router configuration.
 *
 * Uses `createWebHashHistory` for zero-config GitHub Pages compatibility.
 * Hash mode means URLs look like: https://user.github.io/repo/#/privacy-policy
 * which requires no server-side redirect rules.
 *
 * Routes:
 *   /          → HomePage
 *   /privacy-policy → PrivacyPolicyPage
 */

import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { titleKey: 'hero.appName' },
    },
    {
      path: '/privacy-policy',
      name: 'privacy',
      component: PrivacyPolicyPage,
      meta: { titleKey: 'privacy.pageTitle' },
    },
  ],

  // Scroll to top on every navigation.
  scrollBehavior: () => ({ top: 0, behavior: 'smooth' }),
})

export default router
