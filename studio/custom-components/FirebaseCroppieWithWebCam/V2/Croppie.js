import React from 'react'
import useCroppie from './useCroppie'

const Croppie = ({}) => {
  const {croppieRef} = useCroppie()
  return (
    <div>
      <div ref={croppieRef}></div>
    </div>
  )
}

export default Croppie
