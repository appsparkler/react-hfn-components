import React from 'react'


const Croppie = (props) => {
  const {croppieRef} = props

  return (
    <div className="Croppie">
      <div
        ref={croppieRef}
        className="the-croppie"
      >
      </div>
    </div>
  )
}
