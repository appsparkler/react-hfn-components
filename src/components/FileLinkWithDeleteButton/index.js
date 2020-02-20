import React from 'react'
import FileLink from '@react-hfn-components/FileLink'
import useFileLinkWithDeleteButton
  from './useFileLinkWithDeleteButton'
import FileInput from '@react-hfn-components/FileInput'

function FileLinkWithDeleteButton(props) {
  const {
  } = useFileLinkWithDeleteButton({props})
  return (
    <div className="FileLinkWithDeleteButton">
      <FileInput {...props} />
      <div>
        <FileLink {...props} />
        {<p>Is Editing...</p>}
      </div>
    </div>
  )
}

export default FileLinkWithDeleteButton
