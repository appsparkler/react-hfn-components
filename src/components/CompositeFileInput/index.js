import React from 'react'
import FileLinkWithDeleteButton
  from '@react-hfn-components/FileLinkWithDeleteButton'
import FileInput from '@react-hfn-components/FileInput'
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
