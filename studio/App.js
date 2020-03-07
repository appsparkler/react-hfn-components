import React from 'react'
import PropTypes from 'prop-types'

import config from './config'
import {
  connectFirebaseFileLink,
} from '@appsparkler/react-hfn-components'
import './styles.sass'

export default connectFirebaseFileLink(
    CustomFirebaseFileLink,
    config,
)

function CustomFirebaseFileLink({file, isVerifying}) {
  return (
    <div className="container">
      {isVerifying && 'Verifying...'}
      {
        file && (
          <a
            href={file.downloadURL}
            target="__blank"
          >
            {file.fileName}
          </a>
        )
      }
      {!file && !isVerifying && 'No File Found...'}
    </div>
  )
}

CustomFirebaseFileLink.propTypes = {
  file: PropTypes.object,
  isVerifying: PropTypes.bool,
}
