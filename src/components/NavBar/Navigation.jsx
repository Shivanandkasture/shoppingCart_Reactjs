import React from 'react'
import logo from '../..//images/logo@2x-free-img.png'

import './nav.css'
// import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import { NavLink } from 'react-router-dom'
export const Navigation = () => {
  return (
    <>

      <header>

        <div className='header-container'>
          <div className='container'>

            <div className='logo'>
              <img src={logo} width={150} height={40} />
            </div>

            {/* <div className='search-container'>
              <input type='search' placeholder='search products' />
            </div> */}

            <div className='nav-contaienr'>
              <nav className='nav-item'>
                <ul>
                  <li>home</li>
                  <li>my account</li>
                  <li>contact</li>
                </ul>
              </nav>


              <div className='cart'>
                <div className='total-price'>
                  <span>100</span>
                </div>
                <div className='cart-icon'>
                  <span value={7}>cart</span>
                </div>
              </div>
            </div>

          </div>

        </div>


      </header>
    </>
  )
}
