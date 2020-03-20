import React, { useContext } from 'react'
import { FormattedMessage } from 'react-intl'
import { FormattedCurrency } from 'vtex.format-currency'
import TranslateEstimate from 'vtex.shipping-estimate-translator/TranslateEstimate'
import { useCssHandles } from 'vtex.css-handles'

import CurrentSellerContext from './CurrentSellerContext'

const SELLERS_CSS_HANDLES = ['sellerShipping', 'sellerShippingText']

const SellerShipping: StorefrontFunctionComponent<any> = () => {
  const { shipping } = useContext(CurrentSellerContext)
  const handles = useCssHandles(SELLERS_CSS_HANDLES)
  return (
    <div
      className={`${handles.sellerShipping} items-center tc w-100-s w-20-m br2 ph6 pv4 ma0 w-100-s w-20-m`}
    >
      {shipping ? (
        shipping.slas.map((sla: any, index: number) => (
          <p key={index} className={`${handles.sellerShippingText}`}>
            {sla.name} <FormattedCurrency value={sla.price / 100} />{' '}
            <TranslateEstimate shippingEstimate={sla.shippingEstimate} />
          </p>
        ))
      ) : (
        <FormattedMessage id="store/seller-list.pending" />
      )}
    </div>
  )
}

export default SellerShipping
