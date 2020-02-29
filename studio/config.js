import React from 'react'
import PropTypes from 'prop-types'

export const readOnlyParams = {
  readOnly: true,
}

const CustomFileInput = ({label, maxBytes}, ref) => {
  return (
    <div><h1>Custom File Input</h1>
      <label>{label}</label>
      <input type="file" ref={ref} />
      <p className="help-block">Max : {maxBytes?.toFixed(2)}KB</p>
      <p className="alert alert-danger">Max Bytes Exceeded</p>
    </div>
  )
}

CustomFileInput.propTypes = {
  label: PropTypes.string,
  maxBytes: PropTypes.number,
}

const components = {
  fileInput: React.forwardRef(CustomFileInput),
}

export const editableVersionParams = {

  // OPTIONAL PARAMETERS
  components,
  label: 'Id Proofs',
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
