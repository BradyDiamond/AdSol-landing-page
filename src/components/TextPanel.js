import React from 'react'
import './TextPanel.css'




function TextPanel() {
  return (
    <div className="main-content" id="main-content">
      <div className="titleCont">
        <h1 className="main-title" id="main-title">
       <p>test text</p>
        </h1>
      </div>
      <canvas id="noise" className="noise">
      </canvas>
      <div className="vignette">        
      </div>
    </div>
  )
}

export default TextPanel




