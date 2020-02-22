import React from 'react'
import useCroppieInput from './useCroppieInput'
import 'croppie/croppie.css'

const CroppieInput = (props) => {
  const {
    croppieRef,
    photoPreviewRef,
  } = useCroppieInput({props})
  return (
    <div
      className="RFHN-Croppie"
    >
      <div>
        <div
          ref={croppieRef}
          className="the-croppie"
        >
        </div>
      </div>
      <div>
        <h2>Preview Image</h2>
        <img ref={photoPreviewRef} />
      </div>
    </div>
  )
}

export default CroppieInput
