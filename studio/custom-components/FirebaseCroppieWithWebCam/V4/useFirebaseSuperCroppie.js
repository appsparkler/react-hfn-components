import React from 'react'
import useFileFromStorageRef from './useFileFromStorageRef'
import useMediaSourceForm from './useMediaSourceForm'
import useFileInput from './useFileInput'
import useCroppie from './useCroppie'

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

function mediaSourceDidChange({mediaSource, setDataURL, setCroppie}) {
  if (!mediaSource) {
    setDataURL(null)
    setCroppie(null)
  }
}

export default ({storageRef, croppieConfig}) => {
  const [file, setFile] = React.useState(null)
  const [isVerifying, setIsVerifying] = React.useState(false)
  const [mediaSource, setMediaSource] = React.useState(null)
  const [dataURL, setDataURL] = React.useState(null)
  const [croppie, setCroppie] = React.useState(null)
  const [croppedDataURL, setCroppedDataURL] = React.useState(null)
  //
  const croppieRef = React.useRef()
  //
  const {verifyFile} = useFileFromStorageRef({
    setFile, setIsVerifying, storageRef,
  })
  const {resetMediaSource, handleMediaSourceChange} = useMediaSourceForm({
    setMediaSource,
  })
  const {handleFileInputChange} = useFileInput({setDataURL})
  const {setupCroppie} = useCroppie({
    setCroppie, croppieRef, croppieConfig, setCroppedDataURL,
  })
  //
  React.useEffect(componentDidMount.bind(null, {
    verifyFile,
  }), [])
  React.useEffect(mediaSourceDidChange.bind(null, {
    mediaSource, setDataURL, setCroppie,
  }), [mediaSource])
  React.useEffect(dataURLDidChange.bind(null, {
    setupCroppie, croppie, dataURL,
  }), [dataURL])
  React.useEffect(croppieDidChange.bind(null, {
    croppie, dataURL,
  }), [croppie])
  //
  return {
    file,
    isVerifying,
    mediaSource,
    handleMediaSourceChange,
    handleFileInputChange,
    dataURL,
    croppieRef,

    croppedDataURL,
    resetMediaSource,
  }
}
