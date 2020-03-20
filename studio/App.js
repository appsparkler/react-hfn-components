import React from 'react'
// import CustomCroppie from './custom-components/FirebaseCroppieWithWebCam/V4'
import WebcamInput from './wip'
import useWebcamInput from './wip/useWebcamInput'
import './styles'

const StudioApp = () => {
  const {videoRef, startVideo, clickPhoto, dataURL} = useWebcamInput()
  return (
    <div className="container mt-5">
      <WebcamInput
        videoRef={videoRef}
        startVideo={startVideo}
        clickPhoto={clickPhoto}
      />
      {dataURL && (
        <div>
          <img className="img-thumbnail rounded-0" src={dataURL} />
        </div>
      )}
    </div>
  )
}

export default StudioApp
