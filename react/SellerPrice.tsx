import React from 'react'
import { FormattedCurrency } from 'vtex.format-currency'
import { useCssHandles } from 'vtex.css-handles'

import { useCurrentSeller } from './CurrentSellerContext'

const SELLERS_CSS_HANDLES = ['sellerPrice'] as const

function SellerPrice() {
  const { currentSeller } = useCurrentSeller()

  const handles = useCssHandles(SELLERS_CSS_HANDLES)

  return (
    <p
      className={`${handles.sellerPrice} items-center tc w-100-s w-20-m br2 ph6 pv4 ma0`}
    >
      <FormattedCurrency
        value={currentSeller ? currentSeller.commertialOffer.Price : 0}
      />
    </p>
  )
}

export default SellerPrice
