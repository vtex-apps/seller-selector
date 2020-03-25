import React from 'react'
import { FormattedMessage } from 'react-intl'
import { FormattedCurrency } from 'vtex.format-currency'
import TranslateEstimate from 'vtex.shipping-estimate-translator/TranslateEstimate'
import { useCssHandles } from 'vtex.css-handles'

import { useCurrentSeller } from './CurrentSellerContext'

const SELLERS_CSS_HANDLES = ['sellerShipping', 'sellerShippingText']

const SellerShipping: StorefrontFunctionComponent = () => {
  const { shipping } = useCurrentSeller()
  const handles = useCssHandles(SELLERS_CSS_HANDLES)

  return (
    <div
      className={`${handles.sellerShipping} items-center tc w-100-s w-20-m br2 ph6 pv4 ma0 w-100-s w-20-m`}
    >
      {shipping ? (
        shipping.slas.map((sla, index: number) => (
          <p key={index} className={handles.sellerShippingText}>
            <FormattedMessage
              id="store/seller-list.shipping-estimate"
              values={{
                name: sla.name,
                price: <FormattedCurrency value={sla.price / 100} />,
                estimate: (
                  <TranslateEstimate shippingEstimate={sla.shippingEstimate} />
                ),
              }}
            />
          </p>
        ))
      ) : (
        <FormattedMessage id="store/seller-list.pending" />
      )}
    </div>
  )
}

export default SellerShipping
