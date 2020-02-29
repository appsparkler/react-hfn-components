import React from 'react'
import HelpBlock from '@react-hfn-components/HelpBlock'
import useFileLink from './useFileLink'

function FileLink(props) {
  const {file, isVerifying} = useFileLink({props})
  return (
    <div className="FileLink">
      {
        isVerifying && (
          <HelpBlock msg={props.isVerifyingMessage || 'Verifying...'} />
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
