import React from 'react'
import FirebaseFileInput from '@react-hfn-components/FirebaseFileInput'
import config from './config'
import './styles'

const StudioApp = () => {
  return (
    <FirebaseFileInput {...config} />
  )
}

export default StudioApp
