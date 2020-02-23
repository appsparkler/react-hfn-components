import React from 'react'

const Croppie = (props) => {
  const {croppieRef} = props

  return (
    <div className="Croppie col-xs-8">
      <h3>Crop photo:</h3>
      <div
        ref={croppieRef}
        className="the-croppie"
      >
      </div>
    </div>
  )
}

export default Croppie
