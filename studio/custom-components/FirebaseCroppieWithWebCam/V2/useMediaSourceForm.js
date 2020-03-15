import React from 'react'

function handleMediaSourceChange({setMediaSource}, evt) {
  const mediaSource = evt.target.value
  setMediaSource(mediaSource)
  evt.stopPropagation()
}

export default () => {
  const [mediaSource, setMediaSource] = React.useState(null)
  return {
    handleMediaSourceChange: handleMediaSourceChange
        .bind(null, {setMediaSource}),
    mediaSource,
  }
}
