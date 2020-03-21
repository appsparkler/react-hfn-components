import React from 'react'
import FirebaseCroppieWithWebCam
  from './custom-components/FirebaseCroppieWithWebCam/variant-1'
import config from './config'
import './styles'

const StudioApp = () => {
  return (
    <div className="container mt-5">
      <FirebaseCroppieWithWebCam {...config} />
    </div>)
}

export default StudioApp
