import React from 'react'
import './components-styles/loading-indicator.css'

/*Loading indicator component*/

function LoadingIndicator(){
  return (
    <>
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </>
  );

}

export default LoadingIndicator;
