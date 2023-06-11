import React from 'react'
import bannerimage from "../Assets/Rectangle_2.png"

function Banner() {
  return (
    <div>
      <div className="banner">
      <img src={bannerimage} className='bgimg' alt="" />
      <div className="banner_title">
      <h4>Computer Engineering</h4>
      <p>142,423432,Computer Enginnering follow this</p>
      </div>
     
      </div>
      <button className='joingroupmobile'>Join Group</button>
    </div>
  )
}

export default Banner
