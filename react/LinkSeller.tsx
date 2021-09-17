import React from 'react'
import { Link } from 'vtex.render-runtime'
import { useProduct } from 'vtex.product-context'
import { useCssHandles } from 'vtex.css-handles'
import { IOMessage } from 'vtex.native-types'
import { defineMessages } from 'react-intl'

const LINK_SELLER_HANDLES = [
  'linkSellerContainer',
  'linkSeller',
  'linkSellerText',
  'linkSellerNumber',
] as const

interface Props {
  message?: string
}

function LinkSeller({ message }: Props) {
  const { product, selectedItem } = useProduct() ?? {}
  const handles = useCssHandles(LINK_SELLER_HANDLES)

  const availableSellers = selectedItem?.sellers.filter(
    (seller) => seller.commertialOffer.AvailableQuantity > 0
  )

  if (!selectedItem || !availableSellers || availableSellers.length <= 1) {
    return null
  }

  return (
    <div
      className={`${handles.linkSellerContainer} flex flex-row-reverse relative`}
    >
      <Link
        className={`${handles.linkSeller}`}
        page="store.sellers"
        params={{ slug: product?.linkText }}
        query={selectedItem ? `skuId=${selectedItem.itemId}` : ''}
      >
        <p className={`${handles.linkSellerText} pr6`}>
          <IOMessage
            id={message}
            values={{
              sellerQuantity: availableSellers.length,
            }}
          />
        </p>
      </Link>
    </div>
  )
}

const messages = defineMessages({
  title: {
    id: 'admin/editor.seller-link.title',
  },
})

LinkSeller.schema = {
  title: messages.title.id,
}

export default LinkSeller
