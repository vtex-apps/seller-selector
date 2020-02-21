import { createContext } from 'react'

const CurrentSellerContext = createContext<CurrentSellerContextValue>({
  currentSeller: null,
  shipping: null,
})

interface CurrentSellerContextValue {
  currentSeller: any
  shipping: any
}

export default CurrentSellerContext
