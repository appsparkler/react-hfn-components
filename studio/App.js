import React from 'react'
import FirebaseFileLink from '@react-hfn-components/FirebaseFileLink'
import FirebaseFileInput from '@react-hfn-components/FirebaseFileInput'
import FirebaseSuperCroppie from '@react-hfn-components/FirebaseSuperCroppie'
import config from './config'
import './styles'

const StudioApp = () => {
  return (
    <div className="ms-Grid" dir="ltr">
      <h3>Firebase File Link</h3>
      <FirebaseFileLink {...config} />
      <h3>Firebase File Input</h3>
      <FirebaseFileInput {...config} />
      <h3>Firebase Super Croppie</h3>
      <FirebaseSuperCroppie {...config} />
    </div>
  )
}

export default StudioApp
