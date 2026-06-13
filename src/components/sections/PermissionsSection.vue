<script setup lang="ts">
/**
 * PermissionsSection.vue — the "zero data" trust pitch, restyled to the teal/ink
 * palette. Calm cards, no rainbow icon tiles.
 */
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import IslamicDivider from '@/components/ui/IslamicDivider.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const { t } = useI18n()
const { sectionRef } = useScrollReveal()

type Tone = 'teal' | 'gold' | 'ink'
const toneTile: Record<Tone, string> = {
  teal: 'bg-gradient-to-br from-primary-600 to-primary-800 text-white',
  gold: 'bg-gradient-to-br from-gold-400 to-gold-600 text-white',
  ink:  'bg-gradient-to-br from-ink-500 to-ink-700 text-white',
}

const permissions = computed<{ titleKey: string; reasonKey: string; tone: Tone; path: string }[]>(() => [
  { titleKey: 'permissions.notifications', reasonKey: 'permissions.notificationsReason', tone: 'teal', path: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' },
  { titleKey: 'permissions.exactAlarms', reasonKey: 'permissions.exactAlarmsReason', tone: 'gold', path: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { titleKey: 'permissions.batteryOptimization', reasonKey: 'permissions.batteryOptimizationReason', tone: 'teal', path: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { titleKey: 'permissions.location', reasonKey: 'permissions.locationReason', tone: 'ink', path: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
])
</script>

<template>
  <section
    id="permissions"
    ref="sectionRef"
    class="bg-ink-100 py-24 dark:bg-ink-900"
    aria-labelledby="permissions-heading"
  >
    <div class="mx-auto max-w-5xl px-4 sm:px-6">
      <div class="mb-12 text-center">
        <IslamicDivider class="mb-6" />
        <h2 id="permissions-heading" class="reveal font-display text-4xl font-bold text-ink-900 dark:text-ink-50 sm:text-5xl">
          {{ t('permissions.sectionTitle') }}
        </h2>
        <p class="reveal reveal-delay-1 mx-auto mt-3 max-w-xl text-ink-600 dark:text-ink-400">
          {{ t('permissions.sectionSubtitle') }}
        </p>
      </div>

      <div class="grid gap-5 sm:grid-cols-2">
        <div
          v-for="(perm, i) in permissions"
          :key="perm.titleKey"
          :class="`reveal reveal-delay-${i + 1} card-lift flex gap-5 rounded-2xl border border-ink-200 bg-white p-6 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/60 dark:border-ink-800 dark:bg-ink-950 dark:hover:border-primary-700/60 dark:hover:shadow-none`"
        >
          <div :class="`flex size-12 shrink-0 items-center justify-center rounded-xl shadow-sm ${toneTile[perm.tone]}`">
            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path :d="perm.path" />
            </svg>
          </div>
          <div>
            <h3 class="mb-1.5 font-display text-lg font-semibold text-ink-900 dark:text-ink-100">
              {{ t(perm.titleKey) }}
            </h3>
            <p class="text-sm leading-relaxed text-ink-600 dark:text-ink-400">
              {{ t(perm.reasonKey) }}
            </p>
          </div>
        </div>
      </div>

      <!-- Zero-data assurance banner -->
      <div class="reveal mt-8 flex items-center gap-4 rounded-2xl border border-primary-200 bg-primary-50 px-6 py-5 dark:border-primary-800/50 dark:bg-primary-950/40">
        <svg class="size-8 shrink-0 text-primary-700 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <p class="text-sm font-medium leading-relaxed text-primary-900 dark:text-primary-200">
          {{ t('permissions.assurance') }}
        </p>
      </div>
    </div>
  </section>
</template>
