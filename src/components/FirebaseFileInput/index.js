import React from 'react'
import PropTypes from 'prop-types'
import FirebaseFileInput from './main'
import useFirebaseFileInput from './useFirebaseFileInput'

const UsedFirebaseFileInput = ({storageRef}) => {
  const config = useFirebaseFileInput({storageRef})
  return (
    <FirebaseFileInput {...config} />
  )
}

UsedFirebaseFileInput.propTypes = {
  storageRef: PropTypes.object.isRequired,
}

export default UsedFirebaseFileInput
