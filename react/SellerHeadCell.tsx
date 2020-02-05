import React from 'react'

const SellerHeadCell: StorefrontFunctionComponent<any> = ({ ...props }) => {
  return (
    <h5 className="items-center tc w-20 ph6 pv4 ma0 t-heading-5">
      {props.text}
    </h5>
  )
}

export default SellerHeadCell
