import React, { useMemo } from 'react'
import useProduct from 'vtex.product-context/useProduct'
import SellerContext from './SellerContext'

const SellerTable: StorefrontFunctionComponent<any> = ({ children }) => {
  const { product, selectedItem, selectedQuantity } = useProduct()

  const sellerContext = useMemo(
    () => ({
      selectedItem,
      product,
      selectedQuantity,
      sellerList: selectedItem ? selectedItem.sellers : null,
    }),
    [selectedItem]
  )

  return (
    <div>
      <SellerContext.Provider value={sellerContext}>
        {children}
      </SellerContext.Provider>
    </div>
  )
}

export default SellerTable
