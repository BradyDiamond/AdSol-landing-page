
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
      <MDBInput className='mb-4' type='email' id='form5Example2' label='Email address' />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form5Example3'
        label='I have read and agree to the terms'
        defaultChecked
      />

      <MDBBtn type='submit' block>
        Subscribe
      </MDBBtn>
    </form>
  );
}