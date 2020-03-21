function handleFileInputChange({
  setFile,
}, evt) {
  evt.preventDefault()
  evt.stopPropagation()
  const {files} = evt.target
  const file = files.item(0)
  setFile(file)
}

export default ({setFile}) => {
  return {
    handleFileInputChange: handleFileInputChange.bind(null, {
      setFile,
    }),
  }
}
