import { createContext, useEffect, useReducer } from "react";
import { products } from '../products'
import { prodcutReducer } from '../Reducer/prodcutReducer'
import { useContext } from "react";
import axios from 'axios'

let ProductContext = createContext()



let ProductProvider = ({ children }) => {

    const initialValue = {

        All_Products: [],
        singleProduct: {}
    }

    const [state, disptach] = useReducer(prodcutReducer, initialValue)

    const getAllProducts = async () => {


        try {
            // console.log(products)

            // let res = await axios.get('https://fakestoreapi.com/products')

            disptach({ type: 'load the all products', playload: products})

        } catch (error) {

        }
    }

    const getSingleProduct = async (id) => {

        console.log(id)

        try {

            // let product = await axios.get(`https://fakestoreapi.com/products/${id}`)

           let product= products.find((product)=>{
                return product.id == id
            })

            // console.log(product)
            disptach({ type: 'load the single product', playload: product })


        } catch (error) {

        }
    }


    useEffect(() => {
        getAllProducts()
    }, [products])

    return <ProductContext.Provider value={{ ...state, getAllProducts, getSingleProduct }} >
        {children}
    </ProductContext.Provider>
}
const useProductContext = () => {
    return useContext(ProductContext)
}
export { ProductProvider, useProductContext }