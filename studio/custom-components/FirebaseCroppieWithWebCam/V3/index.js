import React from 'react'
import PropTypes from 'prop-types'
import config from './config'
import connectFirebaseSuperCroppie from './connectFirebaseSuperCroppie'

const FirebaseSuperCroppie = ({file}) => {
  return (
    <div className="container">
      <div className="row">
        {file.downloadURL && <img className="img-tumbnail"
          src={file.downloadURL}
        />}
        {!file.downloadURL && <span>No File Uploaded</span>}
      </div>
    </div>
  )
}

FirebaseSuperCroppie.propTypes = {
  file: PropTypes.object,
}

export default connectFirebaseSuperCroppie({
  Component: FirebaseSuperCroppie,
  config: config,
})
