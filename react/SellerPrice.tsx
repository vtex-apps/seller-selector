import React, { useContext } from 'react'
import CurrentSellerContext from './CurrentSellerContext'
import { FormattedCurrency } from 'vtex.format-currency'

const SellerPrice: StorefrontFunctionComponent<any> = ({}) => {
  const { currentSeller } = useContext(CurrentSellerContext)

  return (
    <>
      <p className="items-center tc w-100-s w-20-m br2 ph6 pv4 ma0 ">
        <FormattedCurrency value={currentSeller.commertialOffer.Price} />
      </p>
    </>
  )
}

export default SellerPrice
