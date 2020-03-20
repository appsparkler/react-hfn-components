import React from 'react'
import PropTypes from 'prop-types'

const WebcamInput = ({videoRef}) => (
  <div>WIP...</div>
)

WebcamInput.propTypes = {
  videoRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
}

export default WebcamInput
