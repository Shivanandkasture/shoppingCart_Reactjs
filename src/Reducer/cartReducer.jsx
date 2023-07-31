import React from 'react'

export default function cartReducer(state, action) {


  switch (action.type) {

    case 'AddToCart':

      const { singleProduct, quantity } = action.playload

      const { id, title, image, description, ratig, category, price } = singleProduct

      console.log(state.cart)

      let isExitsingProduct = state.cart.find((product) => {
        return product.id === id
      })

      console.log(state)
      if (isExitsingProduct) {

        let updateCart = state.cart.map((product) => {

          if (product.id == isExitsingProduct.id) {
            product.quantity = product.quantity + quantity

            return {
              ...product, quantity: product.quantity
            }
          }
          else {
            return product
          }
        })

        return {
          ...state, cart: updateCart, isAdded: true
        }

      }
      else {
        const cartData = {
          id, title, image, category, quantity, price
        }


        return {
          ...state, cart: [...state.cart, cartData], isAdded: true
        }
      }


    case 'decrement Quantity':
      let items = state.cart.filter((product) => {
        if (product.id == action.playload) {

          return product.quantity <= 1 ? product.quantity = 1 : product.quantity -= 1
        } else {
          return product
        }

      })
      return {
        ...state, cart: items
      }

    case 'increment Quantity':
      let updateData = state.cart.filter((product) => {
        if (product.id == action.playload) {
          return product.quantity = product.quantity + 1
        }
        else {
          return product
        }
      })
      return {
        ...state, cart: updateData
      }

    case "Grand Total":
      const totalPrice = state.cart.reduce((initialValue, product) => {
        let { price, quantity } = product;
        initialValue = initialValue + price * quantity
        return initialValue
      }, 0)
console.log(totalPrice)
      return {
        ...state,
        totalPrice
      }
    case 'remove Product':



      let products = state.cart.filter((product) => {
        return product.id != action.playload
      })
      console.log(products)

      return {
        ...state, cart: products
      }

    default: return state
  }

}
