import React from 'react'
import './Banner.css'
function Banner() {
  return (
  <div className="banner">
      <div className="banner-text">
          <h1><b>MADEWELL</b></h1>
          <p>Summer Collection</p>
          <p>1,499  <del>1,999</del></p>

          <div className="banner-btn">
          <button className='btn1'>SHOP NOW</button>
          <button className='btn2'>SHOP NOW</button>
      </div>
      </div>
     

      <div className="banner-img"><img src="/src/assets/media/person_transparent.png.webp" alt="" /></div>
  </div>
  )
}

export default Banner