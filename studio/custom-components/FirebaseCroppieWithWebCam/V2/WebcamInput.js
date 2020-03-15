import React from 'react'
import PropTypes from 'prop-types'
import useWebCam from './useWebCam'

const WebCamInput = ({onDataURL}) => {
  const {
    videoRef,
    clickPhoto,
  } = useWebCam({onDataURL})
  return (
    <div>
      <div className="img-thumbnail rounded-0">
        <video className="w-100"
          ref={videoRef}
        >
        Video stream not available.
        </video>
      </div>
      <div className="mt-2">
        <button
          className="btn btn-block btn-primary rounded-0"
          type="button"
          onClick={clickPhoto}
        >
          Take photo
        </button>
      </div>
    </div>
  )
}

WebCamInput.propTypes = {
  onDataURL: PropTypes.func.isRequired,
}

WebCamInput.defaultProps = {
  onDataURL: () => {},
}

export default WebCamInput
