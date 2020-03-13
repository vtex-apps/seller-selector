import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const SELLERS_CSS_HANDLES = ['sellersInfoBox']

const SellerRow: StorefrontFunctionComponent<any> = ({ children }) => {
  const handles = useCssHandles(SELLERS_CSS_HANDLES)

  return (
    <div
      className={`${handles.sellersInfoBox} justify-between-s bt-0-m b--solid-s bw1 b--muted-3 flex br--bottom items-center-s flex-column-s flex-row-m`}
    >
      {children}
    </div>
  )
}

export default SellerRow
