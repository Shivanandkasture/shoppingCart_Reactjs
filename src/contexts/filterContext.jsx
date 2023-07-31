import { useEffect, useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { filterReducer } from "../Reducer/filterReducer";
import { useProductContext } from "./productsContext";


const FilterContext = createContext();



const FilterProvider = ({ children }) => {

    const { All_Products } = useProductContext();


    const intialvalue = {
        filterProductsData: [],
        filters: {
            category: 'All',
            text: '',
            price:0,
            maxPrice:0,
            minPrice:0
        },

        AllProducts: []

    }

    const [state, disptach] = useReducer(filterReducer, intialvalue)

    const filtervalue = (e) => {
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value
        

        disptach({ type: 'filterValue', playload: { name, value } })

    }








    useEffect(() => {
        disptach({ type: 'filterProducts' })

    }, [state.filters])
    useEffect(() => {
        disptach({ type: 'load filter products', playload: All_Products })

    }, [All_Products])

    return <FilterContext.Provider value={{ ...state, filtervalue }}>
        {children}
    </FilterContext.Provider>
}

const userFilterContext = () => {
    return useContext(FilterContext)
}

export { FilterProvider, userFilterContext }