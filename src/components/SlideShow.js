import React from 'react';
import "./SlideShow.css"
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

export default function SlideShow() {
  return (
    <div className='slide__wrapper'>
      <MDBCarousel showControls showIndicators>
        <MDBCarouselInner>
          <MDBCarouselItem className='active'>
            <MDBCarouselElement id= "img-1" src='https://mdbootstrap.com/img/new/slides/041.webp' alt='...' />
            <MDBCarouselCaption>
              <h5>First slide label</h5>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement id= "img-2" src='https://mdbootstrap.com/img/new/slides/042.webp' alt='...' />
            <MDBCarouselCaption>
              <h5>Second slide label</h5>              
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement id= "img-3" src='https://mdbootstrap.com/img/new/slides/043.webp' alt='...' />
            <MDBCarouselCaption>
              <h5>Third slide label</h5>              
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
}