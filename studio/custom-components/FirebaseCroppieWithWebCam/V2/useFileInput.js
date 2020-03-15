import React from 'react'

function handleFileLoaded({setDataURL, onDataURL}, evt) {
  const dataURL = evt.target.result
  setDataURL(dataURL)
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
        handleFileLoaded.bind(null, {setDataURL, onDataURL}),
    )
    reader.readAsDataURL(file)
  }
}

export default ({onDataURL}) => {
  const [dataURL, setDataURL] = React.useState()
  return {
    dataURL,
    handleChange: handleChange.bind(null, {setDataURL, onDataURL}),
  }
}
