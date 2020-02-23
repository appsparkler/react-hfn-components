import React from 'react'
import PropTypes from 'prop-types'

const ProgressBar = ({progress}) => (
  <div className="ProgressBar">
    <progress min="0" max="100" value={progress} />
    <br />
    <pre>{progress?.toFixed(2)}%</pre>
  </div>
)

ProgressBar.propTypes = {
  progress: PropTypes.number,
}

export default ProgressBar
