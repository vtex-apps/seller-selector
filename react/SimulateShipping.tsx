import React, { useState, FC } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { useApolloClient } from 'react-apollo'
import { useRuntime } from 'vtex.render-runtime'
import {
  AddressRules,
  AddressContainer,
  PostalCodeGetter,
} from 'vtex.address-form'
import { StyleguideInput } from 'vtex.address-form/inputs'
import { Button, Spinner } from 'vtex.styleguide'
import useProduct from 'vtex.product-context/useProduct'
import { addValidation } from 'vtex.address-form/helpers'
import { FormattedMessage } from 'react-intl'
import './global.css'

import SimulateShippingQuery from './queries/SimulateShipping.gql'
import { useSellerContext } from './SellerContext'
import { getNewAddress } from './utils'


const SIMULATE_SHIPPING_CSS_HANDLES = [
  'simulateShipping',
  'simulateShippingSearch',
  'simulateShippingSpinner'
] as const

const SimulateShipping: FC = () => {
  const handles = useCssHandles(SIMULATE_SHIPPING_CSS_HANDLES)
  const { selectedItem, selectedQuantity } = useProduct()
  const { setShippingQuotes } = useSellerContext()
  const [isLoading, SetIsLoading] = useState(false)
  let shippingItems = null

  const client = useApolloClient()
  const runtime = useRuntime()
  const {
    culture: { country },
  } = runtime

  if (selectedItem) {
    shippingItems = selectedItem.sellers.map(
      (current: { sellerId: string }): ShippingItem => ({
        id: selectedItem.itemId,
        quantity: selectedQuantity.toString(),
        seller: current.sellerId,
      })
    )
  }

  const variables = {
    shippingItems,
    country: country,
    postalCode: '',
  }

  const [address, setAddress] = useState(() =>
    addValidation(getNewAddress(country))
  )

  const updateShippingQuotes = (postalCode: string) => {
    SetIsLoading(true)
    client
      .query({
        query: SimulateShippingQuery,
        variables: { ...variables, postalCode },
      })
      .then(result => { console.log('Loading', result.loading); setShippingQuotes(result.data.shipping) })
      .finally(() => SetIsLoading(false))
  }

  const handleAddressChange = (newAddress: any) => {
    const updatedAddress = {
      ...address,
      ...newAddress,
    }
    setAddress(updatedAddress)
    if (updatedAddress.postalCode.valid)
      updateShippingQuotes(updatedAddress.postalCode.value)
  }

  const showSpinner = () => {
    if (isLoading)
      return <div className={`${handles.simulateShippingSpinner} ml4 mt6`}><Spinner /></div>
    else
      return null
  }

  return (
    <div
      className={`${handles.simulateShipping} flex mr-auto ml-auto mw6 ba-s b--muted-3 pl4 pv5 pb5 mb3 br2`}
    >
      <AddressRules country={country} shouldUseIOFetching>
        <AddressContainer
          Input={StyleguideInput}
          address={address}
          onChangeAddress={handleAddressChange}
        >
          <PostalCodeGetter />
        </AddressContainer>
      </AddressRules>
      <Button
        className={`${handles.simulateShippingSearch} ba-s b--muted-3 br3-s bg-action-primary red`}
        size="small"
        type="submit"
        block
      >
        <FormattedMessage id="store/seller-list.shipping-label" />
      </Button>
      {showSpinner()}
    </div>
  )
}

interface ShippingItem {
  id: string
  quantity: string
  seller: string
}

export default SimulateShipping
