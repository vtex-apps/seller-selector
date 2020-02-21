import React, { useContext, useMemo } from 'react'
import SellerContext from './SellerContext'
import CurrentSellerContext from './CurrentSellerContext'

const SellerBody: StorefrontFunctionComponent<any> = ({ children }) => {
  const { sellerList } = useContext(SellerContext)

  return (
    <div>
      {sellerList ? (
        sellerList.map((current: any, index: number) => (
          <CurrentSellerContext.Provider
            value={useMemo(
              () => ({
                currentSeller: current,
                shipping: null,
              }),
              []
            )}
            key={index}
          >
            {children}
          </CurrentSellerContext.Provider>
        ))
      ) : (
        <></>
      )}
    </div>
  )
}

export default SellerBody
