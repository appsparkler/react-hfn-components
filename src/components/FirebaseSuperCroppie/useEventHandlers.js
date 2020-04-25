import convertFileToDataURI from '@react-hfn-utils/convertFileToDataURI'

function handleFileLoad({state}, evt) {
  state.setDataURI(evt.target.result)
  state.setSelectedPivotKey('croppie')
}

function handleFileInputChange({state}, evt) {
  const file = evt.target.files[0]
  convertFileToDataURI(
      file,
      handleFileLoad.bind(null, {state}),
  )
}

export default ({state}) => {
  return {
    onFileInputChange: handleFileInputChange
        .bind(null, {state}),
  }
}
