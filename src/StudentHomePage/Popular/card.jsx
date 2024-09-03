import React from 'react'
import "./card.css"
import pop from "/Home/pop.png"
import arrow from "/Font/arrow.svg"
const card = () => {
  return (
    <div className="mainBox">
      <div className="internal">
      <div className="info">
      <p>Popular Courses</p>
     <p className='all'>View all</p>
      </div>
      

      <div className="box1">
        <div className="cr">
        <img src={pop} className='popLogo' alt="img" />
        <div className="name">
          <p>UI/UX Design Pro</p>
          <p className='adv'>Adavnced</p>
        </div>
        </div>
        <div className="arr">
          <img src={arrow}  className="arrImg" alt="img" />
        </div>
      </div>
      <div className="box1">
        <div className="cr">
        <img src={pop} className='popLogo' alt="img" />
        <div className="name">
          <p>UI/UX Design Pro</p>
          <p className='adv'>Adavnced</p>
        </div>
        </div>
        <div className="arr">
          <img src={arrow}  className="arrImg" alt="img" />
        </div>
      </div><div className="box1">
        <div className="cr">
        <img src={pop} className='popLogo' alt="img" />
        <div className="name">
          <p>UI/UX Design Pro</p>
          <p className='adv'>Adavnced</p>
        </div>
        </div>
        <div className="arr">
          <img src={arrow}  className="arrImg" alt="img" />
        </div>
      </div><div className="box1">
        <div className="cr">
        <img src={pop} className='popLogo' alt="img" />
        <div className="name">
          <p>UI/UX Design Pro</p>
          <p className='adv'>Adavnced</p>
        </div>
        </div>
        <div className="arr">
          <img src={arrow}  className="arrImg" alt="img" />
        </div>
      </div>
      
      </div>
      
     
    </div>
  )
}

export default card
