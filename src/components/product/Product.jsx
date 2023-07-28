import './product.css'
import { NavLink, useParams } from 'react-router-dom'
export const Product = (props) => {
    let { title, id, image, price } = props

    // let {id}=useParams()
    return (
        <section className='product'>
            <NavLink to={`/product/${id}`}>
                <div className='fashion_cart2'>
                    <div className='product_containt2'>
                        <h1>{title}</h1>
                        <p>Price Rs {price}.</p>
                    </div>
                    <div className='fashion_img2'>
                        <img src={image} width={260} height={260} />
                    </div>

                    <div className='more_details2'>
                        <div className='view-btn2'>
                            <NavLink to={`/product/${id}`}>view details</NavLink>
                        </div>
                    </div>
                </div>
            </NavLink>
        </section>
    )
}
