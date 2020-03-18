function handleMediaSourceChange({setMediaSource}, evt) {
  evt.stopPropagation()
  // evt.preventDefault()
  const mediaSource = evt.target.value
  setMediaSource(mediaSource)
}

export default ({setMediaSource, mediaSourceRef}) => {
  return {
    resetMediaSource: () => setMediaSource(null),
    handleMediaSourceChange: handleMediaSourceChange
        .bind(null, {setMediaSource}),
  }
}
