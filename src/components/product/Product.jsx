import './product.css'
import { NavLink, useParams } from 'react-router-dom'
import img from '../../images/sports-shoe1-600x600.jpg'
export const Product = (props) => {
    let { title, id, image, price } = props

    // let {id}=useParams()
    return (
        <section className='product'>
            <NavLink to={`/product/${id}`}>
                <div className='product_text_container'>
                    <div className='product_text'>
                        <h1>{title}</h1>
                        <p>Price Rs {price}.</p>
                    </div>
                    <div className='product_image'>
                        <img src={image} />
                    </div>
                </div>
            </NavLink>
        </section>
    )
}
