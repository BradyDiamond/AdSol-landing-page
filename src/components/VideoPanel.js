import React from 'react'
import './VideoPanel.css'

function VideoPanel() {
  return (
    <div  className ="vid">
      <video className='video-bg' autoPlay loop muted> 
        <source src="https://assets.mixkit.co/videos/preview/mixkit-black-and-white-ink-underwater-487-large.mp4" type="video/mp4" /> 
      </video>
      <div className='video-fg'>
        <ul className="city-names">
          <li>London</li>
          <li>\\\\\\\</li>
          <li>New York</li>
          <li>Los  Angles</li>
          <li>Portland</li>
        </ul>
     
        <ul className="outer-z-text">
          <li>11/11/22</li>
          <button className='form-btn'>11/11/22</button>
    
        </ul>
        </div>
      </div>
    
  )
}

export default VideoPanel