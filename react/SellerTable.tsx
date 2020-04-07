import React, { useMemo, useState } from 'react'
import useProduct from 'vtex.product-context/useProduct'

import { ShippingQuote, SellerProvider } from './SellerContext'

interface Props {
  limitShownShippingInformation: number
}


const SellerTable: StorefrontFunctionComponent<Props> = ({ limitShownShippingInformation, children }) => {
  const { selectedItem } = useProduct()
  const [shippingQuotes, setShippingQuotes] = useState<ShippingQuote | null>(
    null
  )

  const sellerContext = useMemo(
    () => ({
      sellerList: selectedItem ? selectedItem.sellers : null,
      shippingQuotes,
      setShippingQuotes,
      limitShownShippingInformation: limitShownShippingInformation ? limitShownShippingInformation : 3
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
