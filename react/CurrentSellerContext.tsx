import React, { createContext, useContext, FC } from 'react'

import { Seller, LogisticsInfo } from './SellerContext'

const CurrentSellerContext = createContext<CurrentSellerContextValue>({
  currentSeller: null,
  shipping: null,
})

interface CurrentSellerContextValue {
  currentSeller: Seller | null
  shipping: LogisticsInfo | null
}

export const useCurrentSeller = () => {
  return useContext(CurrentSellerContext)
}

interface ProviderProps {
  value: CurrentSellerContextValue
}

export const CurrentSellerProvider: FC<ProviderProps> = ({
  value,
  children,
}) => {
  return (
    <CurrentSellerContext.Provider value={value}>
      {children}
    </CurrentSellerContext.Provider>
  )
}

export default {
  CurrentSellerProvider,
  useCurrentSeller,
}
