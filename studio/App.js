import React from 'react'
import config from './config'
import FirebasePhotoInputContextProvider
  from '@react-hfn-components/FirebasePhotoInput/context'
import CroppieCustomComponents from './custom-components'
import './styles.sass'

const StudioApp = () => {
  return (
    <div>
      <FirebasePhotoInputContextProvider {...config}>
        <CroppieCustomComponents />
      </FirebasePhotoInputContextProvider>
    </div>
  )
}

export default StudioApp
