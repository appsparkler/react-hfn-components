import React from 'react'
import FileLink from '@react-hfn-components/FileLink'
import useFileLinkWithDeleteButton
  from './useFileLinkWithDeleteButton'

function FileLinkWithDeleteButton(props) {
  const {
    deleteFile,
    isDeleting,
  } = useFileLinkWithDeleteButton({props})
  return (
    <div className="FileLinkWithDeleteButton">
      <FileLink {...props} />

      {isDeleting && <p>Deleting...</p>}

      {!isDeleting && (
        <button onClick={deleteFile}>
                Delete File
        </button>)}
    </div>
  )
}

export default FileLinkWithDeleteButton
