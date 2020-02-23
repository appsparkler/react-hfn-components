import React from 'react'
import PropTypes from 'prop-types'

const BSAlert = ({type, message}) => (
  <div className={`alert alert-${type}`}>{message}</div>
)

BSAlert.defaultProps = {
  type: 'primary',
}

BSAlert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string.isRequired,
}

export default BSAlert
