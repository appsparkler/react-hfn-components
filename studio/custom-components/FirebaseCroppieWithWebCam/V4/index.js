import React from 'react'
import PropTypes from 'prop-types'
import config from './config'
import connectFirebaseSuperCroppie from './connectFirebaseSuperCroppie'
import ProfilePhoto from './ProfilePhoto'
import MediaSourceForm from './MediaSourceForm'

const FirebaseSuperCroppie = ({
  file, isVerifying,
  mediaSource, handleMediaSourceChange,
}) => {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-3">
          <ProfilePhoto file={file} isVerifying={isVerifying} />
        </div>
        <div className="col-8 flex-end">
          <MediaSourceForm
            handleMediaSourceChange={handleMediaSourceChange}
          />
        </div>
      </div>
    </div>
  )
}

FirebaseSuperCroppie.propTypes = {
  file: PropTypes.object,
  isVerifying: PropTypes.bool.isRequired,

  mediaSource: PropTypes.string,
  handleMediaSourceChange: PropTypes.func.isRequired,
}

export default connectFirebaseSuperCroppie({
  Component: FirebaseSuperCroppie,
  config: config,
})
