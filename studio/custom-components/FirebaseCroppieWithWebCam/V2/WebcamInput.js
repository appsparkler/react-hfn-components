import React from 'react'
import useWebCam from './useWebCam'

const WebCamInput = ({}) => {
  const {
    videoRef,
    dataURL,
    clickPhoto,
  } = useWebCam()
  return (
    <div>
      <div className="img-thumbnail rounded-0">
        <video className="w-100"
          ref={videoRef}
        >
        Video stream not available.
        </video>
      </div>
      <div className="mt-2">
        <button
          className="btn btn-block btn-primary rounded-0"
          type="button"
          onClick={clickPhoto}
        >
          Take photo
        </button>
      </div>
    </div>
  )
}

export default WebCamInput


/* <div className="row">
  <div className="col-6">

  </div>
  {dataURL && (
    <div className="col-6">
      <pre
        className="pre-scrollable"
      >
        <code style={{whiteSpace: 'normal'}}>
          {dataURL}
        </code>
      </pre>
    </div>)}*/
