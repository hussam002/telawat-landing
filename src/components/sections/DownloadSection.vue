<script setup lang="ts">
/**
 * DownloadSection.vue — the dusk station of the page: a Maghrib sunset sky + a
 * soft sun glow + the wide mosque-city skyline (light vector), with the single
 * StoreBadges component (no duplicated buttons). A top fade eases the saturated
 * sky out of the neutral page so there is no hard seam in light mode.
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
    class="relative isolate overflow-hidden pb-28 pt-28 text-white
           bg-[linear-gradient(to_bottom,#fafdfb_0%,#2a1a4a_15%,#8a3f6b_52%,#f0894a_100%)]
           dark:bg-[linear-gradient(to_bottom,#0e1513_0%,#2a1a4a_15%,#8a3f6b_52%,#f0894a_100%)]"
    aria-labelledby="download-heading"
  >
    <!-- Soft sun glow low on the horizon -->
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-2/3"
      style="background: radial-gradient(60% 70% at 32% 100%, rgba(255,224,150,0.55) 0%, transparent 60%)"
      aria-hidden="true"
    />
    <!-- No top overlay: the section's own background gradient now starts at the
         page colour (ink-50 / ink-950) and eases into the dusk, so the seam with
         the section above is part of one continuous gradient — no banding. -->

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
