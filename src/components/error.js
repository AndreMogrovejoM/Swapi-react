import React from 'react'
import './components-styles/error.css'

function Error(){
  return (
    <>
      <div className = "error-cell">
        <div className = "h2-high-emphasis">
          <h2 className = 'error-text'>Failed to Load Data</h2>
        </div>
      </div>
    </>
  );

}

export default Error;
