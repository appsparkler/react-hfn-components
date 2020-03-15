import React from 'react'

function handleMediaSourceChange({
  setMediaSource, setDataURL, setCroppedDataURL,
}, evt) {
  const mediaSource = evt.target.value
  setMediaSource(mediaSource)
  setDataURL(null)
  setCroppedDataURL(null)
  evt.stopPropagation()
}

export default ({setDataURL, setCroppedDataURL}) => {
  const [mediaSource, setMediaSource] = React.useState(null)
  return {
    handleMediaSourceChange: handleMediaSourceChange
        .bind(null, {setMediaSource, setDataURL, setCroppedDataURL}),
    mediaSource,
  }
}
