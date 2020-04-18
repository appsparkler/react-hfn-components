import React from 'react'
import PropTypes from 'prop-types'
import {
  TextField,
} from 'office-ui-fabric-react'
import useFirebaseSuperCroppie from './useFirebaseSuperCroppie'

const FirebaseSuperCroppie = ({onUpload}) => {
  const {
    browserDetails,
    videoRef, canvasRef,
  } = useFirebaseSuperCroppie({onUpload})
  return (
    <div>
      <video ref={videoRef} playsinline autoPlay />
      <canvas ref={canvasRef} />
      <TextField
        multiline
        autoAdjustHeight
        value={JSON.stringify(browserDetails)}
      />
    </div>
  )
}

FirebaseSuperCroppie.propTypes = {
  onUpload: PropTypes.func.isRequired,
}

FirebaseSuperCroppie.defaultProps = {
  onUpload: () => {},
}

export default FirebaseSuperCroppie
