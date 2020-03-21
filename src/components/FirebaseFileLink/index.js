import React from 'react'
import PropTypes from 'prop-types'
import useFirebaseFileLink from './useFirebaseFileLink'

const FirebaseFileLink = ({storageRef}) => {
  const {file, isVerifying} = useFirebaseFileLink({storageRef})
  return (
    <div className="row">
      {isVerifying && '...isVerifying'}
      {file && <a href={file?.downloadURL}>{file?.name}</a>}
    </div>
  )
}

FirebaseFileLink.propTypes = {
  storageRef: PropTypes.object.isRequired,
}

export default FirebaseFileLink
