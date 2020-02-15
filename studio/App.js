import React from 'react'
import {FileInput} from '@appsparkler/react-hfn-components'
import FirebaseApp from './firebase-app'

// setFirebaseApp(FirebaseApp)
import './styles.sass'

export default () => {
  const storageRef = FirebaseApp.storage().ref('id-proofs')
  const keydx = 'xyz'
  const params = {
    // input-attributes
    className: 'my-special-input-field',

    // Other upload information
    storageRef,

    // Validations
    maxBytes: 5 * 1024 * 1024,
    maxBytesError: 'file exceeds size-limit. please re-try.',
  }

  return (<FileInput key={keydx} {...params} />)
}
