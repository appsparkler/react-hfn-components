import React from 'react'
import FileLinkWithDeleteButton
  from './FileLinkWithDeleteButton'
import FileInput from './FileInput'
import useCompositeFileInput from './useCompositeFileInput'

function CompositeFileInput(props) {
  const superProps = useCompositeFileInput({props})
  const {file} = superProps
  return (
    <div className="CompositeFileInput">
      {file &&
        <FileLinkWithDeleteButton
          {...superProps}
        />}
      {!file && <FileInput
        {...superProps}
      />}
      <br />
    </div>
  )
}

export default CompositeFileInput
