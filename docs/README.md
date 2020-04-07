# WORK IN PROGRESS

=� =� =�
=� Don't fork this project. Use, [contribute](https://github.com/vtex-apps/awesome-io#contributing), or open issues through [Store Discussion](https://github.com/vtex-apps/store-discussion).

# VTEX Seller Selector
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
 "store.sellers": {
    "blocks": ["seller-table"]
  },
  "flex-layout.row#productInfo": {
    "children": ["flex-layout.col#infoRight", "flex-layout.col#infoLeft"],
    "props": {
      "blockClass": "sellersFlex"
    }
  },

  "seller-table": {
    "children": ["seller-simulate-shipping", "seller-head", "seller-body"]
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
    "children": ["seller-row"]
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
  },
  "flex-layout.col#infoRight": {
    "children": ["product-images"],
    "props": {
      "blockClass": "leftSellers",
      "width": "15%"
    }
  },
  "flex-layout.col#infoLeft": {
    "children": [
      "vtex.store-components:product-name",
      "product-description#sellers"
    ],
    "props": {
      "blockClass": "rightSellers",
      "width": "85%"
    }
  },
  "product-description#sellers": {
    "props": {
      "collapseContent": false,
      "blockClass": "descriptionSellers"
    }
  }
```


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

## Preview:

## Usage:

## Installation:

### To Do:

- Write Documentation

**Upcoming documentation:**

 - [Added new CSS Handles](https://github.com/vtex-apps/seller-selector/pull/1)