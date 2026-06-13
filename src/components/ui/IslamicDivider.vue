<script setup lang="ts">
/**
 * IslamicDivider.vue — calm section ornament: a centred 8-point star flanked by
 * hairlines and small gold diamonds.
 *
 * `tone="light"` forces white-ish colours for use over the dark sky scenes
 * (e.g. the download section); the default adapts to the light/dark theme.
 */
withDefaults(defineProps<{ tone?: 'auto' | 'light' }>(), { tone: 'auto' })
</script>

<template>
  <div class="flex items-center justify-center gap-4 py-2" aria-hidden="true">
    <div
      class="h-px flex-1 bg-gradient-to-r from-transparent"
      :class="tone === 'light' ? 'to-white/45' : 'to-primary-300 dark:to-primary-700'"
    />

    <svg
      width="26" height="26" viewBox="0 0 28 28" fill="currentColor"
      class="shrink-0"
      :class="tone === 'light' ? 'text-white/85' : 'text-primary-600 dark:text-primary-400'"
    >
      <polygon
        points="14,2 15.8,10.4 21.9,6.1 17.6,12.2 26,14 17.6,15.8 21.9,21.9 15.8,17.6 14,26 12.2,17.6 6.1,21.9 10.4,15.8 2,14 10.4,12.2 6.1,6.1 12.2,10.4"
        opacity="0.9"
      />
    </svg>

    <svg width="9" height="9" viewBox="0 0 10 10" class="-mx-2 shrink-0 text-gold-400">
      <polygon points="5,0 10,5 5,10 0,5" fill="currentColor" opacity="0.8" />
    </svg>

    <div
      class="h-px flex-1 bg-gradient-to-l from-transparent"
      :class="tone === 'light' ? 'to-white/45' : 'to-primary-300 dark:to-primary-700'"
    />
  </div>
</template>
