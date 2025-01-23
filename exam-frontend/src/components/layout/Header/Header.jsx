import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'

function Header() {
  return (
    <>

    <div className="header">
        <div className="logo">
            <h3>DEALERS</h3>
        </div>
        <Navbar></Navbar>
        <div className="icon">
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-regular fa-heart"></i>
        <i className="fa-solid fa-basket-shopping"></i>
        </div>
    </div>
    </>
  )
}

export default Header