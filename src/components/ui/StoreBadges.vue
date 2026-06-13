<script setup lang="ts">
/**
 * StoreBadges.vue — the single source of truth for the three download badges
 * (Google Play · Huawei AppGallery · direct APK). Used in BOTH the hero and the
 * download section so the buttons never drift apart or duplicate.
 *
 * Official-style icons, uniform "black badge" treatment (the recognizable app-
 * store look), calm hover, full a11y. Links come from VITE_* env vars.
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

// `||` (not `??`) so empty strings — e.g. unset GitHub Action secrets in prod —
// fall back to '#' instead of producing a dead self-link.
const googlePlayUrl = import.meta.env.VITE_GOOGLE_PLAY_URL || '#'
const huaweiUrl     = import.meta.env.VITE_HUAWEI_URL      || '#'
const apkUrl        = import.meta.env.VITE_APK_URL         || '#'

const badges = [
  { id: 'play',   href: googlePlayUrl, tagline: 'GET IT ON',     name: 'Google Play' },
  { id: 'huawei', href: huaweiUrl,     tagline: 'EXPLORE IT ON', name: 'AppGallery' },
  { id: 'apk',    href: apkUrl,        tagline: t('download.apkTagline'), name: t('download.apkName') },
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
        <!-- ── Google Play (official 4-colour mark) ── -->
        <svg
          v-if="badge.id === 'play'"
          viewBox="0 0 512 512"
          :class="size === 'lg' ? 'size-8' : 'size-7'"
          class="shrink-0"
          aria-hidden="true"
        >
          <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" fill="#00d95f" />
          <path d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l236.6-238L47 0z" fill="#00a0ff" />
          <path d="m425.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c17.2-9.3 17.2-36.2-.2-60.8z" fill="#ffd500" />
          <path d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="#ff3a44" />
        </svg>

        <!-- ── Huawei AppGallery ── -->
        <svg
          v-else-if="badge.id === 'huawei'"
          viewBox="0 0 48 48"
          :class="size === 'lg' ? 'size-8' : 'size-7'"
          class="shrink-0"
          aria-hidden="true"
        >
          <defs>
            <linearGradient :id="`ag-${size}`" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#ff5e57" />
              <stop offset="1" stop-color="#d4002a" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="44" height="44" rx="12" :fill="`url(#ag-${size})`" />
          <!-- Stylised white 'A' emblem -->
          <path
            d="M24 11.5 14 33h4.6l1.9-4.4h7l1.9 4.4H34L24 11.5zm-2.1 13.4L24 19.9l2.1 5h-4.2z"
            fill="#ffffff"
          />
        </svg>

        <!-- ── Direct APK (Android bugdroid) ── -->
        <svg
          v-else
          viewBox="0 0 48 48"
          :class="size === 'lg' ? 'size-8' : 'size-7'"
          class="shrink-0 text-[#3ddc84]"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M13.5 19.6c-.9 0-1.6.7-1.6 1.6v7.1c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6v-7.1c0-.9-.7-1.6-1.6-1.6zm21 0c-.9 0-1.6.7-1.6 1.6v7.1c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6v-7.1c0-.9-.7-1.6-1.6-1.6zM16.4 30.6c0 .9.7 1.7 1.7 1.7h1.2v3.7c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6v-3.7h3v3.7c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6v-3.7h1.2c.9 0 1.7-.8 1.7-1.7V19.9H16.4v10.7zM30.3 13.3l1.4-2.5c.1-.2 0-.4-.1-.5-.2-.1-.4 0-.5.1l-1.4 2.6c-1.6-.7-3.4-1.1-5.2-1.1s-3.6.4-5.2 1.1l-1.4-2.6c-.1-.2-.3-.2-.5-.1-.2.1-.2.3-.1.5l1.4 2.5c-2.9 1.6-4.9 4.4-5.2 7.7h21.9c-.3-3.3-2.3-6.1-5.3-7.7zm-9.4 4.1c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm6.3 0c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" />
        </svg>

        <span class="text-start leading-tight">
          <span class="block text-[0.65rem] uppercase tracking-wider text-white/60">{{ badge.tagline }}</span>
          <span class="block font-latin font-semibold" :class="size === 'lg' ? 'text-base' : 'text-sm'">{{ badge.name }}</span>
        </span>
      </a>
    </li>
  </ul>
</template>
