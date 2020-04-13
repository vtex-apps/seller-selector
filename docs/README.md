# Seller Selector

![exampleLayout](https://user-images.githubusercontent.com/53904010/78715148-595eea00-78f3-11ea-90fa-dc38c37a80d8.png)

Seller Selector enables your visitors to easily see how many sellers your marketplace has for certain products, check their prices
and add then to their cart.

## Configuration

1. Add the Seller Selector app to your theme's dependencies in the `manifest.json` as shown below:

```json
"dependencies": {
  "vtex.sellerselector": "0.x"
}
```

2. Add the `link-seller` block, exported by the `vtex.sellerselector` app, inside your product page (`store.product` template). When rendered, the block will create a link to the Seller Selector main page. For example:

```diff
"flex-layout.col#right-col": {
    "props": {
      "preventVerticalStretch": true,
      "rowGap": 0
    },
    "children": [
      "product-name",
+     "link-seller"
      "product-price#product-details",
      "product-separator",
      "flex-layout.row#buy-button",
      "availability-subscriber",
      "shipping-simulator",
      "share#default"
    ]
  },

By declaring the `link-seller` block, a page containing all available sellers will be displayed automatically. However, you can configure the Seller Selector page layout, using props for each one of the blocks used to build it behind the scenes. 


# Advanced Configuration
Behind the scenes, the Seller Selector page uses the following default implementation:

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
    ]
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
  }
}
```
# Props Configuration


### `seller-table` props

| Prop name              | Type      | Description                                                                                                                                                                                                                                     | Default value |
| ---------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `limitShownShippingInformation`       | `number`  | Max number of shipping options to be displayed.                                                                                                                                                                             | `3`         |


### `seller-add-to-cart` props

| Prop name              | Type      | Description                                                                                                                                                                                                                                     | Default value |
| ---------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `isOneClickBuy`          | `boolean` | Defines if users will keep navigating in the same page once the Buy button was clicked on (`true`) or if they will be redirected (`false`)   | `false`         |



### `seller-head-cell` props

| Prop name              | Type      | Description                                                                                                                                                                                                                                     | Default value |
| ---------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `title`     | `string`  | Text displayed on each table header cell. | `undefined`|                                                                                                                 



## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles                     |
| ------------------------------- |
| `linkSellerContainer`           |
| `linkSeller`                    |
| `linkSellerText`                |
| `linkSellerNumber`              |
| `sellerMasterContainer`         |
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
