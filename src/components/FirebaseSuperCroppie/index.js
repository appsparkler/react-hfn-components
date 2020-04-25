import React from 'react'
import PropTypes from 'prop-types'
import {
  Stack,
} from 'office-ui-fabric-react'
import ProfilePhoto from './ProfilePhoto'
import PhotoProcessModal from './PhotoProcessModal'

const FirebaseSuperCroppie = () => {
  return (
    <Stack
      horizontalAlign="center"
      vertical
      gap="20"
      wrap
    >
      <ProfilePhoto />
      <PhotoProcessModal />
    </Stack>
  )
}

FirebaseSuperCroppie.propTypes = {
  onUpload: PropTypes.func.isRequired,
}

FirebaseSuperCroppie.defaultProps = {
  onUpload: () => {},
}

export default FirebaseSuperCroppie
