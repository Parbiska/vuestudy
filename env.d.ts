/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const component: DefineComponent<Record<string, any>, Record<string, any>, any>
  export default component
}

// Расширение ImportMetaEnv для переменных окружения
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL?: string
  readonly VITE_COINGECKO_API_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
