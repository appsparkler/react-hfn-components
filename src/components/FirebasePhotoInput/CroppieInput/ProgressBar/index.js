import React from 'react'
import PropTypes from 'prop-types'

const ProgressBar = ({progress}) => (
  <div className="ProgressBar">
    <progress min="0" max="100" value={progress} />
    <br />
    <pre>{progress?.toFixed(2)}%</pre>

    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{width: `${progress || 10}%`}}
      >
        <span className="sr-only">{progress || 10}% Complete</span>
      </div>
    </div>
  </div>
)

ProgressBar.propTypes = {
  progress: PropTypes.number,
}

export default ProgressBar
