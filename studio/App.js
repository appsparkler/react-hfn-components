import React from 'react'
import FirebaseFileInput from '@react-hfn-components/FirebaseFileInput'
import config from './config'
import './styles'

const StudioApp = () => {
  return (
    <div className="ms-Grid" dir="ltr">
      <FirebaseFileInput {...config} />
    </div>
  )
}

export default StudioApp
