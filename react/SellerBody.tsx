import React, { useCallback } from 'react'
import type { ReactNode } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import { useSellerContext } from './SellerContext'
import type { Seller } from './SellerContext'
import { CurrentSellerProvider } from './CurrentSellerContext'

const SELLERS_CSS_HANDLES = ['sellerList']

interface Props {
  children: ReactNode
}

function SellerBody({ children }: Props) {
  const { sellerList, shippingQuotes } = useSellerContext()
  const handles = useCssHandles(SELLERS_CSS_HANDLES)

  const currentSellerCreate = useCallback(
    (current: Seller, index: number) => {
      const currentContext = {
        currentSeller: current,
        shipping: shippingQuotes?.logisticsInfo
          ? shippingQuotes.logisticsInfo[index]
          : null,
      }

      return currentContext
    },
    [shippingQuotes]
  )

  return (
    <div className={`${handles.sellerList} mh7 mb7`}>
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
