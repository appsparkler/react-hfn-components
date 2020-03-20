import React from 'react'
import PropTypes from 'prop-types'

const WebcamInput = ({videoRef}) => {
  return (
    <div>
      <div ref={videoRef}></div>
    </div>
  )
}

WebcamInput.propTypes = {
  videoRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
}

export default WebcamInput
