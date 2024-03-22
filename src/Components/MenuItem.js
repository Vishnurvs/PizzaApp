import React from 'react'
import { useNavigate } from 'react-router-dom'

function MenuItem({image,name,price}) {

  const navigate= useNavigate();

  const Information=()=>{
    navigate("/about");
    
  }

  return (
    <div className='menuItem'>
      <div  style={{ backgroundImage: `url(${image})` }} onClick={Information}></div>
      <h1>{name}</h1>
      <p>₹ {price}</p>
    </div>
  )
}

export default MenuItem
