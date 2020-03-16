import React from 'react'
function handleMediaSourceChange({
  setMediaSource,
}, mediaSource) {
  setMediaSource(mediaSource)
  // setUploaded(false)
  // setDataURL(null)
  // setCroppedDataURL(null)
}

export default () => {
  const mediaSources = [
    {value: 'file', label: 'Upload File'},
    {value: 'webcam', label: 'Webcam'},
  ]
  const [mediaSource, setMediaSource] = React.useState(null)
  return {
    // properties
    mediaSources,
    handleMediaSourceChange: handleMediaSourceChange
        .bind(null, {setMediaSource}),
    mediaSource,
  }
}
