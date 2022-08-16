import React from 'react';
import "./SlideShow.css";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.css'
import Form from './Form';



export default function SlideShow() {
  return (
    <MDBCarousel showIndicators showControls fade>
    <MDBCarouselInner className='carousel-in'>
      <MDBCarouselItem className='active'>
      <MDBCarouselCaption className='caption'>
          <Form />
        </MDBCarouselCaption>
        <MDBCarouselElement src='https://images.unsplash.com/photo-1604250165700-adffa4dd11a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='...' />
        
      </MDBCarouselItem>

      <MDBCarouselItem>
      <MDBCarouselCaption className='caption'>
      <Form />
        </MDBCarouselCaption>
        <MDBCarouselElement src='https://images.unsplash.com/photo-1495757450029-09dbedacbc36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80' alt='...' />
        
      </MDBCarouselItem>

      <MDBCarouselItem>
        <MDBCarouselElement src='https://images.unsplash.com/photo-1604250165934-78133c454c24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='...' />
        <MDBCarouselCaption className='caption'>
        <Form />
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem>
        <MDBCarouselElement src='https://images.unsplash.com/photo-1643447727844-1e2e31544237?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='...' />
        <MDBCarouselCaption className='caption'>
        <Form />
        </MDBCarouselCaption>
      </MDBCarouselItem>


    </MDBCarouselInner>
  </MDBCarousel>
  );
}