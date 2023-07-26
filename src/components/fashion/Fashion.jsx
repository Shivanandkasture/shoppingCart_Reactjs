import React from 'react'
import './fashion.css'
import { NavLink } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import dress from '../../images/dress-shirt-img.png'

const Fashion = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <>
            <section className='fashion'>
                <div className='fashion_container'>

                    <div className='fashion_title'>
                        <h1>Man & Woman Fashion</h1>
                    </div>

                    <div className='fashion_products'>
                    {/* <Carousel responsive={responsive}  autoPlay={true} infinite={true} autoPlaySpeed={3000}> */}
                        <div className='fashion_cart'>
                            <div className='product_containt'>
                                <h1>Man T-Shirt</h1>
                                <p>Price Rs 30.</p>
                            </div>
                            <div className='fashion_img'>
                                <img src={dress} width={284} height={364} />
                            </div>

                            <div className='more_details'>
                                <div className='view-btn'>
                                    <NavLink to={'/products'}>view details</NavLink>
                                </div>
                            </div>
                        </div>

                        <div className='fashion_cart'>
                            <div className='product_containt'>
                                <h1>Man T-Shirt</h1>
                                <p>Price Rs 30.</p>
                            </div>
                            <div className='fashion_img'>
                                <img src={dress} width={284} height={364} />
                            </div>

                            <div className='more_details'>
                                <div className='view-btn'>
                                    <NavLink to={'/products'}>view details</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className='fashion_cart'>
                            <div className='product_containt'>
                                <h1>Man T-Shirt</h1>
                                <p>Price Rs 30.</p>
                            </div>
                            <div className='fashion_img'>
                                <img src={dress} width={284} height={364} />
                            </div>

                            <div className='more_details'>
                                <div className='view-btn'>
                                    <NavLink to={'/products'}>view details</NavLink>
                                </div>
                            </div>
                        </div>
                        {/* </Carousel> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Fashion