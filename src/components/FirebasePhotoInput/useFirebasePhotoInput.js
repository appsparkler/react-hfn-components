import React from 'react'

export default ({props}) => {
  debugger
  const [selectedFile, setSelectedFile] = React.useState(null)
  // const [croppie, setCroppie] = React.useState(null)
  // const croppieRef = React.createRef()
  // const imgPreviewRef = React.createRef()

  const photoPreviewRef = React.useRef()
  const croppieRef = React.useRef()
  return {
    ...props,
    photoPreviewRef, croppieRef,
    // STATES
    selectedFile, setSelectedFile,
  }
}
