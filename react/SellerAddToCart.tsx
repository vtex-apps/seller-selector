import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { useCurrentSeller } from './CurrentSellerContext'
import { defineMessages } from 'react-intl'
import { ExtensionPoint } from 'vtex.render-runtime'

const SELLERS_CSS_HANDLES = ['sellerBuyContainer'] as const

interface Props {
  isOneClickBuy?: boolean
}

const SellerAddToCart: StorefrontFunctionComponent<Props> = ({
  isOneClickBuy,
}) => {
  const { currentSeller } = useCurrentSeller()
  const handles = useCssHandles(SELLERS_CSS_HANDLES)

  return (
    <div
      className={`${handles.sellerBuyContainer} items-center tc br2 ph6 pv4 ma0 w-100-s w-20-m`}
    >
      <ExtensionPoint id="add-to-cart-button" {...{ isOneClickBuy, selectedSeller: currentSeller }} />
      <ExtensionPoint id="buy-button" {...{ isOneClickBuy, selectedSeller: currentSeller }} />
    </div>
  )
}

const messages = defineMessages({
  title: {
    defaultMessage: '',
    id: 'admin/editor.seller-selector.add-to-cart',
  },
  isOneClickBuy: {
    defaultMessage: '',
    id: 'admin/editor.seller-selector.oneClickBuy-title'
  }
})

SellerAddToCart.schema = {
  title: messages.title.id,
  type: 'object',
  properties: {
    isOneClickBuy: {
      title: messages.isOneClickBuy.id,
      type: 'boolean',
      default: false,
    }
  }
}


export default SellerAddToCart
