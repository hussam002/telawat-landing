<script setup lang="ts">
/**
 * LanguageToggle.vue
 *
 * A button that cycles between Arabic (ar) and English (en).
 * The label text is the *other* language name, acting as a hint of what to switch to.
 */

import { useI18n } from 'vue-i18n'
import type { Locale } from '@/types'

const { locale, t } = useI18n()

function toggleLocale(): void {
  locale.value = (locale.value === 'ar' ? 'en' : 'ar') as Locale
}
</script>

<template>
  <button
    type="button"
    :aria-label="t('nav.toggleLang')"
    class="rounded-lg px-3 py-1.5 text-sm font-medium text-inherit opacity-80 transition-colors hover:bg-ink-500/10 hover:opacity-100 dark:hover:bg-white/10"
    @click="toggleLocale"
  >
    {{ t('nav.toggleLang') }}
  </button>
</template>
