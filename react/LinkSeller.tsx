import React from 'react'
import { Link } from 'vtex.render-runtime'
import { useProduct } from 'vtex.product-context'
import { useCssHandles } from 'vtex.css-handles'
import { FormattedMessage } from 'react-intl'

const LINK_SELLER_HANDLES = [
  'linkSellerContainer',
  'linkSeller',
  'linkSellerText',
  'linkSellerNumber',
] as const

function LinkSeller() {
  const { product, selectedItem } = useProduct() ?? {}
  const handles = useCssHandles(LINK_SELLER_HANDLES)

  if (!selectedItem || selectedItem.sellers.length <= 1) {
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
          <FormattedMessage
            id="store/seller-link.linkText"
            values={{
              number: selectedItem?.sellers.length,
            }}
          />
        </p>
      </Link>
    </div>
  )
}

LinkSeller.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
}

export default LinkSeller
