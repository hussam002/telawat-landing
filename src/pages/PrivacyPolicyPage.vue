<script setup lang="ts">
/**
 * PrivacyPolicyPage.vue — full bilingual privacy policy.
 * Contact details mirror the app's core/domain/AppInfo.kt (single source of truth).
 */
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

/** Update whenever the policy content changes. */
const LAST_UPDATED_AR = '١ يناير ٢٠٢٥'
const LAST_UPDATED_EN = 'January 1, 2025'
const lastUpdated = locale.value === 'ar' ? LAST_UPDATED_AR : LAST_UPDATED_EN

// From AppInfo.kt — keep in sync with the app.
const SUPPORT_EMAIL = 'telawat.app@gmail.com'
const SUPPORT_URL = 'https://github.com/hussam002'
</script>

<template>
  <div class="bg-ink-50 pb-20 pt-28 dark:bg-ink-950">
    <div class="mx-auto max-w-3xl px-4 sm:px-6">
      <RouterLink
        :to="{ name: 'home' }"
        class="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary-700 transition-colors hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
      >
        <svg class="size-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0 7-7m-7 7h18" />
        </svg>
        {{ t('privacy.backHome') }}
      </RouterLink>

      <h1 class="mb-2 font-display text-4xl font-bold text-ink-900 dark:text-ink-50">
        {{ t('privacy.pageTitle') }}
      </h1>
      <p class="mb-12 text-sm text-ink-500">
        {{ t('privacy.lastUpdated') }}: {{ lastUpdated }}
      </p>

      <div class="space-y-10">
        <p class="text-lg leading-relaxed text-ink-700 dark:text-ink-200">
          {{ t('privacy.intro') }}
        </p>

        <section>
          <h2 class="mb-3 font-display text-2xl font-bold text-primary-700 dark:text-primary-400">
            {{ t('privacy.noDataTitle') }}
          </h2>
          <p class="leading-relaxed text-ink-600 dark:text-ink-300">{{ t('privacy.noDataBody') }}</p>
        </section>

        <section>
          <h2 class="mb-3 font-display text-2xl font-bold text-ink-900 dark:text-ink-100">
            {{ t('privacy.permissionsTitle') }}
          </h2>
          <p class="mb-4 leading-relaxed text-ink-600 dark:text-ink-300">{{ t('privacy.permissionsBody') }}</p>
          <ul class="space-y-2 text-ink-600 dark:text-ink-300">
            <li v-for="key in ['notifications', 'exactAlarms', 'battery', 'location']" :key="key" class="flex gap-2.5">
              <svg class="mt-1 size-4 shrink-0 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>{{ t(`privacy.permList.${key}`) }}</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 class="mb-3 font-display text-2xl font-bold text-ink-900 dark:text-ink-100">
            {{ t('privacy.thirdPartyTitle') }}
          </h2>
          <p class="leading-relaxed text-ink-600 dark:text-ink-300">{{ t('privacy.thirdPartyBody') }}</p>
        </section>

        <section>
          <h2 class="mb-3 font-display text-2xl font-bold text-ink-900 dark:text-ink-100">
            {{ t('privacy.childrenTitle') }}
          </h2>
          <p class="leading-relaxed text-ink-600 dark:text-ink-300">{{ t('privacy.childrenBody') }}</p>
        </section>

        <section>
          <h2 class="mb-3 font-display text-2xl font-bold text-ink-900 dark:text-ink-100">
            {{ t('privacy.contactTitle') }}
          </h2>
          <p class="mb-4 leading-relaxed text-ink-600 dark:text-ink-300">{{ t('privacy.contactBody') }}</p>
          <div class="flex flex-wrap gap-3">
            <a
              :href="`mailto:${SUPPORT_EMAIL}`"
              class="inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm font-medium text-ink-800 transition-colors hover:border-primary-300 hover:text-primary-700 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-100 dark:hover:border-primary-700"
            >
              <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {{ SUPPORT_EMAIL }}
            </a>
            <a
              :href="SUPPORT_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm font-medium text-ink-800 transition-colors hover:border-primary-300 hover:text-primary-700 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-100 dark:hover:border-primary-700"
            >
              <svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.36 9.36 0 0112 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.49A10.02 10.02 0 0022 12.25C22 6.58 17.52 2 12 2z" />
              </svg>
              GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
