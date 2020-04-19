import React from 'react'
import PropTypes from 'prop-types'
import {Stack, Image} from 'office-ui-fabric-react'

const ProfilePhoto = ({src}) => (
  <Stack.Item>
    <Image
      width="100%"
      height="100%"
      src={src}
    />
  </Stack.Item>
)

ProfilePhoto.propTypes = {
  src: PropTypes.string.isRequired,
}

export default ProfilePhoto
