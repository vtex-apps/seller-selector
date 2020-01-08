import React from 'react'
import { Link } from 'vtex.render-runtime'
import useProduct from 'vtex.product-context/useProduct'
import { useCssHandles } from 'vtex.css-handles'
import { FormattedMessage } from 'react-intl'

const LinkSeller: StorefrontFunctionComponent<any> = () => {
  const { product, selectedItem } = useProduct()
  const LINK_SELLER_HANDLES = [
    'linkSeller',
    'linkSellerText',
    'linkSellerNumber',
  ]
  const handles = useCssHandles(LINK_SELLER_HANDLES)

  if (selectedItem.sellers.length > 1) {
    return (
      <div className="flex flex-row-reverse relative">
        <Link
          className={`${handles.linkSeller}`}
          page="store.sellers"
          params={{ slug: product.linkText }}
        >
          <p className={`${handles.linkSellerText} pr6`}>
            <FormattedMessage id="store/seller-link.linkText" />{' '}
            <span
              className={`${handles.linkSellerNumber} bg-emphasis top-0 right-0 c-on-emphasis pa2 pr3 pl3 br4 absolute`}
            >
              {selectedItem.sellers.length}
            </span>
          </p>
        </Link>
      </div>
    )
  }
  return <></>
}

LinkSeller.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {},
}

export default LinkSeller
