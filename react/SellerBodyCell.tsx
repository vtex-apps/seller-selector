import React from 'react'
import type { ReactNode } from 'react'
import { useCssHandles } from 'vtex.css-handles'

const SELLERS_CSS_HANDLES = ['sellerBodyCell'] as const

interface Props {
  children: ReactNode
}

function SellerBodyCell({ children }: Props) {
  const { handles } = useCssHandles(SELLERS_CSS_HANDLES)

  return (
    <div
      className={`${handles.sellerBodyCell} items-center tc w-100-s w-20-m br2 ph6 pv4 ma0 w-100-s w-20-m`}
    >
      {children}
    </div>
  )
}

export default SellerBodyCell
