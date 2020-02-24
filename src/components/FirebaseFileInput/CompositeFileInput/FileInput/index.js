import React from 'react'
import useFileInput from './useFileInput'
import ProgressBar from './ProgressBar'

function FileInput(props) {
  const {
    handleInput,
    validationError,
    maxBytes,
    type,
    uploadDetail,
    isUploading,
    file,
  } = useFileInput({props})
  return (
    <div className={ `FileInput ${file && 'edit-file'}`}>
      {isUploading && <p className="uploading-text">Uploading...</p>}
      {!isUploading && (
        <label >
          <span className="label-text">{ props && props.label }</span>
          <span className="required-asterix">{ props?.required && '*'}</span>
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
        uploadDetail && isUploading && (
          <ProgressBar
            key={uploadDetail.key}
            uploadDetail={uploadDetail}
          />
        )
      }
      <p className="info">
        {(props && props.maxBytesInfoMessage) || 'Max file size: '}
        {(maxBytes/(1024 * 1024)).toFixed(2)} MB
      </p>
      <p className="validation-error">{validationError}</p>
    </div>
  )
}

export default FileInput
