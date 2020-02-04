import { FormattedMessage } from 'react-intl'
import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import SellerSelectorHeadCell from './SellerSelectorHeadCell'

const SELLERS_CSS_HANDLES = ['sellersHeader']

const SellerSelectorHead: StorefrontFunctionComponent<any> = ({}) => {
  const handles = useCssHandles(SELLERS_CSS_HANDLES)

  const messagesId = [
    { id: 'store/seller-list.seller' },
    { id: 'store/seller-list.product-price' },
    { id: 'store/seller-list.shipping' },
    { id: 'store/seller-list.shipping-and-price' },
  ]

  return (
    <div
      className={`${handles.sellersHeader} mt1 justify-between-s dn-s flex-m items-center-s br2 bg-muted-3 hover-bg-muted-3 active-bg-muted-3 c-on-muted-3 hover-c-on-muted-3 active-c-on-muted-3 dib`}
    >
      {messagesId.map((current: any, index: number) => (
        <SellerSelectorHeadCell
          key={index}
          {...{
            text: <FormattedMessage id={current.id} />,
          }}
        />
      ))}

      <h5 className="items-center tc w-20 ph6 pv4 ma0 t-heading-5">-</h5>
    </div>
  )
}

export default SellerSelectorHead
