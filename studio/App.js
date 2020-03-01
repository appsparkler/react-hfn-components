import React from 'react'
import config from './config'
import {FirebasePhotoInput} from '@appsparkler/react-hfn-components'
import './styles.sass'

const StudioApp = () => {
  return (
    <div>
      <FirebasePhotoInput {...config} />
    </div>
  )
}

export default StudioApp
