<script setup lang="ts">
/**
 * HeroSection.vue — calm night "time-of-day" scene, drawn the way the app draws
 * it (PrayerSceneArt): a vertical night-sky gradient + a crescent + a few static
 * stars + the wide mosque-city skyline silhouette anchored at the bottom. Light
 * vector skyline (public/scenes/skyline-night.svg) — no heavy raster. Text is
 * white-on-scene in both themes; the unified StoreBadges sit on top.
 */
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import StoreBadges from '@/components/ui/StoreBadges.vue'

const { t } = useI18n()

const skylineSrc = `${import.meta.env.BASE_URL}scenes/skyline-night.svg`

// Primary app screenshot for the phone mockup. Tries the supplied file first,
// then common extensions, before falling back to the synthetic UI preview — so
// dropping in screenshots/featured.{jpg,png,webp} (or home.png) just works.
const shotCandidates = ['featured.jpg', 'featured.png', 'featured.webp', 'home.png']
const shotIdx = ref(0)
const shotFailed = ref(false)
const screenshotSrc = computed(
  () => `${import.meta.env.BASE_URL}screenshots/${shotCandidates[shotIdx.value]}`,
)
function onShotError() {
  if (shotIdx.value < shotCandidates.length - 1) shotIdx.value += 1
  else shotFailed.value = true
}

const trust = [{ key: 'hero.free' }, { key: 'hero.noAds' }, { key: 'hero.offline' }]

const stars = [
  { t: '12%', l: '18%' }, { t: '20%', l: '30%' }, { t: '10%', l: '46%' },
  { t: '16%', l: '66%' }, { t: '24%', l: '78%' }, { t: '14%', l: '86%' },
  { t: '28%', l: '24%' }, { t: '9%', l: '60%' }, { t: '22%', l: '52%' },
]
</script>

<template>
  <section
    class="relative isolate flex min-h-screen flex-col overflow-hidden text-white"
    style="background: linear-gradient(to bottom, #0a2342 0%, #123f6b 44%, #2c79ad 100%)"
    aria-label="hero"
  >
    <!-- ── Celestial + stars ── -->
    <div class="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <!-- Crescent (geometry mirrors PrayerSceneArt.crescentPath) -->
      <svg class="absolute end-[10%] top-[14%] size-16 sm:size-24" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <radialGradient id="hero-moon-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f3e7c8" stop-opacity="0.35" />
            <stop offset="100%" stop-color="#f3e7c8" stop-opacity="0" />
          </radialGradient>
          <mask id="hero-crescent">
            <rect width="100" height="100" fill="white" />
            <circle cx="66.3" cy="38.4" r="29.9" fill="black" />
          </mask>
        </defs>
        <circle cx="50" cy="50" r="50" fill="url(#hero-moon-glow)" />
        <circle cx="50" cy="50" r="34" fill="#f3e7c8" mask="url(#hero-crescent)" opacity="0.95" />
      </svg>

      <span
        v-for="(s, i) in stars"
        :key="i"
        class="absolute size-1 rounded-full bg-[#f3e7c8]"
        :style="{ top: s.t, left: s.l, opacity: 0.4 + (i % 3) * 0.2 }"
      />
    </div>

    <!-- ── Wide mosque-city skyline (light vector) anchored at the bottom ── -->
    <img
      :src="skylineSrc"
      alt=""
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 bottom-0 z-0 w-full"
    />

    <!-- ── Content ── -->
    <div class="relative z-10 mx-auto w-full max-w-6xl flex-1 px-4 pb-32 pt-28 sm:px-6 sm:pb-40 lg:pt-32">

      <!-- Bismillah -->
      <div class="mb-10 text-center">
        <p class="font-quran text-2xl leading-loose text-white/90 sm:text-3xl" style="text-shadow: 0 2px 14px rgba(0,0,0,0.45)">
          بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
        </p>
        <div class="mt-3 flex items-center justify-center gap-3" aria-hidden="true">
          <span class="h-px w-20 bg-gradient-to-r from-transparent to-white/50" />
          <svg width="11" height="11" viewBox="0 0 12 12" class="text-gold-300" fill="currentColor">
            <polygon points="6,0 7.5,4.5 12,6 7.5,7.5 6,12 4.5,7.5 0,6 4.5,4.5" />
          </svg>
          <span class="h-px w-20 bg-gradient-to-l from-transparent to-white/50" />
        </div>
      </div>

      <div class="grid items-center gap-12 lg:grid-cols-2">

        <!-- ── Text column ── -->
        <div class="flex flex-col items-center text-center lg:items-start lg:text-start">
          <span class="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/25 backdrop-blur-sm">
            <svg class="size-4 text-gold-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
            {{ t('hero.badgeCharity') }}
          </span>

          <h1 class="font-display text-5xl font-bold leading-tight sm:text-7xl" style="text-shadow: 0 2px 22px rgba(0,0,0,0.5)">
            {{ t('hero.appName') }}
          </h1>
          <p class="mb-4 mt-1 font-latin text-sm font-medium uppercase tracking-[0.35em] text-white/70">
            Telawat
          </p>

          <p class="mb-5 max-w-lg text-xl leading-relaxed text-white/95 sm:text-2xl" style="text-shadow: 0 1px 12px rgba(0,0,0,0.4)">
            {{ t('hero.tagline') }}
          </p>

          <p class="mb-8 max-w-lg text-base leading-loose text-white/80" style="text-shadow: 0 1px 10px rgba(0,0,0,0.35)">
            {{ t('hero.description') }}
          </p>

          <ul class="mb-8 flex flex-wrap justify-center gap-2.5 lg:justify-start" role="list">
            <li
              v-for="item in trust"
              :key="item.key"
              class="flex items-center gap-1.5 rounded-full bg-white/12 px-3.5 py-1.5 text-sm font-medium text-white ring-1 ring-white/25 backdrop-blur-sm"
            >
              <svg class="size-3.5 text-gold-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              {{ t(item.key) }}
            </li>
          </ul>

          <StoreBadges />
        </div>

        <!-- ── Phone column ── -->
        <div class="flex justify-center" aria-hidden="true">
          <div class="relative">
            <div class="absolute inset-0 -m-6 rounded-[3rem] bg-black/20 blur-2xl" />
            <div class="relative w-60 overflow-hidden rounded-[2.6rem] border-[5px] border-ink-900/80 bg-ink-950 shadow-2xl shadow-black/50 sm:w-72">
              <div class="absolute inset-x-0 top-0 z-10 flex justify-center">
                <div class="mt-2 h-5 w-24 rounded-full bg-ink-900/90" />
              </div>

              <img
                v-if="!shotFailed"
                :src="screenshotSrc"
                alt=""
                class="block aspect-[9/19] w-full object-cover"
                @error="onShotError"
              />

              <div v-else class="sky-isha flex aspect-[9/19] w-full flex-col p-5 pt-9 text-white">
                <div class="mb-4 flex items-center justify-between">
                  <div>
                    <p class="text-[0.65rem] text-white/60">الجمعة</p>
                    <p class="font-display text-lg">تلاوات</p>
                  </div>
                  <span class="flex size-8 items-center justify-center rounded-full bg-white/10">
                    <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 00-4-5.7V5a2 2 0 10-4 0v.3C7.7 6.2 6 8.4 6 11v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1" /></svg>
                  </span>
                </div>
                <div class="mb-4 rounded-2xl bg-white/10 p-4 text-center backdrop-blur">
                  <p class="font-quran text-xl leading-loose">ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ</p>
                  <p class="mt-1 text-[0.65rem] text-white/55">الفاتحة • آية ٢</p>
                </div>
                <div class="mb-4 grid grid-cols-3 gap-2">
                  <div v-for="p in [{ n: 'الفجر', t: '05:22' }, { n: 'الظهر', t: '12:15' }, { n: 'العصر', t: '15:48' }]" :key="p.n" class="rounded-xl bg-white/8 p-2 text-center">
                    <p class="text-[0.6rem] text-white/55">{{ p.t }}</p>
                    <p class="font-display text-xs">{{ p.n }}</p>
                  </div>
                </div>
                <div class="rounded-xl bg-white/8 p-3">
                  <div class="mb-1.5 flex justify-between text-[0.65rem]">
                    <span class="font-display">الورد اليومي</span>
                    <span>٣/١٠</span>
                  </div>
                  <div class="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div class="h-full w-[30%] rounded-full bg-gradient-to-r from-gold-400 to-gold-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
