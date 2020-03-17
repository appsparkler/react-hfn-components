import React from 'react'
import PropTypes from 'prop-types'
import config from './config'
import connectFirebaseSuperCroppie from './connectFirebaseSuperCroppie'

const FirebaseSuperCroppie = ({file, isVerifying}) => {
  return (
    <div className="container mt-2">
      <div className="row">
        {file.downloadURL && <img className="img-thumbnail rounded-0"
          src={file.downloadURL}
        />}
        {!file.downloadURL && !isVerifying && <span>No File Uploaded</span>}
        {!file.downloadURL && isVerifying && <span>Is Verifying...</span>}
      </div>
    </div>
  )
}

FirebaseSuperCroppie.propTypes = {
  file: PropTypes.object.isRequired,
  isVerifying: PropTypes.bool.isRequired,
}

export default connectFirebaseSuperCroppie({
  Component: FirebaseSuperCroppie,
  config: config,
})
