import React from 'react'
import PropTypes from 'prop-types'
import useFileInput from './useFileInput'

const FileInput = ({onDataURL}) => {
  const {handleChange, dataURL} = useFileInput({onDataURL})
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

FileInput.propTypes = {
  onDataURL: PropTypes.func.isRequired,
}

FileInput.defaultProps = {
  onDataURL: () => {},
}

export default FileInput
