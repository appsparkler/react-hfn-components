import React from 'react'
import PropTypes from 'prop-types'

const FirebaseFileInput = ({storageRef}) => (
  <div>
    <input type="file" />
  </div>
)

FirebaseFileInput.propTypes = {
  storageRef: PropTypes.object.isRequired,
}

export default FirebaseFileInput
