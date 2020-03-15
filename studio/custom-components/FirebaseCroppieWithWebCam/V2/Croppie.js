import React from 'react'
import PropTypes from 'prop-types'
import useCroppie from './useCroppie'

const Croppie = ({dataURL}) => {
  const {croppieRef} = useCroppie({dataURL})
  return (
    <div>
      <div ref={croppieRef}></div>
    </div>
  )
}

Croppie.propTypes = {
  dataURL: PropTypes.string.isRequired,
}

export default Croppie
