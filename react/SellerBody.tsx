import React, { useContext, useMemo } from 'react'
import SellerContext from './SellerContext'
import CurrentSellerContext from './CurrentSellerContext'

const SellerBody: StorefrontFunctionComponent<any> = ({ children }) => {
  const { sellerList, shippingQuotes } = useContext(SellerContext)

  function rogerinho({ current, index }) {
    useMemo(
      ({ current, index }) => ({
        currentSeller: current,
        shipping: shippingQuotes.logisticsInfo
          ? shippingQuotes.logisticsInfo[index]
          : null,
      }),
      [shippingQuotes]
    )
  }

  return (
    <div>
      {sellerList ? (
        sellerList.map((current: any, index: number) => (
          <CurrentSellerContext.Provider
            value={() => rogerinho(current, index)}
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
