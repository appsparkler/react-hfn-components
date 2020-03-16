import React from 'react'

function handleUploadButtonClick() {

}

function handleMediaSourceChange({
  setUploaded, setMediaSource, setDataURL, setCroppedDataURL,
}, mediaSource) {
  setMediaSource(mediaSource)
  setUploaded(false)
  setDataURL(null)
  setCroppedDataURL(null)
}

export default () => {
  const [dataURL, setDataURL] = React.useState(null)
  const [croppedDataURL, setCroppedDataURL] = React.useState(null)
  const [progress, setProgress] = React.useState(0)
  const [uploaded, setUploaded] = React.useState(false)
  const [mediaSource, setMediaSource] = React.useState(null)
  return {
    dataURL, setDataURL,
    croppedDataURL, setCroppedDataURL,
    progress, setProgress,
    uploaded, setUploaded,
    mediaSource,
    handleUploadButtonClick: handleUploadButtonClick.bind(null, {
      setUploaded,
    }),
    handleMediaSourceChange: handleMediaSourceChange.bind(null, {
      setUploaded,
      setMediaSource,
      setDataURL,
      setCroppedDataURL,
    }),
  }
}
