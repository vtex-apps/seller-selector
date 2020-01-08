import React, { useState } from 'react'
import BuyButton from 'vtex.store-components/BuyButton'
import { useCssHandles } from 'vtex.css-handles'
import useProduct from 'vtex.product-context/useProduct'
import TranslateEstimate from 'vtex.shipping-estimate-translator/TranslateEstimate'
import { useApolloClient } from 'react-apollo'
import { useRuntime } from 'vtex.render-runtime'
import { FormattedMessage } from 'react-intl'

import SimulateShippingQuery from './queries/SimulateShipping.gql'
import SimulateShipping from './SimulateShipping'

const SELLERS_CSS_HANDLES = ['sellersHeader', 'sellersInfoBox', 'sellerBox']

const SellerSelector: StorefrontFunctionComponent<any> = ({ slug }) => {
  const client = useApolloClient()
  const runtime = useRuntime()
  const {
    culture: { country, customCurrencySymbol },
  } = runtime
  const [shipping, setShipping] = useState<any>(null)
  const { product, selectedItem, selectedQuantity } = useProduct()
  const handles = useCssHandles(SELLERS_CSS_HANDLES)

  if (selectedItem) {
    const shippingItems = selectedItem.sellers.map(
      (current: any): ShippingItem => ({
        id: selectedItem.itemId,
        quantity: selectedQuantity.toString(),
        seller: current.sellerId,
      })
    )
    const variables = {
      shippingItems,
      country: country,
      postalCode: '',
    }

    const onSimulateShipping = (postalCode: string) => {
      client
        .query({
          query: SimulateShippingQuery,
          variables: { ...variables, postalCode },
        })
        .then(result => setShipping(result.data.shipping))
    }

    return (
      <div key={slug}>
        <SimulateShipping onSimulateShipping={onSimulateShipping} />
        <div className={`${handles.sellerBox} mr-auto ml-auto mw8`}>
          <div
            className={`${handles.sellersHeader} mt1 justify-between-s dn-s flex-m items-center-s br2 bg-muted-3 hover-bg-muted-3 active-bg-muted-3 c-on-muted-3 hover-c-on-muted-3 active-c-on-muted-3 dib`}
          >
            <h5 className="items-center tc w-20 ph6 pv4 ma0 t-heading-5">
              <FormattedMessage id="store/seller-list.seller" />
            </h5>
            <h5 className="items-center tc w-20 ph6 pv4 ma0 t-heading-5">
              <FormattedMessage id="store/seller-list.product-price" />
            </h5>
            <h5 className="items-center tc w-20 ph6 pv4 ma0 t-heading-5">
              <FormattedMessage id="store/seller-list.shipping" />
            </h5>
            <h5 className="items-center tc w-20 ph6 pv4 ma0 t-heading-5">
              <FormattedMessage id="store/seller-list.shipping-and-price" />
            </h5>
            <h5 className="items-center tc w-20 ph6 pv4 ma0 t-heading-5">-</h5>
          </div>
          {selectedItem.sellers.map((selectedSeller: any, index: any) => (
            <div
              key={index}
              className={`${handles.sellersInfoBox} justify-between-s bt-0-m b--solid-s bw1 b--muted-3 flex br--bottom items-center-s flex-column-s flex-row-m`}
            >
              <p className="items-center tc w-100-s w-20-m  br2 ph6 pv4 ma0 b">
                {selectedSeller.sellerName}
              </p>
              <p className="items-center tc w-100-s w-20-m br2 ph6 pv4 ma0 ">{`${customCurrencySymbol} ${selectedSeller.commertialOffer.Price.toString().replace(
                '.',
                ','
              )}`}</p>
              <div className="items-center tc w-100-s w-20-m br2 ph6 pv4 ma0 w-100-s w-20-m">
                {shipping ? (
                  shipping.logisticsInfo[index].slas.map(
                    (sla: any, index: number) => (
                      <p key={index}>
                        {sla.name} {customCurrencySymbol}{' '}
                        {`${(sla.price / 100.0)
                          .toFixed(2)
                          .toString()
                          .replace('.', ',')}    `}
                        <TranslateEstimate
                          shippingEstimate={sla.shippingEstimate}
                        />
                      </p>
                    )
                  )
                ) : (
                  <FormattedMessage id="store/seller-list.pending" />
                )}
              </div>
              <div className="items-center tc br2 ph6 pv4 ma0 w-100-s w-20-m">
                {shipping ? (
                  shipping.logisticsInfo[index].slas.map(
                    (sla: any, index: number) => (
                      <p key={index}>
                        {`${customCurrencySymbol} ${(
                          sla.price / 100.0 +
                          selectedSeller.commertialOffer.Price
                        )
                          .toFixed(2)
                          .toString()
                          .replace('.', ',')}`}
                      </p>
                    )
                  )
                ) : (
                  <FormattedMessage id="store/seller-list.pending" />
                )}
              </div>
              <div className="items-center tc br2 ph6 pv4 ma0 w-100-s w-20-m">
                <BuyButton
                  skuItems={BuyButton.mapCatalogItemToCart({
                    product,
                    selectedItem,
                    selectedSeller,
                    selectedQuantity,
                  })}
                  available={
                    selectedSeller &&
                    selectedSeller.commertialOffer &&
                    selectedSeller.commertialOffer.AvailableQuantity > 0
                  }
                  isOneClickBuy
                  shouldAddToCart
                ></BuyButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  } else return <></>
}

//This is the schema form that will render the editable props on SiteEditor
SellerSelector.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {},
}

interface ShippingItem {
  id: string
  quantity: string
  seller: string
}

export default SellerSelector
