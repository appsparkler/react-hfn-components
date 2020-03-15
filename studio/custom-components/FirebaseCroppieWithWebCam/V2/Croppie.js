import React from 'react'
import PropTypes from 'prop-types'
import useCroppie from './useCroppie'

const Croppie = ({dataURL, croppieConfig}) => {
  const {croppieRef} = useCroppie({dataURL, croppieConfig})
  return (
    <div>
      <div ref={croppieRef}></div>
    </div>
  )
}

Croppie.propTypes = {
  dataURL: PropTypes.string.isRequired,
  croppieConfig: PropTypes.object,
}

Croppie.defaultProps = {
  croppieConfig: {
    viewport: {width: 100, height: 100},
    boundary: {width: 300, height: 300},
  },
}

export default Croppie
