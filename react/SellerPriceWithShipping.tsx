import React from 'react'
import { FormattedCurrency } from 'vtex.format-currency'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

import { useCurrentSeller } from './CurrentSellerContext'

const SELLERS_CSS_HANDLES = [
  'sellerPriceShipping',
  'sellerPriceShippingText',
] as const

const SellerPriceWithShipping: StorefrontFunctionComponent = () => {
  const { currentSeller, shipping } = useCurrentSeller()
  const handles = useCssHandles(SELLERS_CSS_HANDLES)

  return (
    <div
      className={`${handles.sellerPriceShipping} items-center tc br2 ph6 pv4 ma0 w-100-s w-20-m`}
    >
      {shipping ? (
        shipping.slas.map((sla, index: number) => (
          <p key={index} className={`${handles.sellerPriceShippingText}`}>
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
