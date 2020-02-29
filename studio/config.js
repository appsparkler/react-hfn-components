import React from 'react'

export const readOnlyParams = {
  readOnly: true,
}

const CustomFileInput = (props, ref) => (
  <div><h1>Custom File Input</h1><input {...props} ref={ref} /></div>
)

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
