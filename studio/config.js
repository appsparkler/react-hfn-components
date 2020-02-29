import React from 'react'
import PropTypes from 'prop-types'

export const readOnlyParams = {
  readOnly: true,
}

const CustomFileInput = (
    {
      type, label, maxBytes, maxBytesError, progress, name, handleInput,
      maxBytesExceeded, isUploading, file,
    }
    , ref) => {
  return (
    <div>
      <h1>Custom File Input</h1>
      <h4>{!file && 'Upload File'}</h4>
      <h4>{file && 'Edit File'}</h4>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        onInput={handleInput}
        ref={ref}
      />

      <p className="help-block">Max Bytes: {maxBytes?.toFixed(2)} kB</p>

      {maxBytesExceeded && (
        <p className="alert alert-danger">{maxBytesError}</p>
      )}
      {progress && (
        <>
          <progress min="0" max="100" value={progress} />
          <br />
          {progress.toFixed(2)}%
        </>
      )}
    </div>
  )
}

CustomFileInput.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  handleInput: PropTypes.func,

  progress: PropTypes.number,
  isUploading: PropTypes.bool,

  maxBytes: PropTypes.number,
  maxBytesError: PropTypes.string,
  maxBytesExceeded: PropTypes.bool,

  file: PropTypes.object,
}

const components = {
  // fileInput: React.forwardRef(CustomFileInput),
}

export const editableVersionParams = {

  // OPTIONAL PARAMETERS
  components,
  label: 'Id Proofs',
  type: 'file', // default "file"
  // required: true,
  // disabled: true,

  // REQUIRED PARAMETERS
  readOnly: false,

  // OPTIONAL methods
  onUpload: (uploadedFile) => {
    console.log(uploadedFile)
  },

  // Validations
  maxBytes: .5 * 1024 * 1024, // default 1 * 1024 * 1024
  maxBytesError: 'file exceeds size-limit. please re-try.',
  maxBytesInfoMessage: 'max bytes : ',
}
