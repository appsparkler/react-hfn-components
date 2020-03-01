import React from 'react'
// import config from './config'
// import {FirebasePhotoInput} from '@appsparkler/react-hfn-components'
import Test from '@react-hfn-components/Test'
import './styles.sass'

const StudioApp = () => {
  return (
    <div>
      <Test initialCount={12} />
      <Test initialCount={20} />
      <Test initialCount={-20} />
    </div>
  )
}

export default StudioApp
