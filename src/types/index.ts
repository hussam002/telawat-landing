/**
 * Shared TypeScript type definitions for the Telawat landing page.
 */

/** Supported UI themes. */
export type Theme = 'light' | 'dark'

/** Supported UI locales. */
export type Locale = 'ar' | 'en'

/** A single app feature displayed in the features grid. */
export interface FeatureItem {
  /** Icon — any Unicode emoji or SVG string. */
  icon: string
  /** i18n translation key for the feature title. */
  titleKey: string
  /** i18n translation key for the feature description. */
  descriptionKey: string
}

/** A single download option (store or direct APK). */
export interface DownloadOption {
  /** Display label translation key. */
  labelKey: string
  /** External URL to the store listing or APK file. */
  url: string
  /** Tailwind colour classes for the button (bg + text). */
  colorClasses: string
  /** SVG icon markup. */
  icon: string
}

/** A runtime permission the app requests, with explanation. */
export interface PermissionItem {
  /** Icon emoji. */
  icon: string
  /** i18n translation key for the permission title. */
  titleKey: string
  /** i18n translation key for the reason this permission is needed. */
  reasonKey: string
}
