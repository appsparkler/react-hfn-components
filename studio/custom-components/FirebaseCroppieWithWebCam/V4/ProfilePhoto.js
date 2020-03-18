import React from 'react'
import PropTypes from 'prop-types'

const ProfilePhoto = ({file, isVerifying}) => (
  <div>
    {file && !isVerifying && (
      <img
        className="img-thumbnail rounded-0"
        src={file.downloadURL}
      />
    )}
    {isVerifying && <span>is Verifying...</span>}
  </div>
)

ProfilePhoto.propTypes = {
  file: PropTypes.object,
  isVerifying: PropTypes.bool.isRequired,
}

export default ProfilePhoto
