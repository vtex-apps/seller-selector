import React from 'react'
import { defineMessages } from 'react-intl'
import type { CssHandlesTypes } from 'vtex.css-handles'
import { useCssHandles } from 'vtex.css-handles'

import { useInstallments } from './components/InstallmentsContext'
import InstallmentsRenderer, {
  CSS_HANDLES,
} from './components/InstallmentsRender'

const messages = defineMessages({
  title: {
    id: 'admin/editor.seller-selector.installments-list-item.title',
  },
  titleMessage: {
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

function SellerInstallmentsListItem({
  message = messages.default.id,
  markers = [],
  classes,
}: Props) {
  const { handles } = useCssHandles(CSS_HANDLES, { classes })
  const { installment } = useInstallments() ?? {}

  if (!installment) {
    return null
  }

  return (
    <InstallmentsRenderer
      message={message}
      markers={markers}
      installment={installment}
      handles={handles}
    />
  )
}

SellerInstallmentsListItem.schema = {
  title: 'admin/installments-list-item.title',
}

export default SellerInstallmentsListItem
