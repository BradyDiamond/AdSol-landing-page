import React from 'react'
import bottle from "./../img/chanel-bottle.png";

function Info() {
  return (
    <>
     <p className='product-header-text'>
      <span classNae="--i:8">-</span>
      <span className="--i:1">S</span>
      <span className="--i:2">A</span>
      <span className="--i:3">T</span>
      <span className="--i:4">I</span>
      <span className="--i:5">R</span>
      <span className="--i:6">e</span>
      <span className="--i:7">-</span>
      
      </p>
    <div className='info-text'>
      <img  src={bottle}></img>
    </div>
    </>
  )
}

export default Info