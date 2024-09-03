import React from 'react'
import  "./check.css"
const check = () => {
  return (
    <>
    <div className="check">
      <div className="youre">
        <h3>Are you a teacher!</h3>
      </div>
    
    <div className="wrap-check-64">
    <label className="switch" for="checkbox">
      <input type="checkbox" id="checkbox" />
      <div className="slider round"></div>
    </label>
  </div>
  
</div>
    </>
    
  )
}

export default check
