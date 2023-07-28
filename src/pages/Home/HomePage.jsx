import React from 'react'
import './home.css'
import { NavLink } from 'react-router-dom'
import Fashion from '../../components/fashion/Fashion'
import { HeroSection } from '../../components/heroSection/HeroSection'
import { useProductContext } from '../../contexts/productsContext'

export const HomePage = () => {

  let { All_Products } = useProductContext()


  let clothsProducts = All_Products.filter((product) => {
    // console.log(product)
    return product.category == "men's clothing"
  })
  console.log(clothsProducts)

  return (
    <>
      <div className='home-container'>
        <HeroSection/>

        <div className='product_List'>
        <div className='fashion_title'>
          <h1>Man & Woman Fashion</h1>
        </div>

        <div className='cloths_Section'>

          {
            clothsProducts.map((product) => {
              return <Fashion id={product.id} title={product.title} price={product.price} description={product.description} image={product.image} />

            })
          }
        </div>
        </div>
       

      </div>
    </>
  )
}
