import React from 'react'
import ProgressBar from '@react-hfn-components/ProgressBar'
import useFileInput from '@react-hfn-hooks/useFileInput'

export default (props) => {
  const {
    inputAttrs,
    uploadFiles,
    validationError,
    maxBytes,
    uploadDetails,
  } = useFileInput({props})
  return (
    <div className="React-HFN-FileInput">
      <input
        {...inputAttrs}
        onInput={uploadFiles}
      />
      <br/>
      {
        uploadDetails.map((uploadDetail) => (
          <ProgressBar key={uploadDetail.key} uploadDetail={uploadDetail}/>
        ))
      }
      <p className="info">
        File size limit: {(maxBytes/(1024 * 1024))} MB
      </p>
      <p className="validation-error">
        {validationError}
      </p>
    </div>
  )
}
