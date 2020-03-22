import React from 'react'
import PropTypes from 'prop-types'
import FirebaseFileLink from './main'
import useFirebaseFileInput from './useFirebaseFileInput'

const FirebaseFileInput = ({storageRef}) => {
  const config = useFirebaseFileInput({storageRef})
  return (
    <FirebaseFileLink {...config} />
  )
}

FirebaseFileInput.propTypes = {
  storageRef: PropTypes.object.isRequired,
}

export default FirebaseFileInput
