import React from 'react'
import bottle from "./../img/chanel-bottle.png";

function Info() {
  return (
    <>
     <p className='product-header-text'>
      <span className="--i:1">A</span>
      <span className="--i:2">R</span>
      <span className="--i:3">M</span>
      <span className="--i:4">A</span>
      <span className="--i:5">N</span>
      <span className="--i:6">I</span>
      <span className="--i:7">g</span>
      <span classNae="--i:8">.</span>
      </p>
    <div className='info-text'>
      <img  src={bottle}></img>
    </div>
    </>
  )
}

export default Info