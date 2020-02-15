import React from 'react'
import {FileInput} from '@appsparkler/react-hfn-components'
import FirebaseApp from './firebase-app'

import './styles.sass'

export default () => {
  const storageRef = FirebaseApp.storage().ref('id-proofs')
  const keydx = 'xyz'
  const params = {
    label: 'Id Proofs',
    // input-attributes
    className: 'my-special-input-field',
    onUpload: (...args) => {
      console.log(args)
    },
    required: true,
    readOnly: true,
    // Other upload information
    storageRef,

    // Validations
    maxBytes: 5 * 1024 * 1024,
    maxBytesError: 'file exceeds size-limit. please re-try.',
  }

  return (<FileInput key={keydx} {...params} />)
}
