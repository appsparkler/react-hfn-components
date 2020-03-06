import React from 'react'
import PropTypes from 'prop-types'

import config from './config'
import {
  connectFirebaseFileLink, FirebaseFileLinkContext,
} from '@appsparkler/react-hfn-components'
import './styles.sass'

export default connectFirebaseFileLink(
    CustomFirebaseFileLink,
    config,
)

function CustomFirebaseFileLink() {
  const {
    file,
    isVerifying,
  } = React.useContext(FirebaseFileLinkContext)
  return (
    <div>
      {isVerifying && 'Verifying...'}
      {file && <div>
        <a href={file.downloadURL}>{file.fileName}</a>
      </div>}
    </div>
  )
}

CustomFirebaseFileLink.propTypes = {
  file: PropTypes.object,
}
