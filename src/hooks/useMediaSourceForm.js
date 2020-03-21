function handleMediaSourceChange({valueSetter}, evt) {
  evt.stopPropagation()
  evt.preventDefault()
  const mediaSource = evt.target.value
  valueSetter(mediaSource)
}

export default ({valueSetter}) => {
  return {
    revalueSetter: () => valueSetter(null),
    handleMediaSourceChange: handleMediaSourceChange
        .bind(null, {valueSetter}),
  }
}
