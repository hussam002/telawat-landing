<script setup lang="ts">
/**
 * HomePage.vue
 *
 * Composes the full landing page by assembling all section components
 * in the intended reading order. No logic lives here — each section
 * is self-contained.
 */

import HeroSection       from '@/components/sections/HeroSection.vue'
import FeaturesSection   from '@/components/sections/FeaturesSection.vue'
import DownloadSection   from '@/components/sections/DownloadSection.vue'
import PermissionsSection from '@/components/sections/PermissionsSection.vue'
import SupportSection    from '@/components/sections/SupportSection.vue'
</script>

<template>
  <div>
    <HeroSection />
    <FeaturesSection />
    <DownloadSection />
    <PermissionsSection />
    <SupportSection />
  </div>
</template>
