import React from 'react'
import FileInput from '../components/FileInput'
import FirebaseApp from './firebase-app'

export default () => {
  const config = {
    FirebaseApp,
    multiple: true,
  }
  return (<FileInput config={config} />)
}
