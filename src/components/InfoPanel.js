import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function InfoPanel() {
  return (
    <div className='info-panel'>
      <div className="row">
      <div className='col-8'>
        <img src='https://images.unsplash.com/photo-1604250165934-78133c454c24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='...' />
      </div>
      <div className='col-4'>
        <img src='https://images.unsplash.com/photo-1604250165934-78133c454c24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='...' />
      </div>
    </div>
    </div>
  )
}

export default InfoPanel