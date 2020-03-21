function startVideo({videoRef}) {
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
  setDataURL(dataURL)
}

export default ({videoRef, setDataURL}) => {
  return {
    startVideo: startVideo.bind(null, {videoRef}),
    clickPhoto: clickPhoto.bind(null, {videoRef, setDataURL}),
  }
}
