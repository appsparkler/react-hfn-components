import React from 'react'

export default () => {
  const [dataURL, setDataURL] = React.useState(null)
  const [croppedDataURL, setCroppedDataURL] = React.useState(null)
  const [progress, setProgress] = React.useState(0)
  return {
    dataURL, setDataURL,
    croppedDataURL, setCroppedDataURL,
    progress, setProgress,
  }
}
