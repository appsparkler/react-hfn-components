import React from 'react'
import PropTypes from 'prop-types'
import config from './config'
import connectFirebaseSuperCroppie from './connectFirebaseSuperCroppie'

const FirebaseSuperCroppie = ({
  file, isVerifying,
}) => {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-2">
          {file && !isVerifying && (
            <img className="img-thumbnail" src={file.downloadURL} />
          )}
          {isVerifying && <span>is Verifying...</span>}
        </div>
      </div>
    </div>
  )
}

FirebaseSuperCroppie.propTypes = {
  file: PropTypes.object,
  isVerifying: PropTypes.bool.isRequired,
}

export default connectFirebaseSuperCroppie({
  Component: FirebaseSuperCroppie,
  config: config,
})
