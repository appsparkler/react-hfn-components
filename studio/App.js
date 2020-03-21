import React from 'react'
import FirebaseFileLink
  from '@react-hfn-components/FirebaseFileLink'
import config from './config'
import './styles'

const StudioApp = () => {
  return (
    <div className="container mt-5">
      <FirebaseFileLink {...config} />
    </div>)
}

export default StudioApp
