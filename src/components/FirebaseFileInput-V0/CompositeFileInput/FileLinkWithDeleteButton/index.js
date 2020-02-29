import React from 'react'
import FileLink from '../../ReadOnlyFileInput/FileLink'
import FileInput from '../FileInput'

function FileLinkWithDeleteButton(props) {
  const {file, isUploading} = props
  return (
    <div className="FileLinkWithDeleteButton">
      <FileInput {...props} />
      <div>
        {file && !isUploading && (
          <FileLink {...props} />
        )}
      </div>
    </div>
  )
}

export default FileLinkWithDeleteButton
