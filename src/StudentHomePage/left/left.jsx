import React from 'react'
import home from "../../../public/Home/home.svg"
import "./left.css"
const left = () => {
  return (
    <div className="features">
      <div className="box">
        <img src={home} alt="" />
        <p>Dashboard</p>
      </div>
    </div>
  )
}

export default left
