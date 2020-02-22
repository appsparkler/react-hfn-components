import React from 'react'

export default ({props}) => {
  debugger
  const [selectedFile, setSelectedFile] = React.useState(null)
  // const [croppie, setCroppie] = React.useState(null)
  // const croppieRef = React.createRef()
  // const imgPreviewRef = React.createRef()
  return {
    ...props,

    // STATES
    selectedFile, setSelectedFile,
  }
}
