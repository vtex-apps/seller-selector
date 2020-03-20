import React, { useContext, useCallback } from 'react'
import SellerContext from './SellerContext'
import CurrentSellerContext from './CurrentSellerContext'
import { useCssHandles } from 'vtex.css-handles'
const SELLERS_CSS_HANDLES = [
  'sellerList',
]

const SellerBody: StorefrontFunctionComponent<any> = ({ children }) => {
  const { sellerList, shippingQuotes } = useContext(SellerContext)
  const handles = useCssHandles(SELLERS_CSS_HANDLES)

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
    <div className={`${handles.sellerList}`}>
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
