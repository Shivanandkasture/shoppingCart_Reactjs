import React from 'react'
import './home.css'
import { NavLink } from 'react-router-dom'
import Fashion from '../../components/fashion/Fashion'

export const HomePage = () => {
  return (
    <>
      <div className='home-container'>
      <Fashion/>
       </div>
    </>
  )
}
