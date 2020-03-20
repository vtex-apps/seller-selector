import React, { useContext } from 'react'
import { FormattedCurrency } from 'vtex.format-currency'
import CurrentSellerContext from './CurrentSellerContext'
import { useCssHandles } from 'vtex.css-handles'
const SELLERS_CSS_HANDLES = [
  'sellerPrice'
]

const SellerPrice: StorefrontFunctionComponent<any> = () => {
  const { currentSeller } = useContext(CurrentSellerContext)

  const handles = useCssHandles(SELLERS_CSS_HANDLES)
  return (
    <>
      <p className={`${handles.sellerPrice} items-center tc w-100-s w-20-m br2 ph6 pv4 ma0`}>
        <FormattedCurrency value={currentSeller.commertialOffer.Price} />
      </p>
    </>
  )
}

export default SellerPrice
