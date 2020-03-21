import React from 'react'
import useFileInput from '@react-hfn-hooks/useFileInput'
import useFileUploadButton from '@react-hfn-hooks/useFileUploadButton'
import useFileFromStorageRef from '@react-hfn-hooks/useFileFromStorageRef'

function componentDidMount({verifyFile}) {
  verifyFile()
}

function uploadedDidChange({verifyFile, uploaded}) {
  if (uploaded) verifyFile()
}

export default ({storageRef}) => {
  const [firebaseFile, setFirebaseFile] = React.useState(null)
  const [file, setFile] = React.useState(null)
  const [isUploading, setIsUploading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [uploaded, setUploaded] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const [isVerifying, setIsVerifying] = React.useState(0)
  const {handleFileInputChange} = useFileInput({setFile})
  const {handleUploadButtonClick} = useFileUploadButton({
    storageRef, file,
    setIsUploading, setProgress, setUploaded, setError,
  })
  const {verifyFile} = useFileFromStorageRef({
    storageRef,
    setFile: setFirebaseFile,
    setIsVerifying,
  })
  //
  React.useEffect(componentDidMount.bind(null, {
    verifyFile,
  }), [])
  React.useEffect(uploadedDidChange.bind(null, {
    verifyFile, uploaded,
  }), [uploaded])
  //
  return {
    handleFileInputChange,
    isUploading,
    error,
    uploaded,
    progress,
    handleUploadButtonClick,
    isVerifying,
    firebaseFile,
  }
}
