<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const year = computed(() => new Date().getFullYear())
const copyright = computed(() => t('footer.copyright', { year: year.value }))

const logoSrc = `${import.meta.env.BASE_URL}logo.svg`
const logoFailed = ref(false)

const SUPPORT_EMAIL = 'telawat.app@gmail.com'
const SUPPORT_URL = 'https://github.com/hussam002'
</script>

<template>
  <footer class="relative bg-ink-950 text-ink-300">
    <!-- Top gold hairline (matches the header) -->
    <div class="border-gold-line h-px w-full opacity-60" aria-hidden="true" />

    <div class="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div class="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">

        <!-- Brand -->
        <div class="flex flex-col items-center gap-2 md:items-start">
          <div class="flex items-center gap-2.5">
            <img
              v-if="!logoFailed"
              :src="logoSrc"
              alt=""
              class="size-8 rounded-lg object-contain"
              @error="logoFailed = true"
            />
            <span v-else class="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-primary-800">
              <svg width="16" height="16" viewBox="0 0 28 28" class="text-gold-400" fill="currentColor" aria-hidden="true">
                <polygon points="14,2 15.8,10.4 21.9,6.1 17.6,12.2 26,14 17.6,15.8 21.9,21.9 15.8,17.6 14,26 12.2,17.6 6.1,21.9 10.4,15.8 2,14 10.4,12.2 6.1,6.1 12.2,10.4" />
              </svg>
            </span>
            <span class="font-display text-2xl font-semibold text-ink-50">تلاوات</span>
          </div>
          <p class="text-sm text-ink-400">{{ t('footer.tagline') }}</p>
        </div>

        <!-- Nav -->
        <nav class="flex gap-6 text-sm">
          <RouterLink :to="{ name: 'home' }" class="text-ink-400 transition-colors hover:text-primary-400">
            {{ t('nav.home') }}
          </RouterLink>
          <RouterLink :to="{ name: 'privacy' }" class="text-ink-400 transition-colors hover:text-primary-400">
            {{ t('footer.privacyPolicy') }}
          </RouterLink>
        </nav>

        <!-- Contact -->
        <div class="flex items-center gap-3">
          <a
            :href="`mailto:${SUPPORT_EMAIL}`"
            :aria-label="t('support.contact')"
            class="flex size-9 items-center justify-center rounded-lg bg-white/5 text-ink-300 transition-colors hover:bg-white/10 hover:text-primary-400"
          >
            <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a
            :href="SUPPORT_URL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            class="flex size-9 items-center justify-center rounded-lg bg-white/5 text-ink-300 transition-colors hover:bg-white/10 hover:text-primary-400"
          >
            <svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.36 9.36 0 0112 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.49A10.02 10.02 0 0022 12.25C22 6.58 17.52 2 12 2z" />
            </svg>
          </a>
        </div>
      </div>

      <div class="my-8 h-px bg-gradient-to-r from-transparent via-ink-800 to-transparent" />

      <p class="text-center text-xs text-ink-500">{{ copyright }}</p>
    </div>
  </footer>
</template>
