import React from 'react'
import FileUploadDetails from '@react-hfn-components/FileUploadDetails'
import useFileInput from '@react-hfn-hooks/useFileInput'

export default (props) => {
  const {
    inputAttrs,
    uploadFiles,
    validationError,
    maxFiles,
  } = useFileInput({props})
  return (
    <div className="React-HFN-FileInput">
      <p className="validation-error">
        {validationError}
      </p>
      <input
        {...inputAttrs}
        onInput={uploadFiles}
      />
      <p>Maximum Files Allowed: {maxFiles}</p>
      <FileUploadDetails uploadDetails={[]} />
    </div>
  )
}
