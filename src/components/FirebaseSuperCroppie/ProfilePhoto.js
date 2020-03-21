import React from 'react'
import PropTypes from 'prop-types'

const ProfilePhoto = ({
  file, imgIsLoading, onLoad,
}) => (
  <div>
    {imgIsLoading && 'is loading...'}
    {(
      <img
        className="img-thumbnail rounded-0"
        hidden={imgIsLoading}
        src={file.downloadURL}
        onLoad={onLoad}
      />
    )}
  </div>
)

ProfilePhoto.propTypes = {
  file: PropTypes.object.isRequired,
  imgIsLoading: PropTypes.bool.isRequired,
  onLoad: PropTypes.func.isRequired,
}

export default ProfilePhoto
