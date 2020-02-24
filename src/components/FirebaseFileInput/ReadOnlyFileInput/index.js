import React from 'react'
import FileLink from './FileLink'

function ReadOnlyFileInput(props) {
  const {file} = props
  return (
    <div className="ReadOnlyFileInput">
      {!file && <p>{(props && props.noFilesMessage) || 'No File Uploaded'}</p>}
      {file && <FileLink {...props} />}
    </div>
  )
}

export default ReadOnlyFileInput
