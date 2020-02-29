import React from 'react'
import PropTypes from 'prop-types'
import HelpBlock from '@react-hfn-components/HelpBlock'
import useFileLink from './useFileLink'

function FileLink(props) {
  const {isVerifying} = useFileLink({props})
  return (
    <div className="FileLink">
      <pre>
        isVerifying: {JSON.stringify(isVerifying)}

      </pre>
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
