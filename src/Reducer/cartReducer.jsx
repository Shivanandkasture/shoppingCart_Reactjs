import React from 'react'

export default function cartReducer(state, action) {


  switch (action.type) {

    case 'AddToCart':

      const { singleProduct, quantity } = action.playload

      const { id, title, image, description, ratig, category } = singleProduct

      const cartData = {
        id, title, image, category, quantity
      }


      return {
        ...state, cart: [...state.cart, cartData]
      }

    default: return state
  }

}
