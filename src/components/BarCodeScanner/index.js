import React from 'react'
import PropTypes from 'prop-types'

const BarCodeScanner = ({storageRef}) => (
  <div>The BarCodeScanner</div>
)

BarCodeScanner.propTypes = {
  storageRef: PropTypes.object.isRequired,
}

export default BarCodeScanner
