import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './Header/Header'


function Layout() {
  return (
<>
<Header></Header>
<Outlet></Outlet>
<Footer></Footer>

</>
  )
}

export default Layout