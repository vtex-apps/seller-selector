import React, { useContext } from 'react'
import { FormattedCurrency } from 'vtex.format-currency'

import CurrentSellerContext from './CurrentSellerContext'

const SellerPrice: StorefrontFunctionComponent<any> = () => {
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
