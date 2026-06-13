<script setup lang="ts">
/**
 * ThemeToggle.vue
 *
 * A single icon button that toggles between light and dark mode.
 * Uses sun icon for dark mode (click to go light) and moon icon for light mode.
 */

import { useTheme } from '@/composables/useTheme'
import { useI18n } from 'vue-i18n'

const { theme, toggleTheme } = useTheme()
const { t } = useI18n()
</script>

<template>
  <button
    type="button"
    :aria-label="t('nav.toggleTheme')"
    :title="t('nav.toggleTheme')"
    class="rounded-lg p-2 text-inherit opacity-80 transition-colors hover:bg-ink-500/10 hover:opacity-100 dark:hover:bg-white/10"
    @click="toggleTheme"
  >
    <!-- Sun icon — shown in dark mode (click to switch to light) -->
    <svg
      v-if="theme === 'dark'"
      xmlns="http://www.w3.org/2000/svg"
      class="size-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="5" />
      <path
        stroke-linecap="round"
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
      />
    </svg>

    <!-- Moon icon — shown in light mode (click to switch to dark) -->
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      class="size-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      />
    </svg>
  </button>
</template>
