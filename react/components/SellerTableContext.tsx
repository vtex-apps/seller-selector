import { createContext } from 'react'

const SellerTableContext = createContext<SellerTableContextValue>({
  hasTitle: false,
  experimentalOptimizeRendering: false,
})

interface SellerTableContextValue {
  hasTitle: boolean
  experimentalOptimizeRendering?: boolean
}

export default SellerTableContext
