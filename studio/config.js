import React from 'react'
import PropTypes from 'prop-types'

export const readOnlyParams = {
  readOnly: true,
}

const CustomFileInput = (
    {
      type, label, maxBytes, maxBytesError, progress, name, handleInput,
      maxBytesExceeded, isUploading,
    }
    , ref) => {
  return (
    <div><h1>Custom File Input</h1>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        onInput={handleInput}
        ref={ref}
      />
      <pre>
        MaxBytesExceeded: {JSON.stringify(maxBytesExceeded)}
        <br />
        isUploading: {JSON.stringify(isUploading)}
      </pre>
      <p className="help-block">Max Bytes: {maxBytes?.toFixed(2)}KB</p>
      <p className="alert alert-danger">{maxBytesError}</p>
      <span>{progress}%</span>
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

}

const components = {
  fileInput: React.forwardRef(CustomFileInput),
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

  // file-related params

  // methods
  onUpload: (uploadedFile) => {
    console.log(uploadedFile)
  },

  // Validations
  maxBytes: 2 * 1024 * 1024, // default 1 * 1024 * 1024
  maxBytesError: 'file exceeds size-limit. please re-try.',
  maxBytesInfoMessage: 'max bytes : ',
}
