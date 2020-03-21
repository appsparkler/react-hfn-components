function handleFileLoaded({setDataURL}, evt) {
  const dataURL = evt.target.result
  setDataURL(dataURL)
}

function handleFileInputChange({
  setDataURL,
}, evt) {
  evt.preventDefault()
  evt.stopPropagation()
  const {files} = evt.target
  const file = files.item(0)
  if (file) {
    const reader = new FileReader()
    reader.addEventListener(
        'load',
        handleFileLoaded.bind(null, {setDataURL}),
    )
    reader.readAsDataURL(file)
  }
}

export default ({setDataURL}) => {
  return {
    handleFileInputChange: handleFileInputChange.bind(null, {
      setDataURL,
    }),
  }
}
