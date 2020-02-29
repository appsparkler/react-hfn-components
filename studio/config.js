import React from 'react'
import PropTypes from 'prop-types'
import FirebaseApp from './firebase-app'

const storageRef = FirebaseApp.storage().ref('id-proofs/abc12')

const CustomFileLink = ({
  isVerifying, file,
}, ref) => {
  return (
    <>
      {isVerifying && 'isVerifying'}
      {file && !isVerifying && <a href={file.downloadURL}>{file.fileName}</a>}
    </>
  )
}

CustomFileLink.propTypes = {
  isVerifying: PropTypes.bool,
  file: PropTypes.object,
}

const CustomFileInput = (
    {
      type, label, disabled, required, name,
      progress, isUploading, uploaded,
      maxBytes, maxBytesError,
      isVerifying, file,
      handleInput,
      maxBytesExceeded,
    }, ref) => {
  return (
    <div>
      <h1>Custom File Input</h1>
      <h4>{!file && 'Upload File'}</h4>
      <h4>{file && 'Edit File'}</h4>

      <h5>File Details:</h5>
      {isVerifying && 'isVerifying...'}
      {!file && !isVerifying && 'No File Uploaded...'}
      {file && !isVerifying && <a href={file.downloadURL}>{file.fileName}</a>}
      <br />
      <label>{label}</label>
      <input
        type={type}
        name={name}
        onInput={handleInput}
        ref={ref}
        disabled={disabled}
        required={required}
      />

      <p className="help-block">Max Bytes: {maxBytes?.toFixed(2)} kB</p>

      {(progress > 0) && !uploaded && (
        <>
          <progress min="0" max="100" value={progress} />
          <br />
          {progress.toFixed(2)}%
        </>
      )}

      {uploaded && 'Uploaded...'}

      {maxBytesExceeded && (
        <p className="alert alert-danger">{maxBytesError}</p>
      )}

    </div>
  )
}

CustomFileInput.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,

  handleInput: PropTypes.func,

  file: PropTypes.object,
  isVerifying: PropTypes.bool,

  progress: PropTypes.number,
  isUploading: PropTypes.bool,
  uploaded: PropTypes.bool,

  maxBytes: PropTypes.number,
  maxBytesError: PropTypes.string,
  maxBytesExceeded: PropTypes.bool,

}

const components = {
  fileInput: React.forwardRef(CustomFileInput),
  fileLink: CustomFileLink,
}

export const readOnlyParams = {
  readOnly: true,
  components,
  storageRef,
}

export const editableVersionParams = {

  // OPTIONAL PARAMETERS
  components,
  label: 'Id Proofs',
  type: 'file', // default "file"
  required: true, // default false
  disabled: false, // default false

  // REQUIRED PARAMETERS
  readOnly: false,
  storageRef,

  // OPTIONAL methods
  onUpload: (uploadedFile) => {
    console.log(uploadedFile)
  },

  // Validations
  maxBytes: .5 * 1024 * 1024, // default 1 * 1024 * 1024
  maxBytesError: 'file exceeds size-limit. please re-try.',
  maxBytesInfoMessage: 'max bytes : ',
}
