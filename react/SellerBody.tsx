import React, { useCallback } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import { useSellerContext, Seller } from './SellerContext'
import { CurrentSellerProvider } from './CurrentSellerContext'

const SELLERS_CSS_HANDLES = ['sellerList']

const SellerBody: StorefrontFunctionComponent = ({ children }) => {
  const { sellerList, shippingQuotes } = useSellerContext()
  const handles = useCssHandles(SELLERS_CSS_HANDLES)

  const currentSellerCreate = useCallback(
    (current: Seller, index: number) => {
      const currentContext = {
        currentSeller: current,
        shipping:
          shippingQuotes && shippingQuotes.logisticsInfo
            ? shippingQuotes.logisticsInfo[index]
            : null,
      }

      return currentContext
    },
    [shippingQuotes]
  )

  return (
    <div className={`${handles.sellerList}`}>
      {sellerList
        ? sellerList.map((current, index: number) => (
            <CurrentSellerProvider
              value={currentSellerCreate(current, index)}
              key={index}
            >
              {children}
            </CurrentSellerProvider>
          ))
        : null}
    </div>
  )
}

export default SellerBody
