import React from 'react'
import adapter from 'webrtc-adapter'

function handleSuccess({videoRef}, stream) {
  videoRef.current.srcObject = stream
}

function handleError(err) {
  console.error(err)
}

function startVideo(videoRef) {
  const constraints = {
    audio: false,
    video: true,
  }
  navigator.mediaDevices
      .getUserMedia(constraints)
      .then(handleSuccess.bind(null, {videoRef}))
      .catch(handleError)
}

function componentDidMount({setBrowserDetails, videoRef}) {
  setBrowserDetails(adapter.browserDetails)
  startVideo(videoRef)
}

export default () => {
  const [browserDetails, setBrowserDetails] = React.useState(null)
  //
  const videoRef = React.useRef()
  const canvasRef = React.useRef()
  //
  React.useEffect(componentDidMount.bind(null, {
    setBrowserDetails, videoRef,
  }), [])
  return {
    browserDetails,
    videoRef,
    canvasRef,
  }
}
