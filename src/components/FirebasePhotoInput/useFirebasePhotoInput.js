import React from 'react'

export default ({props}) => {
  const [selectedFile, setSelectedFile] = React.useState(null)
  const [croppie, setCroppie] = React.useState(null)
  const [exceedsMaxBytes, setExceedsMaxBytes] = React.useState(null)
  const [file2Upload, setFile2Upload] = React.useState(null)
  const [isUploading, setIsUploading] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const photoPreviewRef = React.useRef()
  const croppieRef = React.useRef()
  return {
    ...props,

    // REFS
    photoPreviewRef, croppieRef,

    // STATES
    progress, setProgress,
    isUploading, setIsUploading,
    selectedFile, setSelectedFile,
    croppie, setCroppie,
    exceedsMaxBytes, setExceedsMaxBytes,
    file2Upload, setFile2Upload,
  }
}
