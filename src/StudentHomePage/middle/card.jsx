import React from 'react'
import "./card.css"
import banner from "../../../public/Font/banner.jpeg"
const card = () => {
  // const completionPercentage = 86;
  return (
    <div className='cards'>
      <div className="imgSec">
      <img src={banner} alt="" />
      <p>SMM Expert</p>
      </div>
      <div className="record">
      <div className="bar"></div>
      <div className="completion">
      <p>Course Completed</p>
      <p>86%</p>
      </div>
      </div>
      
    </div>
  )
}

export default card
