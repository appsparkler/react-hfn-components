function handleFileLoaded({onChange}, evt) {
  const dataURL = evt.target.result
  onChange(dataURL)
}

function handleChange({
  onChange,
}, evt) {
  evt.preventDefault()
  evt.stopPropagation()
  const {files} = evt.target
  const file = files.item(0)
  if (file) {
    const reader = new FileReader()
    reader.addEventListener(
        'load',
        handleFileLoaded.bind(null, {onChange}),
    )
    reader.readAsDataURL(file)
  }
}

export default ({onChange}) => {
  return {
    handleChange: handleChange.bind(null, {onChange}),
  }
}
