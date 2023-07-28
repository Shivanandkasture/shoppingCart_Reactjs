import { Navigation } from "./components/NavBar/Navigation"
import { Route, Routes } from "react-router"
import { HomePage } from "./pages/Home/HomePage"
import {ProductsPage} from './pages/products/ProductsPage'
import { SingleProductPage } from "./pages/singleProduct/SingleProduct"
import { CartPage } from "./pages/cart/CartPage"

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />

        <Route path="/product/:id" element={<SingleProductPage />} />

        <Route path="/cart" element={<CartPage />} />


      </Routes>
    </>
  )
}

export default App
