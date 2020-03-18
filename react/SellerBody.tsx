import React, { useContext, useCallback } from 'react'

import SellerContext from './SellerContext'
import CurrentSellerContext from './CurrentSellerContext'

const SellerBody: StorefrontFunctionComponent<any> = ({ children }) => {
  const { sellerList, shippingQuotes } = useContext(SellerContext)

  const currentSellerCreate = useCallback(
    (current: any, index: number) => {
      const currentContext = {
        currentSeller: current,
        shipping: shippingQuotes.logisticsInfo
          ? shippingQuotes.logisticsInfo[index]
          : null,
      }

      return currentContext
    },
    [shippingQuotes]
  )

  return (
    <div>
      {sellerList ? (
        sellerList.map((current: any, index: number) => (
          <CurrentSellerContext.Provider
            value={currentSellerCreate(current, index)}
            key={index}
          >
            {children}
          </CurrentSellerContext.Provider>
        ))
      ) : (
        <></>
      )}
    </div>
  )
}

export default SellerBody
