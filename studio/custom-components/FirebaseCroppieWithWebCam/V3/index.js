import React from 'react'
import PropTypes from 'prop-types'
import config from './config'
import connectFirebaseSuperCroppie from './connectFirebaseSuperCroppie'

const FirebaseSuperCroppie = ({
  file, isVerifying,
  handleChange, // pass to file-input on-change-handler
  croppieRef, // the croppie element ref
}) => {
  const mediaSource = 'file'
  return (
    <div className="container mt-2">
      <div className="row">
        {file.downloadURL && <img className="img-thumbnail rounded-0"
          src={file.downloadURL}
        />}
        {!file.downloadURL && !isVerifying && <span>No File Uploaded</span>}
        {!file.downloadURL && isVerifying && <span>Is Verifying...</span>}
      </div>

      <div className="row">
        {mediaSource === 'file' && (
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span
                className="input-group-text">
                Upload Photo
              </span>
            </div>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                onChange={handleChange}
              />
              <label
                className="custom-file-label"
              >
                Choose file
              </label>
            </div>
          </div>
        )}
      </div>

      <div className="row">
        <div className="col-6">
          <div ref={croppieRef}></div>
        </div>
      </div>
    </div>
  )
}

FirebaseSuperCroppie.propTypes = {
  file: PropTypes.object.isRequired,
  isVerifying: PropTypes.bool.isRequired,

  // pass this to the file-inputs onChange handler
  handleChange: PropTypes.func.isRequired,

  croppieRef: PropTypes.any,
}

export default connectFirebaseSuperCroppie({
  Component: FirebaseSuperCroppie,
  config: config,
})
