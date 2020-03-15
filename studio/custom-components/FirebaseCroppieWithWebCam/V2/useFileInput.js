function handleFileLoaded({onDataURL}, evt) {
  const dataURL = evt.target.result
  onDataURL(dataURL)
}

function handleChange({
  setDataURL, onDataURL,
}, evt) {
  evt.preventDefault()
  evt.stopPropagation()
  const {files} = evt.target
  const file = files.item(0)
  if (file) {
    const reader = new FileReader()
    reader.addEventListener(
        'load',
        handleFileLoaded.bind(null, {onDataURL}),
    )
    reader.readAsDataURL(file)
  }
}

export default ({onDataURL}) => {
  return {
    handleChange: handleChange.bind(null, {onDataURL}),
  }
}
