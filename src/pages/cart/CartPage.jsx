import './cart.css'
import { useCartContext } from '../../contexts/cartContext'
import { CartProduct } from '../../components/cartProduct/CartProduct'
export const CartPage = () => {

  const { AddToCart, cart } = useCartContext()

  console.log(cart)

  return (
    <section className='cart_section'>

      <div className='cart_container'>

        <div className='cart_box'>
          <div className='cart_header'>
            <h1>shopping cart</h1>
          </div>
          <div className='cart'>

            <div className='cart-item'>

              {
                cart.map((product) => {
                  return <CartProduct id={product.id} key={product.id} category={product.category} title={product.title} image={product.image} quantity={product.quantity} price={product.price} />
                })
              }
            </div>

            <div className='grand-total'>
              <span>grand total</span>
              <span>122</span>
            </div>

          </div>



        </div>
      </div>

    </section>
  )
}
