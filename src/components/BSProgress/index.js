import React from 'react'
import PropTypes from 'prop-types'

const BSProgress = ({progress}) => (
  <div className="progress">
    <div
      className="progress-bar"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{width: `${progress}%`}}
    >
      <span className="sr-only">{progress}% Complete</span>
    </div>
  </div>
)

BSProgress.propTypes = {
  progress: PropTypes.number.isRequired,
}

export default BSProgress
