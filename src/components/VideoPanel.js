import React from 'react'
import './VideoPanel.css'

function VideoPanel() {
  return (
    <div  className ="vid">
      <video className='video-bg' autoPlay loop muted> 
        <source src="https://assets.mixkit.co/videos/preview/mixkit-black-and-white-ink-underwater-487-large.mp4" type="video/mp4" /> 
      </video>
    </div>
  )
}

export default VideoPanel