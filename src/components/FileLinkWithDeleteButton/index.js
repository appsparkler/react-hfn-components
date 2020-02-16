import React from 'react'
import FileLink from '@react-hfn-components/FileLink'
import useFileLinkWithDeleteButton
  from '@react-hfn-hooks/useFileLinkWithDeleteButton'

function FileLinkWithDeleteButton(props) {
  const {deleteFile, file} = useFileLinkWithDeleteButton({props})
  return (
    <div>
      <FileLink file={file} />
      <br />
      <br />
      <button onClick={deleteFile}>Delete File</button>
      {/* */}
    </div>
  )
}

export default FileLinkWithDeleteButton
