<script setup lang="ts">
/**
 * SupportSection.vue — reframed around sadaqah jariyah: share + du'a + an
 * optional donate button (only when VITE_DONATION_URL is configured) + contact.
 * Calm styling (no shimmer), serious tone.
 */
import { useI18n } from 'vue-i18n'
import IslamicDivider from '@/components/ui/IslamicDivider.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const { t } = useI18n()
const { sectionRef } = useScrollReveal()

const SUPPORT_EMAIL = 'telawat.app@gmail.com'

const donationUrl = import.meta.env.VITE_DONATION_URL ?? ''
/** Hide the donate button while the env var is empty or still a placeholder. */
const hasDonation = donationUrl !== '' && !donationUrl.includes('YOUR_')

function handleShare(): void {
  const shareData = { title: 'تلاوات | Telawat', url: window.location.origin }
  if (navigator.share) {
    navigator.share(shareData).catch(() => {})
  } else {
    navigator.clipboard?.writeText(window.location.origin).catch(() => {})
  }
}
</script>

<template>
  <section
    id="support"
    ref="sectionRef"
    class="relative overflow-hidden bg-ink-50 py-28 dark:bg-ink-950"
    aria-labelledby="support-heading"
  >
    <div class="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
      <div class="mb-8 reveal">
        <IslamicDivider class="mb-6" />
        <svg width="52" height="52" viewBox="0 0 56 56" class="mx-auto text-primary-600 dark:text-primary-400" fill="currentColor" aria-hidden="true">
          <polygon points="28,4 31.5,20.8 42.6,12.2 34,23.3 51,26.5 34,29.7 42.6,40.8 31.5,32.2 28,49 24.5,32.2 13.4,40.8 22,29.7 5,26.5 22,23.3 13.4,12.2 24.5,20.8" opacity="0.9" />
        </svg>
      </div>

      <h2 id="support-heading" class="reveal mb-6 font-display text-4xl font-bold text-ink-900 dark:text-ink-50 sm:text-5xl">
        {{ t('support.sectionTitle') }}
      </h2>

      <p class="reveal reveal-delay-1 mb-10 text-lg leading-loose text-ink-700 dark:text-ink-200">
        {{ t('support.description') }}
      </p>

      <div class="reveal reveal-delay-2 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
        <!-- Optional donate (only when configured) -->
        <a
          v-if="hasDonation"
          :href="donationUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="card-lift inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-gold-500/25 hover:shadow-xl"
        >
          <svg class="size-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </svg>
          {{ t('support.donate') }}
        </a>

        <!-- Share -->
        <button
          type="button"
          class="card-lift inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 px-7 py-3.5 font-semibold text-white shadow-lg shadow-primary-600/25 hover:shadow-xl"
          @click="handleShare"
        >
          <svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 1 1 0-2.684m0 2.684 6.632 3.316m-6.632-6 6.632-3.316m0 0a3 3 0 1 0 5.367-2.684 3 3 0 0 0-5.367 2.684zm0 9.316a3 3 0 1 0 5.368 2.684 3 3 0 0 0-5.368-2.684z" />
          </svg>
          {{ t('support.shareApp') }}
        </button>

        <!-- Contact -->
        <a
          :href="`mailto:${SUPPORT_EMAIL}`"
          class="inline-flex items-center gap-2.5 rounded-2xl border-2 border-ink-300 px-7 py-3.5 font-semibold text-ink-700 transition-colors hover:border-primary-400 hover:text-primary-700 dark:border-ink-700 dark:text-ink-200 dark:hover:border-primary-600 dark:hover:text-primary-400"
        >
          <svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {{ t('support.contact') }}
        </a>
      </div>

      <p class="reveal reveal-delay-3 mt-12 font-quran text-2xl leading-loose text-primary-700 dark:text-primary-300">
        {{ t('support.prayerRequest') }}
      </p>
    </div>
  </section>
</template>
