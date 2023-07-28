import React from 'react'

export const filterReducer = (state, action) => {
    switch (action.type) {

        case 'load filter products':
            let productsPrice = action.playload.map((product) => {
                return product.price
            })

            let maxPrice = Math.max(...productsPrice);

            return {
                ...state,
                filterProductsData: [...action.playload],
                AllProducts: [...action.playload],
                filters: {
                    ...state.filters,
                    maxPrice, price: maxPrice
                }

            }

        case 'filterValue':


            const { name, value } = action.playload;

            return {
                ...state,

                filters: { ...state.filters, [name]: value }
            }

        case 'filterProducts':



            let { AllProducts } = state;
            let filterProducts = [...AllProducts];


            let { text, category ,price} = state.filters;
            if (text) {
                filterProducts = filterProducts.filter((product) => {
                    return product.title.toLowerCase().includes(text);
                })
            }

            if (category != 'All') {
                filterProducts = filterProducts.filter((product) => {
                    return product.category === category
                })
            }

            if(price){
                filterProducts = filterProducts.filter((product) => {
                    return product.price <= price
                })
            }

            return {
                ...state,
                filterProductsData: filterProducts
            }

        default: return state
    }


}