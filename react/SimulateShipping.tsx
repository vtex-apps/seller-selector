import React, { useState, FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

const SIMULATE_SHIPPING_CSS_HANDLES = ['simulateShipping']

interface Props {
  onSimulateShipping: (a: string) => void
}

const SimulateShipping: FC<Props> = props => {
  const [postalCode, setPostalCode] = useState('')
  const handles = useCssHandles(SIMULATE_SHIPPING_CSS_HANDLES)

  return (
    <form
      onSubmit={(e: any) => {
        e.preventDefault()
        props.onSimulateShipping(postalCode)
      }}
    >
      <div
        className={`${handles.simulateShipping} flex mr-auto ml-auto mw8 ba-s b--muted-3 pl4 pv5 pb5 mb3 br2`}
      >
        <p>
          <FormattedMessage id="store/seller-list.postal-code" />
        </p>
        <input
          className="ml3 mr3 ba-s b--muted-3 br3-s pl2"
          type="text"
          onChange={(e: any) => {
            setPostalCode(e.target.value)
          }}
          value={postalCode}
          name="postalcode"
          id="postalcode"
        ></input>
        <input
          className="ba-s b--muted-3 br3-s bg-action-primary white"
          type="submit"
          onClick={() => props.onSimulateShipping(postalCode)}
          value="Buscar"
        />
      </div>
    </form>
  )
}

export default SimulateShipping
