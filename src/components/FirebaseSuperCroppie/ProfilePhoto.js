import React from 'react'
import PropTypes from 'prop-types'
import {Image, Spinner, SpinnerSize} from 'office-ui-fabric-react'

const ProfilePhoto = ({
  file, imgIsLoading, onLoad,
}) => (
  <div>
    {imgIsLoading && (
      <div>
        <Spinner label="Loading..." size={SpinnerSize.large} />
      </div>)
    }
    {(
      <Image
        className="img-thumbnail rounded-0"
        hidden={imgIsLoading}
        src={file.downloadURL}
        onLoad={onLoad}
        width={140}
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
