import React from 'react'
import FirebaseCroppieWithWebCam
  from '@react-hfn-components/FirebaseFileInput'
import config from './config'
import './styles'

const StudioApp = () => {
  return (
    <div className="container mt-5">
      <FirebaseCroppieWithWebCam {...config} />
    </div>)
}

export default StudioApp
