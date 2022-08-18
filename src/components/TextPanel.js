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
      <button class="pushable">
  <span class="front">
    <img className='fb-logo' src='https://i.pinimg.com/564x/f7/99/20/f79920f4cb34986684e29df42ec0cebe.jpg'></img> 
  </span>
</button>
   
    </div>
  )
}
{/* </p>
      <button class="pushable">
  <span className="front"><img 
</span>
</button>
   
    </div>
  ) */}
export default TextPanel




