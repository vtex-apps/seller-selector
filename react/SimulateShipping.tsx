import React, { useState, FC, useContext } from 'react'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'
import { useApolloClient } from 'react-apollo'
import { useRuntime } from 'vtex.render-runtime'
import SimulateShippingQuery from './queries/SimulateShipping.gql'
import SellerContext from './SellerContext'
const SIMULATE_SHIPPING_CSS_HANDLES = [
  'simulateShipping',
  'simulateShippingText',
  'simulateShippingForm',
  'simulateShippingInput',
  'simulateShippingSearch'
]

const SimulateShipping: FC<any> = () => {
  const [postalCode, setPostalCode] = useState('')
  const handles = useCssHandles(SIMULATE_SHIPPING_CSS_HANDLES)
  const { selectedItem, selectedQuantity, setShippingQuotes } = useContext(
    SellerContext
  )
  let shippingItems = null

  const client = useApolloClient()
  const runtime = useRuntime()
  const {
    culture: { country },
  } = runtime

  if (selectedItem) {
    shippingItems = selectedItem.sellers.map(
      (current: any): ShippingItem => ({
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

  const onSimulateShipping = (postalCode: string) => {
    client
      .query({
        query: SimulateShippingQuery,
        variables: { ...variables, postalCode },
      })
      .then(result => setShippingQuotes(result.data.shipping))
  }

  return (
    <form className={`${handles.simulateShippingForm}`}
      onSubmit={(e: any) => {
        e.preventDefault()
        onSimulateShipping(postalCode)
      }}
    >
      <div
        className={`${handles.simulateShipping} flex mr-auto ml-auto mw8 ba-s b--muted-3 pl4 pv5 pb5 mb3 br2`}
      >
        <p className={`${handles.simulateShippingText}`}>
          <FormattedMessage id="store/seller-list.postal-code" />
        </p>
        <input
          className={`${handles.simulateShippingInput} ml3 mr3 ba-s b--muted-3 br3-s pl2`}
          type="text"
          onChange={(e: any) => {
            setPostalCode(e.target.value)
          }}
          value={postalCode}
          name="postalcode"
          id="postalcode"
        ></input>
        <input
          className={`${handles.simulateShippingSearch} ba-s b--muted-3 br3-s bg-action-primary white`}
          type="submit"
          onClick={() => onSimulateShipping(postalCode)}
          value="Buscar"
        />
      </div>
    </form>
  )
}

interface ShippingItem {
  id: string
  quantity: string
  seller: string
}

export default SimulateShipping
