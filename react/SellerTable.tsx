import React, { useMemo, useState } from 'react'
import type { PropsWithChildren } from 'react'
import { useProduct } from 'vtex.product-context'
import { useCssHandles } from 'vtex.css-handles'
import { defineMessages } from 'react-intl'

import { SellerProvider } from './SellerContext'
import type { ShippingQuote } from './SellerContext'

const SELLERS_CSS_HANDLES = ['sellerMasterContainer'] as const

interface Props {
  limitShownShippingInformation: number
}

function SellerTable({
  limitShownShippingInformation,
  children,
}: PropsWithChildren<Props>) {
  const handles = useCssHandles(SELLERS_CSS_HANDLES)
  const { selectedItem } = useProduct() ?? {}
  const [shippingQuotes, setShippingQuotes] = useState<ShippingQuote | null>(
    null
  )

  const sellerContext = useMemo(
    () => ({
      sellerList: selectedItem ? selectedItem.sellers : null,
      shippingQuotes,
      setShippingQuotes,
      limitShownShippingInformation: limitShownShippingInformation || 3,
    }),
    [limitShownShippingInformation, selectedItem, shippingQuotes]
  )

  return (
    <div className={`${handles.sellerMasterContainer}`}>
      <SellerProvider value={sellerContext}>{children}</SellerProvider>
    </div>
  )
}

const messages = defineMessages({
  title: {
    defaultMessage: '',
    id: 'admin/editor.seller-selector.title',
  },
  shippingInformationTitle: {
    defaultMessage: '',
    id: 'admin/editor.seller-selector.limitShippingInformation-title',
  },
  shippingInformationDescription: {
    defaultMessage: '',
    id: 'admin/editor.seller-selector.limitShippingInformation-description',
  },
})

SellerTable.schema = {
  title: messages.title.id,
  type: 'object',
  properties: {
    limitShownShippingInformation: {
      title: messages.shippingInformationTitle.id,
      description: messages.shippingInformationDescription.id,
      type: 'number',
      default: 3,
    },
  },
}

export default SellerTable
