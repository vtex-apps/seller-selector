import React from 'react'
import BuyButton from 'vtex.store-components/BuyButton'
import { useCssHandles } from 'vtex.css-handles'
import useProduct from 'vtex.product-context/useProduct'

import { useCurrentSeller } from './CurrentSellerContext'

const SELLERS_CSS_HANDLES = ['sellerBuyContainer']

interface Props {
  isOneClickBuy?: boolean
}

const SellerAddToCart: StorefrontFunctionComponent<Props> = ({
  isOneClickBuy,
}) => {
  const { product, selectedItem, selectedQuantity } = useProduct()
  const { currentSeller } = useCurrentSeller()
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
          currentSeller && currentSeller.commertialOffer.AvailableQuantity > 0
        }
        isOneClickBuy={isOneClickBuy}
        shouldAddToCart
      ></BuyButton>
    </div>
  )
}

export default SellerAddToCart
