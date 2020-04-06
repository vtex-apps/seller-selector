import React, { useMemo, useState } from 'react'
import useProduct from 'vtex.product-context/useProduct'

import { ShippingQuote, SellerProvider } from './SellerContext'

const SellerTable: StorefrontFunctionComponent = ({ children }) => {
  const { selectedItem } = useProduct()
  const [shippingQuotes, setShippingQuotes] = useState<ShippingQuote | null>(
    null
  )

  const sellerContext = useMemo(
    () => ({
      sellerList: selectedItem ? selectedItem.sellers : null,
      shippingQuotes,
      setShippingQuotes,
    }),
    [selectedItem, shippingQuotes]
  )

  return <SellerProvider value={sellerContext}>{children}</SellerProvider>
}

SellerTable.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
}

export default SellerTable
