import React from 'react'
import PropTypes from 'prop-types'

const FileInput = ({onChange}) => (
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text">
        Upload
      </span>
    </div>
    <div className="custom-file">
      <input
        type="file"
        className="custom-file-input"
        onChange={onChange}
      />
      <label className="custom-file-label">
        Choose file
      </label>
    </div>
  </div>
)

FileInput.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default FileInput
