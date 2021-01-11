import React from 'react'
import type { ReactNode } from 'react'
import { useCssHandles } from 'vtex.css-handles'

const SELLERS_CSS_HANDLES = ['sellerHead'] as const

interface Props {
  children: ReactNode
}

function SellerHead({ children }: Props) {
  const handles = useCssHandles(SELLERS_CSS_HANDLES)

  return (
    <div
      className={`${handles.sellerHead} mh7 mt1 justify-between-s dn-s flex-m items-center-s br2 bg-muted-3 hover-bg-muted-3 active-bg-muted-3 c-on-muted-3 hover-c-on-muted-3 active-c-on-muted-3 dib`}
    >
      {children}
    </div>
  )
}

export default SellerHead
