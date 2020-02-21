import React, { useContext } from 'react'
import CurrentSellerContext from './CurrentSellerContext'

const SellerName: StorefrontFunctionComponent<any> = ({}) => {
  const { currentSeller } = useContext(CurrentSellerContext)

  return (
    <p className="items-center tc w-100-s w-20-m  br2 ph6 pv4 ma0 b">
      {currentSeller.sellerName}
    </p>
  )
}

export default SellerName
