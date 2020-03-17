/*
  Reference Link: https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Taking_still_photos
*/
import React from 'react'

function startVideoStream({videoRef}) {
  const video = videoRef.current
  navigator
      .mediaDevices
      .getUserMedia({video: true, audio: false})
      .then(function(stream) {
        video.srcObject = stream
        video.play()
      })
      .catch(function(err) {
        console.log('An error occurred: ' + err)
      })
}

function componentDidMount({videoRef}) {
  startVideoStream({videoRef})
}

function clickPhoto({videoRef, setDataURL}, evt) {
  evt.stopPropagation()
  const canvas = document.createElement('canvas')
  const canvasContext = canvas.getContext('2d')
  canvas.width = videoRef.current.videoWidth * 1
  canvas.height = videoRef.current.videoHeight * 1
  canvas.style.display = 'none'
  canvasContext.drawImage(
      videoRef.current, 0, 0,
      canvas.width,
      canvas.height,
  )
  const dataURL = canvas.toDataURL()
  debugger
  setDataURL(dataURL)
}

export default ({dataURL, setDataURL}) => {
  const videoRef = React.useRef()
  React.useEffect(componentDidMount.bind(null,
      {videoRef}), [],
  )
  return {
    videoRef,
    clickPhoto: clickPhoto.bind(null, {videoRef, setDataURL}),
  }
}
