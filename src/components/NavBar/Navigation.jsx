import React, { useState } from 'react'
import logo from '../../images/online-shopping.png'
import menuIcon from '../../images/toggle-icon.png'
import downArrowIcon from '../../images/drop-down-arrow.png'
import upArrowIcon from '../../images/arrow-up.png'
import searchIcon from '../../images/search.png'
import cartIcon from '../../images/carts.png'
import loginIcon from '../../images/user.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import './navbar.css'

import { NavLink } from 'react-router-dom'
export const Navigation = () => {

  const [background, setBackground] = useState(false)
  const [menu, setMenu] = useState(false)


  const changeBackground = ()=>{
    if(window.scrollY>=60){
      setBackground(true)
    }
    else{
      setBackground(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>

      <header className='header'>

        <div className={background?'container active':'container'}>
          <div className='logo'>
          <NavLink to={'/'}>
            <img src={logo} width={40} height={40} />
          </NavLink>
          </div>

          <nav className={menu?'nav-links active-nav':'nav-links'}>
            <ul onClick={()=>setMenu(!menu)}>
              <li>
                <NavLink to={'/'}>
                  home
                </NavLink>
              </li>
              <li>
                <NavLink to={'/products'}>
                  products
                </NavLink>
              </li>
              <li>
                <NavLink to={'/cart'}>
                <img src={cartIcon} width={25} height={25}/>
                </NavLink>
              </li>

              <li>
                <NavLink to={'/login'}>
                  login
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className='menu' style={{backgroundColor:'black'}} onClick={()=>setMenu(!menu)}>
            <img src={menuIcon} width={30} height={30} />
          </div>
        </div>
       


      </header>
    </>
  )
}


{/* <div className='header_section_top'>
<div className='custom_menu'>
  <ul>
    <li>best sellers</li>
    <li>gift ideas</li>
    <li>new releases</li>
    <li>totay's deals</li>
    <li>customer service</li>
  </ul>
</div>
</div>
</div>

<div className='logo'>
<div className='logo_container'>
<img src={logo} width={70} height={70} />
</div>
</div>

<div className='header_section'>
<div className='containt_container'>
<div className='containt_main'>

  <div className='menu-icon'>
    <img src={menuIcon} width={38} height={38} />
  </div>
  <div className='category_dropdown'>
    <button type='button' className='dropdown'>
      <span>all category</span>
      <img src={downArrowIcon} width={12} height={12} />

    </button>
  </div>
  <div className='search'>
    <input type='text' />
    <button type='button'>
      <img src={searchIcon} width={16} height={16} />
    </button>
  </div>

<div className='header_box'>
<div className='cart'>
    <img src={cartIcon} width={18} height={18}/>
    <span>cart</span>
  </div>
  <div className='login'>
    <img src={loginIcon} width={18} height={18}/>
    <span>cart</span>
  </div>
</div>

 
  
</div>
</div> */}