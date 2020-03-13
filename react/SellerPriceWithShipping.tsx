import React, { useContext } from 'react'
import CurrentSellerContext from './CurrentSellerContext'
import { FormattedCurrency } from 'vtex.format-currency'
import { FormattedMessage } from 'react-intl'

const SellerPriceWithShipping: StorefrontFunctionComponent<any> = ({}) => {
  const { currentSeller, shipping } = useContext(CurrentSellerContext)

  return (
    <div className="items-center tc br2 ph6 pv4 ma0 w-100-s w-20-m">
      {shipping ? (
        shipping.slas.map((sla: any, index: number) => (
          <p key={index}>
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
