import React from 'react'
import ReactDOM from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { ProductProvider } from './contexts/productsContext.jsx'
import { FilterProvider } from './contexts/filterContext.jsx'
import { CartProvider } from './contexts/cartContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

  <ProductProvider>
    <FilterProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </FilterProvider>
  </ProductProvider>
)
