import { useEffect, useState } from 'react';
import { useProductContext } from '../../contexts/productsContext'
import './singleproduct.css'
import { useParams } from 'react-router';
import { useCartContext } from '../../contexts/cartContext';
export const SingleProductPage = () => {
  const { getSingleProduct, singleProduct } = useProductContext()
  const { AddToCart ,cart} = useCartContext()

  const [quantity, setQuantity] = useState(1)
  console.log(cart)

  const decrement = () => {

    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)

  }


  const increment = () => {
    setQuantity(quantity + 1)
  }

  let { id } = useParams();
  const { title, price, description, image } = singleProduct;


  useEffect(() => {

    getSingleProduct(id)
  }, [])

  return (
    <>
      <section className='single_product'>

        <div className='single_container'>
          <div className='product_image'>
            <img src={image} width={400} height={400} />
          </div>
          <div className='product_info'>
            <div className='product_title'>
              <h1>{title}</h1>
            </div>
            <div className='prodcut_price'>
              <p>Rs. {price}</p>
            </div>
            <div className='descrption'>
              <p>{description}</p>
            </div>

            <div className='add_to_cart'>
              <div className='quantity_section'>
                <button type='button' onClick={decrement}>-</button>
                <span>{quantity}</span>
                <button type='button' onClick={increment}>+</button>
              </div>

              <div className='addToCart-btn'>
                <button type='button' onClick={() => AddToCart({ singleProduct, quantity })}>Add To Cart</button>
              </div>

            </div>
          </div>
        </div>

      </section>
    </>
  )
}
