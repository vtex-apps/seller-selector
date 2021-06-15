import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { defineMessages } from 'react-intl'
import { ExtensionPoint, useChildBlock } from 'vtex.render-runtime'

import { useCurrentSeller } from './CurrentSellerContext'

const SELLERS_CSS_HANDLES = ['sellerBuyContainer'] as const

interface Props {
  isOneClickBuy?: boolean
}

function SellerAddToCart({ isOneClickBuy }: Props) {
  const { currentSeller } = useCurrentSeller()
  const { handles } = useCssHandles(SELLERS_CSS_HANDLES)

  const useAddToCart = !!useChildBlock({ id: 'add-to-cart-button' })

  return (
    <div
      className={`${handles.sellerBuyContainer} items-center tc br2 ph6 pv4 ma0 w-100-s w-20-m`}
    >
      <ExtensionPoint
        id={useAddToCart ? 'add-to-cart-button' : 'buy-button'}
        {...{ isOneClickBuy, selectedSeller: currentSeller }}
      />
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
    id: 'admin/editor.seller-selector.oneClickBuy-title',
  },
})

SellerAddToCart.schema = {
  title: messages.title.id,
  type: 'object',
  properties: {
    isOneClickBuy: {
      title: messages.isOneClickBuy.id,
      type: 'boolean',
      default: false,
    },
  },
}

export default SellerAddToCart
