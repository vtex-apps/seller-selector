import React from 'react'
import SellerSelectorHead from './SellerSelectorHead'

const SellerSelectorTable: StorefrontFunctionComponent<any> = ({ slug }) => {
  return (
    <div key={slug}>
      <SellerSelectorHead></SellerSelectorHead>
    </div>
  )
}

export default SellerSelectorTable
