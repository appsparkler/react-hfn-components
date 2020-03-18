import React from 'react'
import CustomCroppie from './custom-components/FirebaseCroppieWithWebCam/V4'
import './styles.sass'

const StudioApp = () => {
  return (
    <div className="container">
      <CustomCroppie />
    </div>
  )
}

export default StudioApp
