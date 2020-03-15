import React from 'react'

const FileInput = ({}) => (
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span
        className="input-group-text">
        Upload Photo
      </span>
    </div>
    <div className="custom-file">
      <input
        type="file"
        className="custom-file-input"
      />
      <label
        className="custom-file-label"
      >
        Choose file
      </label>
    </div>
  </div>
)

export default FileInput
