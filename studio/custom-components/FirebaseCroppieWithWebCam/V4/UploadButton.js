import React from 'react'
import PropTypes from 'prop-types'

const UploadButton = ({onClick}) => (
  <div>
    <button
      className="btn btn-primary btn-lg"
      onClick={onClick}
    >
      Upload
    </button>
  </div>
)

UploadButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default UploadButton
