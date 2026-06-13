/**
 * useTheme composable.
 *
 * Manages the application's color theme (light | dark).
 *
 * Strategy:
 *   1. On first load, read the user's saved preference from localStorage.
 *   2. If no preference exists, fall back to the OS `prefers-color-scheme`.
 *   3. The active theme is applied by toggling the `dark` class on <html>.
 *   4. Theme state is module-level (singleton), so all components share it.
 */

import { ref, watch } from 'vue'
import type { Theme } from '@/types'

// ── Resolve initial theme ──────────────────────────────────────────────────
function resolveInitialTheme(): Theme {
  const saved = localStorage.getItem('telawat-theme') as Theme | null
  if (saved === 'dark' || saved === 'light') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Singleton reactive state — shared across all component instances.
const theme = ref<Theme>(resolveInitialTheme())

// ── Apply theme to DOM ─────────────────────────────────────────────────────
function applyTheme(newTheme: Theme): void {
  if (newTheme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem('telawat-theme', newTheme)
}

// Watch for changes and sync to DOM immediately.
watch(theme, applyTheme, { immediate: true })

// ── Public API ─────────────────────────────────────────────────────────────
export function useTheme() {
  /** Toggle between light and dark. */
  const toggleTheme = (): void => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  return {
    /** Current theme. */
    theme,
    /** Toggle between light and dark. */
    toggleTheme,
  }
}
