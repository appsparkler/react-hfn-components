import React from 'react'
import useFileInput from '@react-hfn-hooks/useFileInput'
import useFileUploadButton from '@react-hfn-hooks/useFileUploadButton'

export default ({storageRef}) => {
  const [file, setFile] = React.useState(null)
  const [isUploading, setIsUploading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [uploaded, setUploaded] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const {handleFileInputChange} = useFileInput({setFile})
  const {handleUploadButtonClick} = useFileUploadButton({
    storageRef, file,
    setIsUploading, setProgress, setUploaded, setError,
  })
  return {
    handleFileInputChange,
    isUploading,
    error,
    uploaded,
    progress,
    handleUploadButtonClick,
  }
}
