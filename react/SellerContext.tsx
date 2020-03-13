import { createContext } from 'react'

const SellerContext = createContext<SellerContextValue>({
  sellerList: null,
  selectedItem: null,
  selectedQuantity: 0,
  product: null,
  shippingQuotes: null,
  setShippingQuotes: () => {},
})

interface SellerContextValue {
  sellerList: any
  selectedItem: any
  product: any
  selectedQuantity: any
  shippingQuotes: any
  setShippingQuotes: any
}

export default SellerContext
