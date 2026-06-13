<script setup lang="ts">
/**
 * FeaturesSection.vue — the calm daytime station: a quiet teal/gold/ink card
 * grid (no rainbow, no glow). Content + i18n keys unchanged.
 */
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import IslamicDivider from '@/components/ui/IslamicDivider.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const { t } = useI18n()
const { sectionRef } = useScrollReveal()

type Tone = 'teal' | 'gold' | 'ink'

/** 24×24 stroke icons (Heroicons style). Tone keeps the palette to teal+gold+ink. */
const features = computed<{ titleKey: string; descKey: string; tone: Tone; path: string }[]>(() => [
  { titleKey: 'features.quranReading', descKey: 'features.quranReadingDesc', tone: 'teal', path: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  { titleKey: 'features.memorization', descKey: 'features.memorizationDesc', tone: 'teal', path: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
  { titleKey: 'features.recitation', descKey: 'features.recitationDesc', tone: 'gold', path: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z' },
  { titleKey: 'features.prayerTimes', descKey: 'features.prayerTimesDesc', tone: 'teal', path: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { titleKey: 'features.adhan', descKey: 'features.adhanDesc', tone: 'gold', path: 'M15.536 8.464a5 5 0 010 7.072M12 6a7 7 0 010 12M9 10a3 3 0 000 4m-3-6a9 9 0 000 8' },
  { titleKey: 'features.qibla', descKey: 'features.qiblaDesc', tone: 'teal', path: 'M12 21a9 9 0 100-18 9 9 0 000 18zm0 0V3m6.36 3.64L8.7 15.3m0 0L6.34 17.66M8.7 15.3l2.36-6.6 6.6-2.36-2.36 6.6-6.6 2.36z' },
  { titleKey: 'features.dailyWird', descKey: 'features.dailyWirdDesc', tone: 'gold', path: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { titleKey: 'features.offline', descKey: 'features.offlineDesc', tone: 'ink', path: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
  { titleKey: 'features.free', descKey: 'features.freeDesc', tone: 'gold', path: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { titleKey: 'features.noData', descKey: 'features.noDataDesc', tone: 'teal', path: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { titleKey: 'features.noGooglePlay', descKey: 'features.noGooglePlayDesc', tone: 'ink', path: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
])

const toneTile: Record<Tone, string> = {
  teal: 'bg-gradient-to-br from-primary-600 to-primary-800 text-white',
  gold: 'bg-gradient-to-br from-gold-400 to-gold-600 text-white',
  ink:  'bg-gradient-to-br from-ink-500 to-ink-700 text-white',
}
</script>

<template>
  <section
    id="features"
    ref="sectionRef"
    class="bg-ink-50 py-24 dark:bg-ink-950"
    aria-labelledby="features-heading"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="mb-4 text-center reveal">
        <IslamicDivider class="mb-6" />
        <h2 id="features-heading" class="font-display text-4xl font-bold text-ink-900 dark:text-ink-50 sm:text-5xl">
          {{ t('features.sectionTitle') }}
        </h2>
      </div>
      <p class="reveal reveal-delay-1 mx-auto mb-14 max-w-xl text-center text-ink-600 dark:text-ink-400">
        {{ t('features.sectionSubtitle') }}
      </p>

      <ul class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li
          v-for="(feature, i) in features"
          :key="feature.titleKey"
          :class="`reveal reveal-delay-${Math.min((i % 6) + 1, 6)}`"
        >
          <div class="card-lift h-full rounded-2xl border border-ink-200 bg-white p-6 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/60 dark:border-ink-800 dark:bg-ink-900 dark:hover:border-primary-700/60 dark:hover:shadow-none">
            <div :class="`mb-4 inline-flex size-12 items-center justify-center rounded-xl shadow-sm ${toneTile[feature.tone]}`">
              <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path :d="feature.path" />
              </svg>
            </div>
            <h3 class="mb-2 font-display text-lg font-semibold text-ink-900 dark:text-ink-100">
              {{ t(feature.titleKey) }}
            </h3>
            <p class="text-sm leading-relaxed text-ink-600 dark:text-ink-400">
              {{ t(feature.descKey) }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
