import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "./InfoPanel.css"
import TextPanel from './TextPanel'
import VideoPanel from './VideoPanel'

function InfoPanel() {
  return (
    <div className='info-panel'>
      <div className="row">
        <div className='col-8'>
          <VideoPanel />
        </div>
      
        <div className='col-4'>
         <TextPanel />
        </div>
      </div>
    </div>
  )
}

export default InfoPanel