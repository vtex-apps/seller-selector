import React, { useContext } from 'react'
import CurrentSellerContext from './CurrentSellerContext'
import { useCssHandles } from 'vtex.css-handles'
const SELLERS_CSS_HANDLES = [
  'sellerName'
]

const SellerName: StorefrontFunctionComponent<any> = () => {
  const { currentSeller } = useContext(CurrentSellerContext)
  const handles = useCssHandles(SELLERS_CSS_HANDLES)

  return (
    <p className={`${handles.sellerName} items-center tc w-100-s w-20-m  br2 ph6 pv4 ma0 b`}>
      {currentSeller.sellerName}
    </p>
  )
}

export default SellerName
