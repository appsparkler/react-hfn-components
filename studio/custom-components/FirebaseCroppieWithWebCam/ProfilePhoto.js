import React from 'react'
import PropTypes from 'prop-types'

const ProfilePhoto = ({
  file, isVerifying, imgIsLoading, onLoad,
}) => (
  <div>
    {file && !isVerifying && (
      <img
        className="img-thumbnail rounded-0"
        hidden={imgIsLoading}
        src={file.downloadURL}
        onLoad={onLoad}
      />
    )}
    {isVerifying && (
      <span>is Verifying...</span>
    )}
    {!file && !isVerifying && (
      <span>No Profile Pic</span>
    )}
  </div>
)

ProfilePhoto.propTypes = {
  file: PropTypes.object.isRequired,
  isVerifying: PropTypes.bool.isRequired,
  imgIsLoading: PropTypes.bool.isRequired,
  onLoad: PropTypes.func.isRequired,
}

export default ProfilePhoto
