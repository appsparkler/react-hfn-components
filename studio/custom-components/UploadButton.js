import React from 'react'
import PropTypes from 'prop-types'

const UploadButton = (props) => {
  const {uploadPhoto} = props
  return (
    <div className="UploadButton">
      <button
        className="btn btn-primary btn-lg btn-block"
        onClick={uploadPhoto}>Upload Photo</button>
    </div>
  )
}

UploadButton.propTypes = {
  uploadPhoto: PropTypes.func,
}

export default UploadButton
