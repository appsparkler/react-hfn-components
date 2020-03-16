import React from 'react'

function handleUploadButtonClick() {

}

function handleMediaSourceChange({
  setUploaded, setMediaSource, setDataURL, setCroppedDataURL,
}, mediaSource) {
  setMediaSource(mediaSource)
  setUploaded(false)
  setDataURL(null)
  setCroppedDataURL(null)
}

function handleUploadProgress({setIsUploading}) {
  setIsUploading(true)
}

function handleUploadDone({setIsUploading, setUploaded}) {
  setIsUploading(false)
  setUploaded(true)
}

export default () => {
  const [dataURL, setDataURL] = React.useState(null)
  const [croppedDataURL, setCroppedDataURL] = React.useState(null)
  const [progress, setProgress] = React.useState(0)
  const [uploaded, setUploaded] = React.useState(false)
  const [mediaSource, setMediaSource] = React.useState(null)
  const [isUploading, setIsUploading] = React.useState(null)
  return {
    // properties
    dataURL, setDataURL,
    croppedDataURL, setCroppedDataURL,
    progress, setProgress,
    uploaded, setUploaded,
    mediaSource,
    isUploading,
    // methods
    handleUploadButtonClick: handleUploadButtonClick.bind(null, {
      setUploaded,
    }),
    handleMediaSourceChange: handleMediaSourceChange.bind(null, {
      setUploaded,
      setMediaSource,
      setDataURL,
      setCroppedDataURL,
    }),
    handleUploadProgress: handleUploadProgress.bind(null, {
      setIsUploading,
    }),
    handleUploadDone: handleUploadDone.bind(null, {
      setIsUploading, setUploaded,
    }),
  }
}
