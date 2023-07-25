import React from 'react'
import './home.css'
import { NavLink } from 'react-router-dom'
import { ProductsList } from '../../components/products/Products'

export const HomePage = () => {
  return (
    <>
      <div className='home-container'>
        <div className='home-img'>
        </div>
        <div className='products-collection'>
        <NavLink to={'/products'}>
        <span>
            products collection
          </span>
        </NavLink>
         
        </div>
      </div>

<ProductsList/>
    </>
  )
}
