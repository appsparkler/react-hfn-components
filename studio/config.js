import React from 'react'
import PropTypes from 'prop-types'

export const readOnlyParams = {
  readOnly: true,
}

const CustomFileInput = (props, ref) => {
  return (
    <div><h1>Custom File Input</h1>
      <label>{props.label}</label>
      <input {...props} ref={ref} />
    </div>
  )
}

CustomFileInput.propTypes = {
  label: PropTypes.string,
}

const components = {
  fileInput: React.forwardRef(CustomFileInput),
}

export const editableVersionParams = {
  // OPTIONAL PARAMETERS
  components,

  // REQUIRED PARAMETERS

  label: 'Id Proofs',

  // disabled: true,
  readOnly: false,
  required: true,

  // file-related params

  // methods
  onUpload: (uploadedFile) => {
    console.log(uploadedFile)
  },

  // Validations
  maxBytes: .01 * 1024 * 1024,
  maxBytesError: 'file exceeds size-limit. please re-try.',
  maxBytesInfoMessage: 'max bytes : ',
}
