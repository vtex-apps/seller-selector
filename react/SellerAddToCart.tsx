import React, { useContext } from 'react'
import BuyButton from 'vtex.store-components/BuyButton'
import { useCssHandles } from 'vtex.css-handles'

import SellerContext from './SellerContext'
import CurrentSellerContext from './CurrentSellerContext'

const SELLERS_CSS_HANDLES = ['sellerBuyContainer']

const SellerAddToCart: StorefrontFunctionComponent<any> = ({ OneClickBuy }) => {
  const { product, selectedItem, selectedQuantity } = useContext(SellerContext)
  const { currentSeller } = useContext(CurrentSellerContext)
  const handles = useCssHandles(SELLERS_CSS_HANDLES)

  return (
    <div
      className={`${handles.sellerBuyContainer} items-center tc br2 ph6 pv4 ma0 w-100-s w-20-m`}
    >
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
