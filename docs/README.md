# VTEX Seller Selector

![exampleLayout](https://user-images.githubusercontent.com/53904010/78715148-595eea00-78f3-11ea-90fa-dc38c37a80d8.png)

Seller Selector enables your visitors to easily see how many sellers your marketplace has for certain products, check their prices
and add then to their cart.

## Configuration:

1. Import the Seller Selector app to your theme's dependencies in the `manifest.json` as shown below:

```json
"dependencies": {
  "vtex.sellerselector": "0.x"
}
```

2. Add the `link-seller` block inside your product page, this will enable a link to the Seller Selector main page, for example:

```json
"flex-layout.col#right-col": {
    "props": {
      "preventVerticalStretch": true,
      "rowGap": 0
    },
    "children": [
      "product-name",
      "link-seller"
      "product-price#product-details",
      "product-separator",
      "flex-layout.row#buy-button",
      "availability-subscriber",
      "shipping-simulator",
      "share#default"
    ]
  },
```
3. The page cointaining all sellers will be displayed automatically, but you can configure the page layout and props for each block.

# Advanced Configuration
According to the Seller Selector composition, it can be highly customizable using it's specific blocks. Currently, its default implementation is as follows:

```json
 {
  "store.sellers": {
    "blocks": [
      "seller-table"
    ]
  },
  "seller-table": {
    "children": [
      "vtex.store-components:product-name",
      "seller-simulate-shipping",
      "seller-head",
      "seller-body"
    ],
    "props": {
      "limitShownShippingInformation": 5
    }
  },
  "seller-head": {
    "children": [
      "seller-head-cell#Seller",
      "seller-head-cell#Price",
      "seller-head-cell#Shipping",
      "seller-head-cell#PriceWithShipping",
      "seller-head-cell#BuyButton"
    ]
  },
  "seller-head-cell#Seller": {
    "props": {
      "title": "Seller"
    }
  },
  "seller-head-cell#Price": {
    "props": {
      "title": "Price"
    }
  },
  "seller-head-cell#Shipping": {
    "props": {
      "title": "Shipping"
    }
  },
  "seller-head-cell#PriceWithShipping": {
    "props": {
      "title": "Price With Shipping"
    }
  },
  "seller-head-cell#BuyButton": {
    "props": {
      "title": "Add To Cart"
    }
  },
  "seller-body": {
    "children": [
      "seller-row"
    ]
  },
  "seller-row": {
    "children": [
      "seller-name",
      "seller-price",
      "seller-shipping",
      "seller-price-with-shipping",
      "seller-add-to-cart"
    ]
  },
  "seller-add-to-cart": {
    "props": {
      "OneClickBuy": true
    }
  }
}
```
# Props Configuration


#### seller-table

| Prop name              | Type      | Description                                                                                                                                                                                                                                     | Default value |
| ---------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `limitShownShippingInformation`       | `Number`  | Max number of shipping options to be shown.                                                                                                                                                                             | `3`         |


#### seller-add-to-cart

| Prop name              | Type      | Description                                                                                                                                                                                                                                     | Default value |
| ---------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `isOneClickBuy`          | `Boolean` | Whether the button button add the product to the cart and stay in the page or not                                                                                                                        | false         |



#### seller-head-cell

| Prop name              | Type      | Description                                                                                                                                                                                                                                     | Default value |
| ---------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `title`     | `String`  | Text to display on each table header cell                                                                                                                



## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles                     |
| ------------------------------- |
| `linkSellerContainer`           |
| `linkSeller`                    |
| `linkSellerText`                |
| `linkSellerNumber`              |
| `sellerBuyContainer`            |
| `sellerList`                    |
| `sellerBodyCell`                |
| `sellerHead`                    |
| `sellerHeadCell`                |
| `sellerHeadText`                |
| `sellerName`                    |
| `sellerPrice`                   |
| `sellerPriceShipping`           |
| `sellerPriceShippingText`       |
| `sellerRow`                     |
| `sellerShipping`                |
| `sellerShippingText`            |
| `sellerRow`                     |
| `simulateShipping`              |
| `simulateShippingSearch`        |
| `simulateShippingSpinner`       |

