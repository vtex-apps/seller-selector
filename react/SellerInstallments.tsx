import React from 'react'
import { defineMessages } from 'react-intl'
import type { CssHandlesTypes } from 'vtex.css-handles'
import { useCssHandles } from 'vtex.css-handles'

import InstallmentsRenderer, {
  CSS_HANDLES,
} from './components/installmentsRender'
import { useCurrentSeller } from './CurrentSellerContext'

const messages = defineMessages({
  title: {
    id: 'admin/editor.seller-selector.installments.title',
  },
  description: {
    id: 'admin/editor.seller-selector.installments.description',
  },
  default: {
    id: 'store/seller-selector.installments.default',
  },
})

interface Props {
  message?: string
  markers?: string[]
  /** Used to override default CSS handles */
  classes?: CssHandlesTypes.CustomClasses<typeof CSS_HANDLES>
}

function SellerInstallments({
  message = messages.default.id,
  markers = [],
  classes,
}: Props) {
  const { currentSeller } = useCurrentSeller()
  const { handles } = useCssHandles(CSS_HANDLES, { classes })

  const installments = currentSeller?.commertialOffer?.Installments

  if (!installments || installments?.length === 0) return null

  const initialInstalment = installments[0]

  const maxInstallmentOption = installments?.reduce(
    (acc, installmentOption) => {
      if (installmentOption.NumberOfInstallments > acc.NumberOfInstallments) {
        return installmentOption
      }

      return acc
    },
    initialInstalment
  )

  return (
    <InstallmentsRenderer
      installment={maxInstallmentOption}
      message={message}
      markers={markers}
      handles={handles}
    />
  )
}

SellerInstallments.schema = {
  title: messages.title.id,
}

export default SellerInstallments
