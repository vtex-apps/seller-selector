import React from 'react'
import type { PropsWithChildren } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { defineMessages } from 'react-intl'

const SELLERS_CSS_HANDLES = ['sellerHeadCell', 'sellerHeadText'] as const

interface Props {
  title: string
}

function SellerHeadCell({ title, children }: PropsWithChildren<Props>) {
  const handles = useCssHandles(SELLERS_CSS_HANDLES)

  return (
    <div className={`${handles.sellerHeadCell} w-20`}>
      {title ? (
        <h5
          className={`${handles.sellerHeadText} items-center tc ph6 pv4 ma0 t-heading-6`}
        >
          {title}
        </h5>
      ) : null}
      {children}
    </div>
  )
}

const messages = defineMessages({
  title: {
    defaultMessage: '',
    id: 'admin/editor.seller-selector.head-cell',
  },
  text: {
    defaultMessage: '',
    id: 'admin/editor.seller-selector.head-cell-text',
  },
})

SellerHeadCell.schema = {
  title: messages.title.id,
  type: 'object',
  properties: {
    title: {
      title: messages.text.id,
      type: 'string',
      default: '',
    },
  },
}

export default SellerHeadCell
