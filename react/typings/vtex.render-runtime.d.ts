import { ReactType } from 'react'

declare module 'vtex.render-runtime' {
  export function useRuntime(): any
  export function useChildBlock({ }): any
  export const Link: ReactType
}
