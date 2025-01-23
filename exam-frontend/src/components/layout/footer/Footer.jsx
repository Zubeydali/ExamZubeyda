import React from 'react'
import './Footer.css'

function Footer() {
  return (
  <>
<footer>


<div className="about">
<h3>about</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quae reiciendis distinctio voluptates sed dolorum excepturi iure eaque, aut unde.</p>
<input type="text" />
<button width="40px">send</button>
</div>

<div className="link">

    <h3><b>quick links</b></h3>
 <ul>
     <li>Sell online</li>
     <li>  Features</li>
     <li>Shopping cart</li>
     <li>Store builde</li>

 </ul>
 </div>

 <ul>
   <li>Mobile commerce</li>
   <li>Dropshipping</li>
   <li>Website development</li>
   <li></li>
 </ul>

<ul>
  <li>point of sale</li>
<li>hardware</li>
<li>software</li>
</ul>


<div className="Contact">
  <h3>Contact Info</h3>

  <ul>
    <li><i className="fa-solid fa-location-dot"></i>203 Fake St. Mountain View, San Francisco, California, USA</li>
    <li> <i className="fa-solid fa-phone"></i>+2 392 3929 210</li>
    <li><i className="fa-solid fa-envelope"></i> emailaddress@domain.com</li>
  </ul>


</div>


</footer>

  </>
  )
}

export default Footer