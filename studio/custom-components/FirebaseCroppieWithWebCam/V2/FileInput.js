import React from 'react'
import useFileInput from './useFileInput'

const FileInput = ({}) => {
  const {handleChange, dataURL} = useFileInput()
  return (
    <div>
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
            onChange={handleChange}
          />
          <label
            className="custom-file-label"
          >
            Choose file
          </label>
        </div>
      </div>
      {dataURL && (
        <pre className="pre-scrollable">
          <code style={{whiteSpace: 'normal'}}>
            {dataURL}
          </code>
        </pre>
      )}
    </div>
  )
}

export default FileInput
