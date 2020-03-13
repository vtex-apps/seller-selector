import React, { useMemo, useState } from 'react'
import useProduct from 'vtex.product-context/useProduct'
import SellerContext from './SellerContext'

const SellerTable: StorefrontFunctionComponent<any> = ({ children }) => {
  const { product, selectedItem, selectedQuantity } = useProduct()
  const [shippingQuotes, setShippingQuotes] = useState({})

  const sellerContext = useMemo(
    () => ({
      selectedItem,
      product,
      selectedQuantity,
      sellerList: selectedItem ? selectedItem.sellers : null,
      shippingQuotes,
      setShippingQuotes,
    }),
    [selectedItem, shippingQuotes]
  )

  return (
    <div>
      <SellerContext.Provider value={sellerContext}>
        {children}
      </SellerContext.Provider>
    </div>
  )
}

//This is the schema form that will render the editable props on SiteEditor
SellerTable.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {},
}

export default SellerTable
