import React from 'react'
import PropTypes from 'prop-types'
import {connectFirebaseFileLink} from '@appsparkler/react-hfn-components'
import config from './config'

const FirebasePhoto = ({file}) => {
  return (
    <div className="row">
      {file && file.downloadURL && (
        <img className="img-thumbnail" src={file.downloadURL} />
      )}
    </div>
  )
}

FirebasePhoto.propTypes = {
  file: PropTypes.object.isRequired,
}

export default connectFirebaseFileLink(FirebasePhoto, {
  storageRef: config.storageRef,
})
