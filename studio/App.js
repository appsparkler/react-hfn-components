import React from 'react'
import FirebaseFileLink from '@react-hfn-components/FirebaseFileLink'
import config from './config'
import './styles'

const StudioApp = () => {
  return (
    <div className="ms-Grid" dir="ltr">
      <FirebaseFileLink {...config} />
    </div>
  )
}

export default StudioApp
