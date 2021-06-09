import type { PropsWithChildren } from 'react'
import React, { useMemo } from 'react'
import type { CssHandlesTypes } from 'vtex.css-handles'
import { useCssHandles } from 'vtex.css-handles'
import type { ProductTypes } from 'vtex.product-context'

import pickInstallments from './utils/pickInstallments'
import { useCurrentSeller } from './CurrentSellerContext'
import { InstallmentsContextProvider } from './components/InstallmentsContext'

const CSS_HANDLES = ['installmentsListContainer'] as const

interface Props {
  /** Used to override default CSS handles */
  classes?: CssHandlesTypes.CustomClasses<typeof CSS_HANDLES>
}

function SellerInstallmentsList({
  classes,
  children,
}: PropsWithChildren<Props>) {
  const { currentSeller } = useCurrentSeller()
  const { handles } = useCssHandles(CSS_HANDLES, { classes })

  const commercialOffer = currentSeller?.commertialOffer

  if (
    !commercialOffer?.Installments ||
    commercialOffer.Installments?.length === 0
  ) {
    return null
  }

  const pickedInstallments = pickInstallments(
    commercialOffer.Installments,
    'PaymentSystemName'
  )

  return (
    <div className={handles.installmentsListContainer}>
      {pickedInstallments.map((inst, i) => {
        return (
          <InstallmentsItem installment={inst} key={i}>
            {children}
          </InstallmentsItem>
        )
      })}
    </div>
  )
}

interface ItemProps {
  installment: ProductTypes.Installment
}

function InstallmentsItem(props: PropsWithChildren<ItemProps>) {
  const { installment, children } = props
  const contextValue = useMemo(() => ({ installment }), [installment])

  return (
    <InstallmentsContextProvider value={contextValue}>
      {children}
    </InstallmentsContextProvider>
  )
}

export default SellerInstallmentsList
