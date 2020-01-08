import { ReactType } from 'react'

declare module 'vtex.render-runtime' {
  export function useRuntime(): any
  export const Link: ReactType
}
