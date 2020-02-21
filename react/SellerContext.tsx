import { createContext } from 'react'

const SellerContext = createContext<SellerContextValue>({
  sellerList: null,
  selectedItem: null,
  selectedQuantity: 0,
  product: null,
})

interface SellerContextValue {
  sellerList: any
  selectedItem: any
  product: any
  selectedQuantity: any
}

export default SellerContext
