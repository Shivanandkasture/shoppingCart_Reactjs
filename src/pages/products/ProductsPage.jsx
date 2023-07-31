import './products.css'
import { useProductContext } from '../../contexts/productsContext'
import { Product } from '../../components/product/Product'
import { FilterSection } from '../../components/filterSection/FilterSection';
import { NavLink } from 'react-router-dom';
import { userFilterContext } from '../../contexts/filterContext';

export const ProductsPage = () => {

  const { All_Products } = useProductContext();
  const {filterProductsData}=userFilterContext()

  return (
    <>
      <section className='products'>
        <div className='prodcuts_container'>

          <div className='filter_section'>
          {/* <h1>Filter</h1> */}
            <FilterSection />
          </div>

          <div className='prodcuts_listing'>

            <div className='page_navigation'>
              <NavLink to={'/'}>Home</NavLink> &nbsp;/&nbsp;Products
              <h1>Products</h1>

            </div>

            <div className='productsTitle'>
            </div>



            <div className='prodcuts_section'>

              {
                filterProductsData.length===0?<h1 style={{textAlign:'center'}}>no such product</h1>:filterProductsData.map((product) => {
                return <Product id={product.id} key={product.id} title={product.title} price={product.price} description={product.description} image={product.image} />})
              }
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
