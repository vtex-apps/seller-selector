import React, { useContext } from 'react'
import BuyButton from 'vtex.store-components/BuyButton'

import SellerContext from './SellerContext'
import CurrentSellerContext from './CurrentSellerContext'

const SellerAddToCart: StorefrontFunctionComponent<any> = ({ OneClickBuy }) => {
  const { product, selectedItem, selectedQuantity } = useContext(SellerContext)
  const { currentSeller } = useContext(CurrentSellerContext)

  return (
    <div className="items-center tc br2 ph6 pv4 ma0 w-100-s w-20-m">
      <BuyButton
        skuItems={BuyButton.mapCatalogItemToCart({
          product,
          selectedItem,
          selectedSeller: currentSeller,
          selectedQuantity,
        })}
        available={
          currentSeller &&
          currentSeller.commertialOffer &&
          currentSeller.commertialOffer.AvailableQuantity > 0
        }
        isOneClickBuy={OneClickBuy}
        shouldAddToCart
      ></BuyButton>
    </div>
  )
}

export default SellerAddToCart
