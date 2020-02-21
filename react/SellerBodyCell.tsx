import React from 'react'

const SellerBodyCell: StorefrontFunctionComponent<any> = ({ children }) => {
  return (
    <div className="items-center tc w-100-s w-20-m br2 ph6 pv4 ma0 w-100-s w-20-m">
      {children}
    </div>
  )
}

export default SellerBodyCell
