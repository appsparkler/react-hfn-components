import React from 'react'
import FileUploadDetails from '@react-hfn-components/FileUploadDetails'
import useFileInput from '@react-hfn-hooks/useFileInput'

export default (props) => {
  const {
    inputAttrs,
    uploadFiles,
    validationError,
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
      <FileUploadDetails uploadDetails={[]} />
    </div>
  )
}
