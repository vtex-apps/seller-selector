import { ReactType } from 'react'

declare module 'vtex.render-runtime' {
  export function useRuntime(): any
  export function useChildBlock(param: object): any
  export const Link: ReactType
}
