import React from 'react'
import useFileFromStorageRef from './useFileFromStorageRef'
import useMediaSourceForm from './useMediaSourceForm'
import useFileInput from './useFileInput'

function componentDidMount({verifyFile}) {
  verifyFile()
}

export default ({storageRef, croppieConfig}) => {
  const [file, setFile] = React.useState(null)
  const [isVerifying, setIsVerifying] = React.useState(false)
  const [mediaSource, setMediaSource] = React.useState(null)
  const [dataURL, setDataURL] = React.useState(null)
  //
  const {verifyFile} = useFileFromStorageRef({
    setFile, setIsVerifying, storageRef,
  })
  const {resetMediaSource, handleMediaSourceChange} = useMediaSourceForm({
    setMediaSource,
  })
  const {handleFileInputChange} = useFileInput({setDataURL})
  //
  React.useEffect(componentDidMount.bind(null, {
    verifyFile,
  }), [])
  return {
    file,
    isVerifying,
    mediaSource,
    handleMediaSourceChange,
    handleFileInputChange,
  }
}
