import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import cartReducer from "../Reducer/cartReducer";
import { useEffect } from "react";
import { json } from "react-router";

const CartContext = createContext()

const CartProvider = ({ children }) => {



const getCart = ()=>{

    let data= localStorage.getItem('cart')


    if(JSON.parse(data)===null) {
        return []
    }
    else{
        return JSON.parse(data)
    }
}




    const initialState = {

        cart: getCart()

    }
    const [state, disptach] = useReducer(cartReducer, initialState)



    const AddToCart = ({ singleProduct, quantity }) => {

        disptach({ type: 'AddToCart', playload: { singleProduct, quantity} })
    }

    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(state.cart))

    },[state.cart])

    return <CartContext.Provider value={{...state, AddToCart}}>
        {children}
    </CartContext.Provider>

}

const useCartContext = () => {
    return useContext(CartContext)
}

export { CartProvider,useCartContext }