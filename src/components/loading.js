import React from 'react'
import './components-styles/loading.css'

/*Stylized loading component*/

function Loading(){
  return (
    <>
      <div className = "loading-cell">
        <div className = "loading-indicator">
          <div className = "h2-low-emphasis">
            <h2 className = "loading-text">Loading</h2>
          </div>
          <div className = "icon-system-spinner">
            <div className = "activity-indicator">
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default Loading;
