import React from 'react'
import useFileLink from './useFileLink'

function FileLink(props) {
  const {file} = useFileLink({props})
  return (
    <div className="FileLink">
      <a href={file && file.downloadUrl} target="__blank">
        {file && file.fileName}
      </a>
    </div>
  )
}

export default FileLink
