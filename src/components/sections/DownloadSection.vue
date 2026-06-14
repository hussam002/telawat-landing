<script setup lang="ts">
/**
 * DownloadSection.vue — the dusk station of the page: a Maghrib sunset sky + a
 * soft sun glow + the wide mosque-city skyline (light vector), with the single
 * StoreBadges component (no duplicated buttons).
 *
 * The light page → dusk panel transition is handled by an ornamental pointed-arch
 * arcade along the top (`.arcade-top`, page-coloured): its solid crown is the same
 * colour as the page (seamless), and the dusk sky shows through the arches — so the
 * seam reads as "the sunset seen through a mosque arcade", not a hard colour jump.
 * A faint 8-fold geometric pattern adds quiet richness over the panel.
 */
import { useI18n } from 'vue-i18n'
import StoreBadges from '@/components/ui/StoreBadges.vue'
import IslamicDivider from '@/components/ui/IslamicDivider.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const { t } = useI18n()
const { sectionRef } = useScrollReveal()

const skylineSrc = `${import.meta.env.BASE_URL}scenes/skyline-night.svg`
</script>

<template>
  <section
    id="download"
    ref="sectionRef"
    class="relative isolate overflow-hidden pb-28 pt-32 text-white"
    style="background: linear-gradient(to bottom, #2a1a4a 0%, #8a3f6b 52%, #f0894a 100%)"
    aria-labelledby="download-heading"
  >
    <!-- Faint 8-fold geometric texture over the dusk -->
    <div class="bg-islamic-pattern-light pointer-events-none absolute inset-0 z-0" aria-hidden="true" />

    <!-- Soft sun glow low on the horizon -->
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-2/3"
      style="background: radial-gradient(60% 70% at 32% 100%, rgba(255,224,150,0.55) 0%, transparent 60%)"
      aria-hidden="true"
    />

    <!-- Ornamental arcade crown: page-coloured arches, dusk sky shows through the
         openings — the seamless, intentional transition from the light page. -->
    <div class="arcade-top pointer-events-none absolute inset-x-0 top-0 z-0 h-14 bg-ink-50 dark:bg-ink-950" aria-hidden="true" />

    <!-- Wide skyline anchored at the bottom -->
    <img
      :src="skylineSrc"
      alt=""
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 bottom-0 z-0 w-full"
    />

    <div class="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
      <div class="mb-12 text-center">
        <IslamicDivider tone="light" class="mb-6" />
        <h2 id="download-heading" class="font-display text-4xl font-bold sm:text-5xl reveal" style="text-shadow: 0 2px 18px rgba(0,0,0,0.4)">
          {{ t('download.sectionTitle') }}
        </h2>
        <p class="reveal reveal-delay-1 mt-3 text-white/85" style="text-shadow: 0 1px 10px rgba(0,0,0,0.35)">
          {{ t('download.sectionSubtitle') }}
        </p>
      </div>

      <div class="reveal reveal-delay-2 flex justify-center">
        <StoreBadges size="lg" />
      </div>

      <p class="reveal reveal-delay-3 mt-6 text-center text-sm text-white/75" style="text-shadow: 0 1px 8px rgba(0,0,0,0.35)">
        {{ t('download.apkHint') }}
      </p>
    </div>
  </section>
</template>
