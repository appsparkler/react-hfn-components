import React from 'react'
import useFileInput from './useFileInput'
import ProgressBar from './ProgressBar'
import HelpBlock from '@react-hfn-components/HelpBlock'
import BSAlert from '@react-hfn-components/BSAlert'

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
      {!isUploading && (
        <div className="form-group">
          <label>
            <span className="label-text">{ props && props.label }</span>
            <span className="required-asterix">{ props?.required && '*'}</span>
          </label>
          <input
            type="file"
            type={type}
            disabled={props.disabled || false}
            name={props.name || 'file'}
            required={props.required || false}
            onInput={handleInput}
          />

        </div>
      )}
      {
        uploadDetail && isUploading && (
          <ProgressBar
            key={uploadDetail.key}
            uploadDetail={uploadDetail}
          />
        )
      }
      {isUploading && <HelpBlock msg={ file ? 'Editing...': 'Uploading...'} />}
      <HelpBlock msg={
        `${(props && props.maxBytesInfoMessage) || 'Max file size: '}
         ${(maxBytes/(1024 * 1024)).toFixed(2)} MB`
      }
      />
      {validationError && <BSAlert type="danger" message={validationError} />}
    </div>
  )
}

export default FileInput
