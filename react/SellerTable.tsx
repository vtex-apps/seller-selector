import React, { useMemo, useState } from 'react'
import useProduct from 'vtex.product-context/useProduct'

import { ShippingQuote, SellerProvider } from './SellerContext'
import { defineMessages } from 'react-intl'

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

const messages = defineMessages({
  title: {
    defaultMessage: '',
    id: 'admin/editor.seller-selector.title'
  },
  shippingInformationTitle: {
    defaultMessage: '',
    id: 'admin/editor.seller-selector.limitShippingInformation-title'
  },
  shippingInformationDescription: {
    defaultMessage: '',
    id: 'admin/editor.seller-selector.limitShippingInformation-description'
  }
})


SellerTable.schema = {
  title: messages.title.id,
  type: 'object',
  properties: {
    limitShownShippingInformation: {
      title: messages.shippingInformationTitle.id,
      description: messages.shippingInformationDescription.id,
      type: 'number',
      default: 3
    }
  }
}

export default SellerTable
