import React from 'react'

const SellerHeadCell: StorefrontFunctionComponent<any> = ({
  title,
  children,
}) => {
  return (
    <div>
      {title ? (
        <h5 className="items-center tc w-20 ph6 pv4 ma0 t-heading-5">
          {title}
        </h5>
      ) : (
        <></>
      )}
      {children}
    </div>
  )
}

export default SellerHeadCell
