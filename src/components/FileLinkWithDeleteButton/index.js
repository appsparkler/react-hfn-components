import React from 'react'
import FileLink from '@react-hfn-components/FileLink'
import useFileLinkWithDeleteButton
  from './useFileLinkWithDeleteButton'

function FileLinkWithDeleteButton(props) {
  const {deleteFile, file, isDeleting, isVerifying} = useFileLinkWithDeleteButton({props})
  return (
    <div className="FileLinkWithDeleteButton">
      {isVerifying && 'is Verifying...'}
      {!isVerifying && (
          <>
            <FileLink file={file} sharedState={props.sharedState} />
            {isDeleting && <p>Deleting...</p>}
            {!isDeleting && (
              <button onClick={deleteFile}>
                Delete File
              </button>)}
          </>
      )}
    </div>
  )
}

export default FileLinkWithDeleteButton
