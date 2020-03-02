import React from 'react'
import PropTypes from 'prop-types'

const CroppieComponent = (props) => {
  const {croppieRef} = props
  return (
    <div className="Croppie col-xs-8">
      <h3 className="text-center text-muted">Crop photo</h3>
      <div
        ref={croppieRef}
        className="the-croppie"
      >
      </div>
    </div>
  )
}

CroppieComponent.propTypes = {
  croppieRef: PropTypes.object,
}

export default CroppieComponent
