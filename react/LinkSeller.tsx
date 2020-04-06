import React from 'react'
import { Link } from 'vtex.render-runtime'
import useProduct from 'vtex.product-context/useProduct'
import { useCssHandles } from 'vtex.css-handles'
import { FormattedMessage } from 'react-intl'

const LINK_SELLER_HANDLES = [
  'linkSellerContainer',
  'linkSeller',
  'linkSellerText',
  'linkSellerNumber',
] as const

const LinkSeller: StorefrontFunctionComponent = () => {
  const { product, selectedItem } = useProduct()
  const handles = useCssHandles(LINK_SELLER_HANDLES)

  if (selectedItem.sellers.length <= 1) {
    return null
  }

  return (
    <div
      className={`${handles.linkSellerContainer} flex flex-row-reverse relative`}
    >
      <Link
        className={`${handles.linkSeller}`}
        page="store.sellers"
        params={{ slug: product.linkText }}
      >
        <p className={`${handles.linkSellerText} pr6`}>
          <FormattedMessage
            id="store/seller-link.linkText"
            values={{
              number: selectedItem.sellers.length,
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
