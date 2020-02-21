import React, { useContext } from 'react'
import { useRuntime } from 'vtex.render-runtime'
import CurrentSellerContext from './CurrentSellerContext'

const SellerPrice: StorefrontFunctionComponent<any> = ({}) => {
  const { currentSeller } = useContext(CurrentSellerContext)
  const runtime = useRuntime()
  const {
    culture: { customCurrencySymbol },
  } = runtime

  return (
    <>
      <p className="items-center tc w-100-s w-20-m br2 ph6 pv4 ma0 ">{`${customCurrencySymbol} ${currentSeller.commertialOffer.Price.toString().replace(
        '.',
        ','
      )}`}</p>
    </>
  )
}

export default SellerPrice
