import React from 'react'
import CustomCroppie from './custom-components/FirebaseCroppieWithWebCam/V2'
import ContextProvider
  from
  '@react-hfn-studio/custom-components/FirebaseCroppieWithWebCam/V2/context'
import config from './config'
import './styles.sass'

const StudioApp = () => {
  return (
    <ContextProvider {...config}>
      <div className="container">
        <CustomCroppie />
      </div>
    </ContextProvider>
  )
}

export default StudioApp
