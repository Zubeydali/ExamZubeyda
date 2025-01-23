import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
   <>
  <ul>
<Link to="/"><li></li></Link>
<Link>Collection</Link>
<Link>Shop</Link>
<Link>Catalogs</Link>
<Link>Contact</Link>


  </ul>
   
   
   </>
  )
}

export default Navbar