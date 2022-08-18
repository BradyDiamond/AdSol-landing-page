import React from 'react'
import './TextPanel.css'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';



function TextPanel() {
  return (
    <div className="main-content">
   
   <p className='product-header-logo'>
      <span classNae="--i:8">
        <MDBBtn className='m2' style={{ backgroundColor: '#3b5998' }} href='#'>
          <MDBIcon className='m2-icon' fab icon='facebook-f' />
        </MDBBtn>
      </span>
      {/* <span className="--i:1">S</span>
      <span className="--i:2">A</span>
      <span className="--i:3">T</span>
      <span className="--i:4">I</span>
      <span className="--i:5">R</span>
      <span className="--i:6">e</span>
      <span className="--i:7">-</span> */}
      
      </p>
   
    </div>
  )
}

export default TextPanel




