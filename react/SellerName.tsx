import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

import { useCurrentSeller } from './CurrentSellerContext'

const SELLERS_CSS_HANDLES = ['sellerName'] as const

const SellerName: StorefrontFunctionComponent = () => {
  const { currentSeller } = useCurrentSeller()
  const handles = useCssHandles(SELLERS_CSS_HANDLES)

  return (
    <p
      className={`${handles.sellerName} items-center tc w-100-s w-20-m  br2 ph6 pv4 ma0 b`}
    >
      {currentSeller && currentSeller.sellerName}
    </p>
  )
}

export default SellerName
