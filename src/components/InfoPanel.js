import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "./InfoPanel.css"
import TextPanel from './TextPanel'
import VideoPanel from './VideoPanel'

function InfoPanel() {
  return (
    <div className='info-panel'>
      <div className="row">
        <div className='col-12'>
          <div className='main-content'>
            <VideoPanel />
          </div>
        </div>
      
        {/* <div className='col-12'>
          <div className='main-content'>
         <TextPanel />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default InfoPanel