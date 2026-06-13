/**
 * Application entry point.
 *
 * Registers plugins in order:
 *   1. vue-i18n  — must be registered before any component renders translated text.
 *   2. Vue Router — must be registered before App.vue resolves routes.
 *
 * Global CSS is imported here so Vite/Tailwind processes it once.
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n'
import './assets/main.css'

createApp(App)
  .use(i18n)
  .use(router)
  .mount('#app')
