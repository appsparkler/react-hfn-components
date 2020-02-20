import React from 'react'
import FileLink from '@react-hfn-components/FileLink'
import FileInput from '@react-hfn-components/FileInput'

function FileLinkWithDeleteButton(props) {
  const {file, isUploading} = props
  return (
    <div className="FileLinkWithDeleteButton">
      <FileInput {...props} />
      <div>
        {file && isUploading && (
          <p className="is-editing-text">Is Editing...</p>
        )}
        {file && !isUploading && (
          <FileLink {...props} />
        )}
      </div>
    </div>
  )
}

export default FileLinkWithDeleteButton
