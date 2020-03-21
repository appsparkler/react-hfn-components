import React from 'react'
import PropTypes from 'prop-types'

const WebcamInput = ({videoRef}) => {
  return (
    <div>
      <video ref={videoRef} className="w-100"></video>
    </div>
  )
}

WebcamInput.propTypes = {
  videoRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
}

export default WebcamInput
