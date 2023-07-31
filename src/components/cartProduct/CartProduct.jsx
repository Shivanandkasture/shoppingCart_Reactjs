import { useCartContext } from '../../contexts/cartContext'
import './cartCss.css'
import{CiCircleRemove} from 'react-icons/ci'

export const CartProduct = ({ id, title, image, category, quantity, price }) => {

  const {removeProduct,decrementQuantity,incrementQuantity}=useCartContext()


  return (
    <>
      <div className='cart_info'>
        <div className='item_image'>
          <figure>
            <img src={image}/>
          </figure>
        </div>

        <div className='cart_text'>
          <p className='product_name'>{title}</p>
          <p className='price'>
            <span>Rs.{price}</span>
          </p>
          <div className='quantity-remove'>

            <div className='quantity'>
              <button type='button' onClick={()=>{decrementQuantity(id)}}>-</button>
              <span>{quantity}</span>
              <button type='button' onClick={()=>{incrementQuantity(id)}}>+</button>
            </div>

             <div className='remove'>
              <button type='button' onClick={()=>{removeProduct(id)}}><CiCircleRemove/></button>
            </div> 
          </div>

          {/* <hr/> */}
          <div className='subtotal'>
              <span>subtotal:{quantity*price}</span>
            </div>
        </div>

      </div>
    </>
  )
}
