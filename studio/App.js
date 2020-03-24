import React from 'react'
// import FirebaseSuperCroppie
//   from '@react-hfn-components/FirebaseSuperCroppie'
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
