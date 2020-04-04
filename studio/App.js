import React from 'react'
import FirebaseFileLink from '@react-hfn-components/FirebaseFileLink'
import config from './config'
import './styles'

const StudioApp = () => {
  return (
    <FirebaseFileLink {...config} />
  )
}

export default StudioApp
