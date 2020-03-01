import React from 'react'
import config from './config'
import {FirebasePhotoInput} from '@appsparkler/react-hfn-components'
import ContextProvider from '@react-hfn-components/FirebasePhotoInput/context'
import './styles.sass'

const StudioApp = () => {
  return (
    <div>
      <ContextProvider {...config}>
        <FirebasePhotoInput />
      </ContextProvider>
    </div>
  )
}

export default StudioApp
