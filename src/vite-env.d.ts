/// <reference types="vite/client" />

/**
 * Type declarations for custom VITE_ environment variables.
 * Add any new VITE_* variables here to get full TypeScript support.
 */
interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_GOOGLE_PLAY_URL: string
  readonly VITE_HUAWEI_URL: string
  readonly VITE_APK_URL: string
  readonly VITE_DONATION_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
