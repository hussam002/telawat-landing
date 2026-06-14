<script setup lang="ts">
/**
 * AppHeader.vue — Telawat brand header.
 *
 * - Consumes the user-supplied /logo.svg (graceful 8-point-star fallback).
 * - Transparent over the hero sky (white text); on scroll OR on non-home routes
 *   it becomes a calm theme-aware glass bar with a thin gold hairline.
 */
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'
import LanguageToggle from '@/components/ui/LanguageToggle.vue'

const { t } = useI18n()
const route = useRoute()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const logoFailed = ref(false)

const logoSrc = `${import.meta.env.BASE_URL}logo.svg`

/** Transparent (white text over the sky) only at the very top of the home page. */
const transparentOverHero = computed(
  () => route.name === 'home' && !isScrolled.value && !isMobileMenuOpen.value,
)

function handleScroll() { isScrolled.value = window.scrollY > 24 }
onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header
    :class="[
      'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
      transparentOverHero
        ? 'bg-transparent text-white'
        : 'bg-ink-50/85 text-ink-800 backdrop-blur-xl dark:bg-ink-950/85 dark:text-ink-100',
    ]"
  >
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">

      <!-- ── Brand ─────────────────────────────────── -->
      <RouterLink
        :to="{ name: 'home' }"
        class="group flex items-center gap-2.5"
        :aria-label="t('hero.appName')"
      >
        <!-- The supplied logo is a white mark on transparent — seat it on a teal
             brand tile so it stays visible on the light header bar (light mode). -->
        <span
          v-if="!logoFailed"
          class="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 p-1.5 shadow-sm ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105"
        >
          <img
            :src="logoSrc"
            alt=""
            class="size-full object-contain"
            @error="logoFailed = true"
          />
        </span>
        <!-- Fallback: teal tile + gold 8-point star -->
        <span
          v-else
          class="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 shadow-sm transition-transform duration-300 group-hover:scale-105"
        >
          <svg width="18" height="18" viewBox="0 0 28 28" class="text-gold-400" fill="currentColor" aria-hidden="true">
            <polygon points="14,2 15.8,10.4 21.9,6.1 17.6,12.2 26,14 17.6,15.8 21.9,21.9 15.8,17.6 14,26 12.2,17.6 6.1,21.9 10.4,15.8 2,14 10.4,12.2 6.1,6.1 12.2,10.4" />
          </svg>
        </span>

        <span class="font-display text-xl font-semibold leading-none">تلاوات</span>
        <span
          class="hidden font-latin text-xs font-medium tracking-wide opacity-60 sm:block"
        >Telawat</span>
      </RouterLink>

      <!-- ── Desktop nav ───────────────────────────── -->
      <nav class="hidden items-center gap-1 sm:flex">
        <RouterLink
          v-for="link in [{ name: 'home', label: t('nav.home') }, { name: 'privacy', label: t('nav.privacy') }]"
          :key="link.name"
          :to="{ name: link.name }"
          class="relative rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-ink-500/10 dark:hover:bg-white/10"
          :class="route.name === link.name ? 'opacity-100' : 'opacity-70 hover:opacity-100'"
        >
          {{ link.label }}
          <span
            v-if="route.name === link.name"
            class="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-gold-400"
          />
        </RouterLink>
      </nav>

      <!-- ── Controls ──────────────────────────────── -->
      <div class="flex items-center gap-1">
        <LanguageToggle />
        <ThemeToggle />

        <button
          type="button"
          class="ms-1 rounded-lg p-2 text-inherit opacity-80 transition-colors hover:bg-ink-500/10 hover:opacity-100 sm:hidden dark:hover:bg-white/10"
          :aria-label="t('nav.menu')"
          :aria-expanded="isMobileMenuOpen"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <svg v-if="!isMobileMenuOpen" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- ── Mobile menu ───────────────────────────────── -->
    <Transition name="slide-down">
      <nav
        v-if="isMobileMenuOpen"
        class="border-t border-ink-200 bg-ink-50/95 px-4 pb-4 pt-2 backdrop-blur-xl sm:hidden dark:border-ink-800 dark:bg-ink-950/95"
      >
        <RouterLink
          v-for="link in [{ name: 'home', label: t('nav.home') }, { name: 'privacy', label: t('nav.privacy') }]"
          :key="link.name"
          :to="{ name: link.name }"
          class="block rounded-lg px-4 py-3 text-sm font-medium text-ink-700 hover:bg-primary-50 hover:text-primary-700 dark:text-ink-200 dark:hover:bg-primary-950/50 dark:hover:text-primary-300"
          @click="isMobileMenuOpen = false"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
    </Transition>

    <!-- Thin gold hairline (only on the solid bar) -->
    <div
      v-if="!transparentOverHero"
      class="border-gold-line h-px w-full opacity-60"
      aria-hidden="true"
    />
  </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
