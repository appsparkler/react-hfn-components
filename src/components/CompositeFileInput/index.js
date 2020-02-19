import React from 'react'
import FileLinkWithDeleteButton
  from '@react-hfn-components/FileLinkWithDeleteButton'
import FileInput from '@react-hfn-components/FileInput'

function CompositeFileInput(props) {
  const {file} = props
  return (
    <div className="CompositeFileInput">
      {file &&
        <FileLinkWithDeleteButton
          {...props}
        />}
      {!file && <FileInput
        {...props}
      />}
      <br />
    </div>
  )
}

export default CompositeFileInput
