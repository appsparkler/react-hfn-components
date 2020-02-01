import React from 'react'
import FileInput from '../components/FileInput'
import FirebaseApp from './firebase-app'

export default () => {
  const firebaseStorage = FirebaseApp.storage()
  const config = {
    firebaseStorage,
    multiple: true,
    path: '/abcd/efghijk',
  }
  return (<FileInput config={config} />)
}
