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




export default function SlideShow() {
  return (
    <MDBCarousel className='MDB-car' showIndicators showControls fade>
    <MDBCarouselInner className='carousel-in'>

      <MDBCarouselItem className='active'>
      <MDBCarouselCaption className='caption'>
        </MDBCarouselCaption>
        
        <MDBCarouselElement src='https://images.pexels.com/photos/1386454/pexels-photo-1386454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='...' />
        
      </MDBCarouselItem>

      <MDBCarouselItem>
      <MDBCarouselCaption className='caption'> 
      <p></p>   
        </MDBCarouselCaption>
        <MDBCarouselElement src='https://images.pexels.com/photos/594421/pexels-photo-594421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='...' />
        
      </MDBCarouselItem>

      <MDBCarouselItem>
        <MDBCarouselElement src='https://images.pexels.com/photos/131616/pexels-photo-131616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='...' />
        <MDBCarouselCaption className='caption'>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem>
        <MDBCarouselElement src='https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='...' />
        <MDBCarouselCaption className='caption'>

        </MDBCarouselCaption>
      </MDBCarouselItem>


    </MDBCarouselInner>
  </MDBCarousel>
  );
}