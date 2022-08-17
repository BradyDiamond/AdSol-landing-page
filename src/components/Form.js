
import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
  
    <form className='form-input'>
    
      <MDBInput className='mb-4' id='form5Example1' label='Name' />
      <br>
      </br>
      <MDBInput className='mb-4' type='email' id='form5Example2' label='Email address' />


      <MDBBtn type='submit'>
        Subscribe
      </MDBBtn>
      
    </form>
  );
}