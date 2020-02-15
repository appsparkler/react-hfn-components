import React from 'react'
import {FileInput, setFirebaseApp} from '@appsparkler/react-hfn-components'
import FirebaseApp from './firebase-app'
setFirebaseApp(FirebaseApp)

export default () => {
  const keydx = 'xyz'
  const params = {

    // input-attributes
    // type: 'file',
    multiple: true,
    className: 'my-special-input-field',

    // Other upload information
    path: '/abhyasiDaya/INAAAB998',

    // Validations
    maxBytes: 50000,
    maxFiles: 5,
    allowedFileTypes: ['png', 'jpg', 'pdf'],
  }

  return (<FileInput key={keydx} {...params} />)
}
