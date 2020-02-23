import React from 'react'
import useUploadButton from './useUploadButton'

const UploadButton = (props) => {
  const {uploadPhoto} = useUploadButton({props})
  return (
    <span className="UploadButton">
      <button onClick={uploadPhoto}>Upload Photo</button>
    </span>
  )
}

export default UploadButton
