import React from 'react'
import "../App.css"
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';




export default function Footer() {
  return (
    <div className='footer'>
      <div className='icons'>
        <h1>check</h1>

        <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
          <MDBIcon fab icon='instagram' />
        </MDBBtn>
        </div>
    </div>
    
  )
}
