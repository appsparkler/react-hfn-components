import React from 'react'
import PropTypes from 'prop-types'
import config from './config'
import connectFirebaseSuperCroppie from './connectFirebaseSuperCroppie'
//
import ProfilePhoto from './ProfilePhoto'
import MediaSourceForm from './MediaSourceForm'
import FileInput from './FileInput'

const FirebaseSuperCroppie = ({
  file, isVerifying,
  mediaSource, handleMediaSourceChange,
  handleFileInputChange, dataURL,
  croppieRef,

  resetMediaSource,
}) => {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-3">
          <ProfilePhoto file={file} isVerifying={isVerifying} />
        </div>
        <div className="col-5 flex-end">
          <MediaSourceForm
            mediaSource={mediaSource}
            handleMediaSourceChange={handleMediaSourceChange}
          />
        </div>
        {mediaSource === 'file' && (
          <div className="col-4">
            <FileInput onChange={handleFileInputChange} />
          </div>
        )}
        {mediaSource === 'webcam' && (
          <div>Use Webcam...</div>
        )}
      </div>
      {mediaSource && (
        <div className="row">
          <div className="col-4">
            <div ref={croppieRef}></div>
          </div>
        </div>
      )}
      <div className="row"><button className="btn btn-primary" onClick={resetMediaSource}>Reset Media Source</button></div>
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
