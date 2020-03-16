function handleMediaSourceChange({
  setMediaSource, onMediaSourceChange,
}, evt) {
  const mediaSource = evt.target.value
  onMediaSourceChange(mediaSource)
  evt.stopPropagation()
}

export default ({onMediaSourceChange}) => {
  return {
    handleMediaSourceChange: handleMediaSourceChange
        .bind(null, {onMediaSourceChange}),
  }
}
