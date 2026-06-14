<script setup lang="ts">
/**
 * StoreBadges.vue — the single source of truth for the three download badges
 * (Google Play · Huawei AppGallery · direct APK). Used in BOTH the hero and the
 * download section so the buttons never drift apart or duplicate.
 *
 * Icons are the official-style brand marks supplied in public/badges/ and are
 * rendered as <img> (not inline <svg>) so their internal gradient/mask ids can
 * never collide when the component is mounted twice on the same page. Uniform
 * frosted-glass treatment, calm hover, full a11y. Links come from VITE_* vars.
 */
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

withDefaults(
  defineProps<{
    /** 'md' for the hero row, 'lg' for the dedicated download section. */
    size?: 'md' | 'lg'
  }>(),
  { size: 'md' },
)

const base = import.meta.env.BASE_URL

// `||` (not `??`) so empty strings — e.g. unset GitHub Action secrets in prod —
// fall back to '#' instead of producing a dead self-link.
const googlePlayUrl = import.meta.env.VITE_GOOGLE_PLAY_URL || '#'
const huaweiUrl     = import.meta.env.VITE_HUAWEI_URL      || '#'
const apkUrl        = import.meta.env.VITE_APK_URL         || '#'

const badges = [
  { id: 'play',   href: googlePlayUrl, tagline: 'GET IT ON',     name: 'Google Play',       icon: `${base}badges/google-play-icon.svg` },
  { id: 'huawei', href: huaweiUrl,     tagline: 'EXPLORE IT ON', name: 'AppGallery',        icon: `${base}badges/appgallery-icon.svg` },
  { id: 'apk',    href: apkUrl,        tagline: t('download.apkTagline'), name: t('download.apkName'), icon: `${base}badges/android-icon.svg` },
] as const
</script>

<template>
  <ul
    class="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
    role="list"
  >
    <li v-for="badge in badges" :key="badge.id" class="w-full sm:w-auto">
      <a
        :href="badge.href"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`${badge.tagline} — ${badge.name}`"
        class="card-lift group flex w-full items-center justify-center gap-3 rounded-2xl bg-white/12 text-white ring-1 ring-white/30 shadow-lg shadow-black/20 backdrop-blur-md hover:bg-white/20 hover:ring-white/50 hover:shadow-xl sm:w-auto sm:justify-start"
        :class="size === 'lg' ? 'px-6 py-4' : 'px-5 py-3.5'"
      >
        <img
          :src="badge.icon"
          alt=""
          aria-hidden="true"
          class="shrink-0 object-contain"
          :class="size === 'lg' ? 'size-8' : 'size-7'"
        />

        <span class="text-start leading-tight">
          <span class="block text-[0.65rem] uppercase tracking-wider text-white/60">{{ badge.tagline }}</span>
          <span class="block font-latin font-semibold" :class="size === 'lg' ? 'text-base' : 'text-sm'">{{ badge.name }}</span>
        </span>
      </a>
    </li>
  </ul>
</template>
