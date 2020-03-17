function handleFileLoaded({setDataURL}, evt) {
  const dataURL = evt.target.result
  setDataURL(dataURL)
}

function handleChange({
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

export default ({dataURL, setDataURL}) => {
  return {
    handleChange: handleChange.bind(null, {setDataURL}),
    dataURL,
  }
}
