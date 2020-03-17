import React from 'react'

function handleMediaSourceChange({
  setMediaSource,
}, evt) {
  setMediaSource(evt.target.value)
}

function resetMediaSource({setMediaSource}) {
  setMediaSource(null)
}

export default () => {
  const mediaSources = [
    {value: 'file', label: 'Upload File'},
    {value: 'webcam', label: 'Webcam'},
  ]
  const [mediaSource, setMediaSource] = React.useState(null)
  return {
    mediaSources,
    mediaSource,
    handleMediaSourceChange: handleMediaSourceChange
        .bind(null, {setMediaSource}),
    resetMediaSource: resetMediaSource.bind(null, {setMediaSource}),
  }
}
