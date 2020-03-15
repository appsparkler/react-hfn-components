import React from 'react'

function handleUploadButtonClick({setUploaded}) {
  setUploaded(false)
}

export default () => {
  const [dataURL, setDataURL] = React.useState(null)
  const [croppedDataURL, setCroppedDataURL] = React.useState(null)
  const [progress, setProgress] = React.useState(0)
  const [uploaded, setUploaded] = React.useState(false)
  return {
    dataURL, setDataURL,
    croppedDataURL, setCroppedDataURL,
    progress, setProgress,
    uploaded, setUploaded,
    handleUploadButtonClick: handleUploadButtonClick.bind(null, {
      setUploaded,
    }),
  }
}
