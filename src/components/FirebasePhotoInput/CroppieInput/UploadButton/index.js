import React from 'react'
import useUploadButton from './useUploadButton'

const UploadButton = (props) => {
  const {uploadPhoto} = useUploadButton({props})
  return (
    <span className="UploadButton">
      <button
        className="btn btn-primary btn-lg btn-block"
        onClick={uploadPhoto}>Upload Photo</button>
    </span>
  )
}

export default UploadButton
