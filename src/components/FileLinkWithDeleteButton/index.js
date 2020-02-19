import React from 'react'
import FileLink from '@react-hfn-components/FileLink'
import useFileLinkWithDeleteButton
  from './useFileLinkWithDeleteButton'
import FileInput from '@react-hfn-components/FileInput'

function FileLinkWithDeleteButton(props) {
  const {
    isDeleting,
  } = useFileLinkWithDeleteButton({props})
  return (
    <div className="FileLinkWithDeleteButton">
      <FileLink {...props} />

      {isDeleting && <p>Deleting...</p>}

      {!isDeleting &&
        <FileInput {...props} />
      }
    </div>
  )
}

export default FileLinkWithDeleteButton
