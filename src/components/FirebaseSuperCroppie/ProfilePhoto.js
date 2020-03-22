import React from 'react'
import PropTypes from 'prop-types'
import {Image, Spinner, SpinnerSize} from 'office-ui-fabric-react'

const ProfilePhoto = ({
  file, imgIsLoading, onLoad, isVerifying,
}) => (
  <div>
    {!isVerifying && imgIsLoading && (
      <div>
        <Spinner label="Loading..." size={SpinnerSize.large} />
      </div>)
    }
    {isVerifying && (
      <div>
        <Spinner label="Verifying..." size={SpinnerSize.large} />
      </div>)
    }
    {file && !isVerifying && (
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
  file: PropTypes.object,
  imgIsLoading: PropTypes.bool.isRequired,
  onLoad: PropTypes.func.isRequired,
  isVerifying: PropTypes.bool.isRequired,
}

export default ProfilePhoto
