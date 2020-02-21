import React, { useContext } from 'react'
import CurrentSellerContext from './CurrentSellerContext'
import { FormattedMessage } from 'react-intl'
import { useRuntime } from 'vtex.render-runtime'
import TranslateEstimate from 'vtex.shipping-estimate-translator/TranslateEstimate'

const SellerShipping: StorefrontFunctionComponent<any> = ({}) => {
  const { shipping } = useContext(CurrentSellerContext)
  const runtime = useRuntime()
  const {
    culture: { customCurrencySymbol },
  } = runtime

  return (
    <div className="items-center tc w-100-s w-20-m br2 ph6 pv4 ma0 w-100-s w-20-m">
      {shipping ? (
        shipping.logisticsInfo.slas.map((sla: any, index: number) => (
          <p key={index}>
            {sla.name} {customCurrencySymbol}{' '}
            {`${(sla.price / 100.0)
              .toFixed(2)
              .toString()
              .replace('.', ',')}    `}
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
