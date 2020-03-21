import React from 'react'
import FirebaseSuperCroppie
  from './custom-components/FirebaseCroppieWithWebCam/variant-1'
import config from './config'
import './styles'

const StudioApp = () => {
  return (<FirebaseSuperCroppie {...config} />)
}

export default StudioApp
