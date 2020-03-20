import React from 'react'
// import CustomCroppie from './custom-components/FirebaseCroppieWithWebCam/V4'
import WebcamInput from './wip'
import useWebcamInput from './wip/useWebcamInput'
import './styles'

const StudioApp = () => {
  const {videoRef} = useWebcamInput()
  return (
    <div className="container mt-5">
      <WebcamInput videoRef={videoRef} />
    </div>
  )
}

export default StudioApp
