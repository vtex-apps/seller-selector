import React from 'react'
import SellerSelectorHead from './SellerHead'

const SellerTable: StorefrontFunctionComponent<any> = ({ slug }) => {
  return (
    <div key={slug}>
      <SellerSelectorHead></SellerSelectorHead>
    </div>
  )
}

export default SellerTable
