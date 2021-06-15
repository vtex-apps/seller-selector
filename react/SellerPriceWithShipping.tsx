import React from 'react'
import { FormattedCurrency } from 'vtex.format-currency'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

import { useCurrentSeller } from './CurrentSellerContext'
import { useSellerContext } from './SellerContext'

const SELLERS_CSS_HANDLES = [
  'sellerPriceShipping',
  'sellerPriceShippingText',
] as const

function SellerPriceWithShipping() {
  const { currentSeller, shipping } = useCurrentSeller()
  const { limitShownShippingInformation } = useSellerContext()
  const { handles } = useCssHandles(SELLERS_CSS_HANDLES)

  return (
    <div
      className={`${handles.sellerPriceShipping} ma0 items-center tc br2 ph6 pv4 ma0 w-100-s w-20-m`}
    >
      {shipping ? (
        shipping.slas
          .slice(0, limitShownShippingInformation)
          .map((sla, index: number) => (
            <p key={index} className={`${handles.sellerPriceShippingText} ma0`}>
              <FormattedCurrency
                value={
                  sla.price / 100.0 +
                  (currentSeller ? currentSeller.commertialOffer.Price : 0)
                }
              />
            </p>
          ))
      ) : (
        <FormattedMessage id="store/seller-list.pending" />
      )}
    </div>
  )
}

export default SellerPriceWithShipping
