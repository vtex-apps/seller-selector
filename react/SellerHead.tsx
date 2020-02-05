import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import SellerHeadCell from './SellerHeadCell'

const SELLERS_CSS_HANDLES = ['sellersHeader']

const SellerHead: StorefrontFunctionComponent<any> = ({ ...props }) => {
  const handles = useCssHandles(SELLERS_CSS_HANDLES)

  const headTitles = props.headTitles ? props.headTitles : []

  return (
    <div
      className={`${handles.sellersHeader} mt1 justify-between-s dn-s flex-m items-center-s br2 bg-muted-3 hover-bg-muted-3 active-bg-muted-3 c-on-muted-3 hover-c-on-muted-3 active-c-on-muted-3 dib`}
    >
      {headTitles.length > 0 ? (
        headTitles.map((current: any, index: number) => (
          <SellerHeadCell
            key={index}
            {...{
              text: current,
            }}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  )
}

export default SellerHead
