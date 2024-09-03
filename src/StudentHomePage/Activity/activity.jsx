import React from 'react'
import "./activity.css"
import down from "/Font/downArr.svg"
import inc from "/Font/strArr.svg"
function activity() {
  return (
    <div className="activity">
      <div className="internalBox">
        <div className="hours">
          <h4>Hours Activity</h4>
          <div className="duration">
            <p>Weekly</p>
            <img src={down} alt="" />
          </div>
        </div>
        <div className="status">
          <div className="angArr">
            <img src={inc} alt="" />
          </div>
          <p className='per'>+3%</p>
          <p>Increase Than Last Week</p>
        </div>
        <div className="para">
          <div className="time">
            <p>8h</p>
            <p className='dash'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </p>
          </div>
          <div className="time">
            <p>6h</p>
            <p className='dash'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </p>
          </div>
          <div className="time">
            <p>4h</p>
            <p className='dash'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </p>
          </div>
          <div className="time">
            <p>2h</p>
            <p className='dash'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </p>
          </div>
          <div className="time">
            <p>1h</p>
            <p className='dash'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </p>
          </div>
        </div>
        <div className="days">
          <div className="inp">
            <div className="day f"></div>
            <p>Mo</p>
          </div>
          <div className="inp">
            <div className="day s"></div>
            <p>Tu</p>
          </div>
          <div className="inp">
            <div className="day t"></div>
            <p>We</p>
          </div>
          <div className="inp">
            <div className="day fo"></div>
            <p>Th</p>
          </div>
          <div className="inp">
            <div className="day fi"></div>
            <p>Fr</p>
          </div>
          <div className="inp">
            <div className="day si"></div>
            <p>Sa</p>
          </div>
          <div className="inp">
            <div className="day se"></div>
            <p>Su</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default activity