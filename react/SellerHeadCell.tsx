import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const SELLERS_CSS_HANDLES = [
  'sellersHeaderText',
  'sellerHeaderContainers'
]

const SellerHeadCell: StorefrontFunctionComponent<any> = ({
  title,
  children,
}) => {

  const handles = useCssHandles(SELLERS_CSS_HANDLES)
  return (
    <div className={`${handles.sellerHeaderContainers}`}>
      {title ? (
        <h5 className={`${handles.sellersHeaderText} items-center tc w-20 ph6 pv4 ma0 t-heading-5`}>
          {title}
        </h5>
      ) : (
        <></>
      )}
      {children}
    </div>
  )
}

export default SellerHeadCell
