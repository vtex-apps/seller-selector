import React, { useContext } from 'react'
import { FormattedCurrency } from 'vtex.format-currency'
import { FormattedMessage } from 'react-intl'
import CurrentSellerContext from './CurrentSellerContext'
import { useCssHandles } from 'vtex.css-handles'
const SELLERS_CSS_HANDLES = [
  'sellerPriceShipping',
  'sellerPriceShippingText'
]

const SellerPriceWithShipping: StorefrontFunctionComponent<any> = () => {
  const { currentSeller, shipping } = useContext(CurrentSellerContext)
  const handles = useCssHandles(SELLERS_CSS_HANDLES)
  return (
    <div className={`${handles.sellerPriceShipping} items-center tc br2 ph6 pv4 ma0 w-100-s w-20-m`}>
      {shipping ? (
        shipping.slas.map((sla: any, index: number) => (
          <p key={index} className={`${handles.sellerPriceShippingText}`}>
            <FormattedCurrency
              value={sla.price / 100.0 + currentSeller.commertialOffer.Price}
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
