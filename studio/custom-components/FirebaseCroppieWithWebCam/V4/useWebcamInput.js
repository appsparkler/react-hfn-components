function startVideo({webcamRef}) {
  const video = webcamRef.current
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

function clickPhoto({webcamRef, setDataURL}, evt) {
  evt.stopPropagation()
  const canvas = document.createElement('canvas')
  const canvasContext = canvas.getContext('2d')
  canvas.width = webcamRef.current.videoWidth * 1
  canvas.height = webcamRef.current.videoHeight * 1
  canvas.style.display = 'none'
  canvasContext.drawImage(
      webcamRef.current, 0, 0,
      canvas.width,
      canvas.height,
  )
  const dataURL = canvas.toDataURL()
  setDataURL(dataURL)
}

export default ({webcamRef, setDataURL}) => {
  return {
    startVideo: startVideo.bind(null, {webcamRef}),
    clickPhoto: clickPhoto.bind(null, {webcamRef, setDataURL}),
  }
}
