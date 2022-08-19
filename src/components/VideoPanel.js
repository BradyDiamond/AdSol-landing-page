import React from 'react'
import './VideoPanel.css'
import Form from './Form';

function VideoPanel() {
  return (
    <>
    <div  className ="vid">
      <video className='video-bg' autoPlay loop muted reversed> 
        <source src="https://assets.mixkit.co/videos/preview/mixkit-black-and-white-ink-underwater-487-large.mp4" type="video/mp4" /> 
      </video>
      <div className='video-fg'>
        <ul className="city-names">
          <li>London</li>
          <li>\\\\\\\</li>
          <li>Los  Angles</li>
          <li>Portland</li>
          <li>New Brady</li>
         
        </ul>
     
        <ul className="outer-z-text">
          <li>11/11/22</li>
          <li><span className='smaller'>visit us in store or sign up for more details</span></li>
          
        </ul>  
        </div>
      </div>
       <Form />
    </>
  )
}

export default VideoPanel