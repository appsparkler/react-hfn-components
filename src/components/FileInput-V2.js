import React from 'react'
import FileUploadDetails from '@react-hfn-components/FileUploadDetails'

export default (props) => {
  const {inputAttrs} = useFileInput({props})
  return (
    <div className="React-HFN-FileInput">
      <input
        {...inputAttrs}
      />
      <FileUploadDetails uploadDetails={[]} />
    </div>
  )
}

function useFileInput({props}) {
  const inputAttrs = {
    type: (props && props.type) || 'file',
    multiple: (props && props.multiple) || false,
    className: `${props && props.className} input-file`,
  }
  return {
    inputAttrs,
  }
}
