import React from 'react'
import FileLinkWithDeleteButton
  from '@react-hfn-components/FileLinkWithDeleteButton'
import FileInput from '@react-hfn-components/FileInput'
import useCompositeFileInput from './useCompositeFileInput'

function CompositeFileInput(props) {
  const {sharedState} = useCompositeFileInput({props})
  const {file} = sharedState
  return (
    <div>
      {file &&
        <FileLinkWithDeleteButton
          {...props}
          sharedState={sharedState}
        />}
      {!file && <FileInput
        {...props}
        sharedState={sharedState}
      /> }
      <br />
    </div>
  )
}

export default CompositeFileInput
