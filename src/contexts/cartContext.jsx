import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import cartReducer from "../Reducer/cartReducer";
import { useEffect } from "react";
import { json } from "react-router";
import { useProductContext } from "./productsContext";

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const {All_Products}=useProductContext()



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

        cart: getCart(),
        isAdded:false,
        totalPrice:''

    }
    const [state, disptach] = useReducer(cartReducer, initialState)



    const AddToCart = ({ singleProduct, quantity }) => {

        disptach({ type: 'AddToCart', playload: { singleProduct, quantity} })
    }


    const removeProduct = (id)=>{


        disptach({ type: 'remove Product', playload: id })

    }

    const decrementQuantity =(id)=>{

        disptach({ type: 'decrement Quantity', playload: id })


    }

    const incrementQuantity =(id)=>{

        disptach({ type: 'increment Quantity', playload: id })


    }

    

    useEffect(()=>{
        disptach(({type:'Grand Total'}))
        localStorage.setItem('cart',JSON.stringify(state.cart))

    },[state.cart])

    return <CartContext.Provider value={{...state, AddToCart,removeProduct,decrementQuantity, incrementQuantity}}>
        {children}
    </CartContext.Provider>

}

const useCartContext = () => {
    return useContext(CartContext)
}

export { CartProvider,useCartContext }