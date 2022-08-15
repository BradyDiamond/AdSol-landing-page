import React from 'react'
import "../App.css"
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';




export default function Footer() {
  return (
    <div className='footer'> 
      <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
        <MDBIcon fab icon='facebook-f' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
        <MDBIcon fab icon='twitter' />
      </MDBBtn>
    </div>
  )
}
