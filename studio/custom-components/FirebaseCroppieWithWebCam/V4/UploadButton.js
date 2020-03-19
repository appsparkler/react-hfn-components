import React from 'react'
import PropTypes from 'prop-types'

const UploadButton = ({onClick, disabled}) => {
  return (
    <div className="UploadButton">
      <button
        className="btn btn-primary btn-lg btn-block"
        onClick={onClick}
        disabled={disabled}
      >
          Upload Photo
      </button>
    </div>
  )
}

UploadButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default UploadButton
