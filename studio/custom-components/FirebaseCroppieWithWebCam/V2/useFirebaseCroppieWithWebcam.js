import React from 'react'

export default () => {
  const [dataURL, setDataURL] = React.useState(null)
  const [croppedDataURL, setCroppedDataURL] = React.useState(null)
  return {
    dataURL, setDataURL,
    croppedDataURL, setCroppedDataURL,
  }
}
