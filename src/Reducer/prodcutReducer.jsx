import React from 'react'

export const prodcutReducer = (state, action) => {

    switch (action.type) {

        case 'load the all products':

            return {
                ...state,
                All_Products: action.playload
            }

        case 'load the single product':

        
            return {
                ...state,
                singleProduct: action.playload
            }



        default: return state
    }


}
