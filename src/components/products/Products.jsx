import './products.css'
import { products } from '../../productlist'
import { ProductList } from '../productsList/ProductList'
export const ProductsList = () => {
  return (
    <>

      <div className='product-list-conatiner'>
        <div className='title'>
          <h2>unbelievable</h2>
        </div>
        <div className='sub-title'>
          <h2>SPEED. COMFORT.</h2>
        </div>

        <div className='product-list'>


          {
            products.map((image) => {
              return <ProductList image={image.image} />
            })
          }
        </div>
      </div>

    </>


  )
}
