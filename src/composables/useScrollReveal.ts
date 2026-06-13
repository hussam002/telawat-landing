/**
 * useScrollReveal composable.
 *
 * Observes a container element. When it enters the viewport, all child
 * elements with `.reveal` class are sequentially given `.revealed`,
 * triggering their CSS entrance transition with natural stagger.
 */

import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal(threshold = 0.12) {
  const sectionRef = ref<HTMLElement | null>(null)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!sectionRef.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const revealEls = entry.target.querySelectorAll<HTMLElement>('.reveal')
          revealEls.forEach((el, i) => {
            setTimeout(() => el.classList.add('revealed'), i * 75)
          })
          observer?.unobserve(entry.target)
        })
      },
      { threshold },
    )
    observer.observe(sectionRef.value)
  })

  onUnmounted(() => observer?.disconnect())

  return { sectionRef }
}
