import React from 'react'
import PropTypes from 'prop-types'
import BSAlert from '@react-hfn-components/BSAlert'
import useFileLink from './useFileLink'

function FileLink(props) {
  const {isVerifying, downloadURL, metadata} = useFileLink({props})
  return (
    <div className="FileLink">
      {isVerifying && <BSAlert type="info" msg={props.isVerifyingMessage} />}
      {downloadURL && metadata?.customMetadata?.fileName && (
        <a href={downloadURL}>
          {metadata.customMetadata.fileName}
        </a>
      )}
    </div>
  )
}

FileLink.propTypes = {
  isVerifyingMessage: PropTypes.string,
  storageRef: PropTypes.object.isRequired,
}

FileLink.defaultProps = {
  isVerifyingMessage: 'Verifying...',
}

export default FileLink


/*
{
  isVerifying && (
    <HelpBlock msg={props.isVerifyingMessage} />
  )
}
{
  !isVerifying && file && (
    <a href={file && file.downloadUrl} target="__blank">
      {file && file.fileName}
    </a>
  )
}
*/
