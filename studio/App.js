import React from 'react'
import FirebaseFileInput from './custom-components/FirebaseFileInput'
import config from './config'
import './styles'

const StudioApp = () => {
  return (
    <div className="container mt-5">
      <FirebaseFileInput {...config} />
    </div>)
}

export default StudioApp
