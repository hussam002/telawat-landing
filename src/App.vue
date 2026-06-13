<script setup lang="ts">
/**
 * App.vue — Root component.
 *
 * Responsibilities:
 *   - Watches the active locale and syncs `lang` / `dir` attributes on <html>.
 *   - Renders the persistent AppHeader and AppFooter around <RouterView>.
 *
 * Theme syncing is handled inside `useTheme` (the watcher runs at module level).
 */

import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { applyLocale } from '@/plugins/i18n'
import type { Locale } from '@/types'

const { locale } = useI18n()

// Keep <html lang> and <html dir> in sync with the selected locale.
watch(
  locale,
  (newLocale) => applyLocale(newLocale as Locale),
  { immediate: true },
)
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />
    <main class="flex-1">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
