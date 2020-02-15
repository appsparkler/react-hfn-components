import React from 'react'
import FileUploadDetails from '@react-hfn-components/FileUploadDetails'
import useFileInput from '@react-hfn-hooks/useFileInput'

export default (props) => {
  const {
    inputAttrs,
    uploadFiles,
  } = useFileInput({props})
  return (
    <div className="React-HFN-FileInput">
      <input
        {...inputAttrs}
        onInput={uploadFiles}
      />
      <FileUploadDetails uploadDetails={[]} />
    </div>
  )
}
