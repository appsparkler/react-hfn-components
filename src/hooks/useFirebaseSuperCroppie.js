import React from 'react'
import useFileFromStorageRef from './useFileFromStorageRef'
import useMediaSourceForm from './useMediaSourceForm'
import useFileInput from './useFileInput'
import useCroppie from './useCroppie'
import useUploadButton from './useUploadButton'
import useWebcamInput from './useWebcamInput'

function componentDidMount({verifyFile}) {
  verifyFile()
}

function croppieDidChange({croppie, dataURL}) {
  if (!dataURL) return
  croppie.bind({
    url: dataURL,
  })
}

function dataURLDidChange({setupCroppie, croppie, dataURL}) {
  if (!croppie && dataURL) {
    setupCroppie()
  } else if (dataURL && croppie) {
    croppie.bind({
      url: dataURL,
    })
  }
}

function uploadedDidChange({
  uploaded,
  setCroppedDataURL, setDataURL,
  setMediaSource, setProgress, setUploaded,
  verifyFile,
}) {
  if (!uploaded) return
  setProgress(0)
  setUploaded(false)
  setCroppedDataURL(null)
  setDataURL(null)
  setMediaSource(null)
  verifyFile()
}

function mediaSourceDidChange({
  mediaSource, setDataURL, setCroppie, setCroppedDataURL,
  startVideo,
}) {
  if (!mediaSource) {
    setDataURL(null)
    setCroppie(null)
    setCroppedDataURL(null)
  } else if (mediaSource === 'webcam') {
    startVideo()
  }
}

function fileDidChange({file, setImgIsLoading}) {
  if (file && file.downloadURL) return setImgIsLoading(true)
  setImgIsLoading(false)
}

function handleLoad({file, setImgIsLoading}) {
  if (file && file.downloadURL) return setImgIsLoading(false)
}

export default ({storageRef, croppieConfig}) => {
  const [imgIsLoading, setImgIsLoading] = React.useState(false)
  const [file, setFile] = React.useState(null)
  const [isVerifying, setIsVerifying] = React.useState(false)
  const [mediaSource, setMediaSource] = React.useState(null)
  const [dataURL, setDataURL] = React.useState(null)
  const [croppie, setCroppie] = React.useState(null)
  const [croppedDataURL, setCroppedDataURL] = React.useState(null)
  const [isUploading, setIsUploading] = React.useState(false)
  const [uploaded, setUploaded] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  //
  const croppieRef = React.useRef()
  const webcamRef = React.useRef()
  //
  const {verifyFile} = useFileFromStorageRef({
    setFile, setIsVerifying, storageRef,
  })
  const {resetMediaSource, handleMediaSourceChange} = useMediaSourceForm({
    valueSetter: setMediaSource,
  })
  const {handleFileInputChange} = useFileInput({setDataURL})
  const {setupCroppie} = useCroppie({
    setCroppie, croppieRef, croppieConfig, setCroppedDataURL,
  })
  const {
    handleUploadButtonClick,
  } = useUploadButton({
    croppedDataURL, storageRef, setIsUploading,
    setProgress, setUploaded,
  })
  const {clickPhoto, startVideo} = useWebcamInput({
    webcamRef, setDataURL,
  })
  //
  React.useEffect(componentDidMount.bind(null, {
    verifyFile,
  }), [])
  React.useEffect(mediaSourceDidChange.bind(null, {
    mediaSource, setDataURL, setCroppie, setCroppedDataURL,
    startVideo,
  }), [mediaSource])
  React.useEffect(dataURLDidChange.bind(null, {
    setupCroppie, croppie, dataURL,
  }), [dataURL])
  React.useEffect(croppieDidChange.bind(null, {
    croppie, dataURL,
  }), [croppie])
  React.useEffect(uploadedDidChange.bind(null, {
    uploaded, setCroppedDataURL, setDataURL, setMediaSource,
    setProgress, verifyFile, setUploaded,
  }), [uploaded])
  React.useEffect(fileDidChange.bind(null, {
    setImgIsLoading, file,
  }), [file])
  //
  return {
    file, isVerifying,
    mediaSource, handleMediaSourceChange,
    handleFileInputChange, dataURL,
    webcamRef, clickPhoto,
    croppieRef, croppedDataURL,
    handleUploadButtonClick, isUploading, progress, uploaded,
    resetMediaSource,
    imgIsLoading,

    handleLoad: handleLoad.bind(null, {file, setImgIsLoading}),
  }
}
