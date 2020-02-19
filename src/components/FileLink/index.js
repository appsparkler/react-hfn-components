import React from 'react'
import useFileLink from './useFileLink'

function FileLink(props) {
  const {file, isVerifying} = useFileLink({props})
  return (
    <div className="FileLink">
      {
        isVerifying && (
          <span>
            {props.isVerifyingMessage || 'is Verifying'}
          </span>
        )
      }
      {
        !isVerifying && file && (
          <a href={file && file.downloadUrl} target="__blank">
            {file && file.fileName}
          </a>
        )
      }
    </div>
  )
}

export default FileLink
