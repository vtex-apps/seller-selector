import React, { useContext } from 'react'
import { FormattedMessage } from 'react-intl'
import { FormattedCurrency } from 'vtex.format-currency'
import TranslateEstimate from 'vtex.shipping-estimate-translator/TranslateEstimate'

import CurrentSellerContext from './CurrentSellerContext'

const SellerShipping: StorefrontFunctionComponent<any> = () => {
  const { shipping } = useContext(CurrentSellerContext)

  return (
    <div className="items-center tc w-100-s w-20-m br2 ph6 pv4 ma0 w-100-s w-20-m">
      {shipping ? (
        shipping.slas.map((sla: any, index: number) => (
          <p key={index}>
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
