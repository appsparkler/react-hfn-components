import React from 'react'
import PropTypes from 'prop-types'
import config from './config'
import connectFirebaseSuperCroppie from './connectFirebaseSuperCroppie'

const FirebaseSuperCroppie = ({
  file, isVerifying, // uploaded file
  handleChange, // pass to file-input on-change-handler
  croppieRef, // the croppie element ref
  croppedDataURL, // the cropped-image preview url for img-src
  handleClick, isUploading, uploaded, progress, // upload functionality
}) => {
  const mediaSource = 'file'
  return (
    <div className="container mt-2">
      <div className="row">
        {file.downloadURL && !isUploading && (
          <img className="img-thumbnail rounded-0"
            src={file.downloadURL}
          />
        )}
        {isUploading && <span>Is Uploading...</span>}
        {!file.downloadURL && !isVerifying && <span>No File Uploaded</span>}
        {!file.downloadURL && isVerifying && <span>Is Verifying...</span>}
      </div>

      <div className="row mt-2">
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

      <div className={`row ${croppedDataURL ? '': 'invisible'}`}>
        <div className="col-9">
          <div ref={croppieRef}></div>
        </div>
        <div className="col-3 text-center">
          {croppedDataURL && <img
            className="img-thumbnail rounded-0"
            src={croppedDataURL}
          />}
          <div className="mt-2">
            <button
              className="btn btn-primary btn-block rounded-0"
              onClick={handleClick}
              disabled={isUploading}
            >
              Upload
            </button>
            <pre>{progress}%</pre>
          </div>
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
  croppedDataURL: PropTypes.string,

  handleClick: PropTypes.func.isRequired,
  uploaded: PropTypes.bool.isRequired,
  isUploading: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
}

export default connectFirebaseSuperCroppie({
  Component: FirebaseSuperCroppie,
  config: config,
})
