import React from 'react'
import PropTypes from 'prop-types'
import useFirebasePhoto from './useFirebasePhoto'

const FirebasePhoto = ({storageRef}) => {
  const {file} = useFirebasePhoto({storageRef})
  return (
    <div className="row">
      {file && file.downloadURL && (
        <img className="img-thumbnail" src={file.downloadURL} />
      )}
    </div>
  )
}

FirebasePhoto.propTypes = {
  storageRef: PropTypes.object.isRequired,
}

export default FirebasePhoto
