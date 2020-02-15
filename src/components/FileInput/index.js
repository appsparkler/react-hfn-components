import React from 'react'
import useFileInput from '@react-hfn-hooks/useFileInput'

export default (props) => {
  const {
    inputAttrs,
    uploadFiles,
    validationError,
    maxBytes,
  } = useFileInput({props})
  return (
    <div className="React-HFN-FileInput">
      <input
        {...inputAttrs}
        onInput={uploadFiles}
      />
      <br/>
      <progress value="75" min="0" max="100"></progress>
      <p className="info">
        File size limit: {(maxBytes/(1024 * 1024))} MB
      </p>
      <p className="validation-error">
        {validationError}
      </p>
    </div>
  )
}
