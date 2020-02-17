import React from 'react'
import useFileInput from './useFileInput'
import ProgressBar from '@react-hfn-components/ProgressBar'

function FileInput(props) {
  const {
    handleInput,
    validationError,
    maxBytes,
    type,
    file,
    uploadDetail,
    isUploading,
  } = useFileInput({props})
  return (
    <div>
      {isUploading && <p>Uploading...</p>}
      {!isUploading && (
        <label >
          { props && props.label }
          <br />

          <input
            type={type}
            disabled={props.disabled || false}
            name={props.name || 'file'}
            required={props.required || false}
            onInput={handleInput}
          />
        </label>
      )}
      {
        uploadDetail && (
          <ProgressBar
            key={uploadDetail.key}
            uploadDetail={uploadDetail}
          />
        )
      }
      <pre>{ file && JSON.stringify(file) }</pre>
      <p className="info">
        {(props && props.maxBytesInfoMessage) || 'Max file size: '}
        {(maxBytes/(1024 * 1024)).toFixed(2)} MB
      </p>
      <p className="validation-error">{validationError}</p>
    </div>
  )
}

export default FileInput
