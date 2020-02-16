import React from 'react'
import {FirebaseFileInput} from '@appsparkler/react-hfn-components'
import FirebaseApp from './firebase-app'
import './styles.sass'

export default () => {
  const storageRef = FirebaseApp.storage().ref('id-proofs/abc')

  const readOnlyParams = {
    label: 'Id Proofs',
    readOnly: true,
    file: {
      downloadURL: 'https://placehold.it/120x120',
      fileName: 'passport.jpg',
      filePath: '/id-proofs/INA33939',
      contentType: 'content/jpg',
      bytes: 19393,
    },
  }

  const editableVersionParams = {
    label: 'Id Proofs',
    // disabled: true,
    readOnly: false,
    // file: {
    //   downloadURL: 'https://placehold.it/120x120',
    //   fileName: 'passport.jpg',
    //   filePath: '/id-proofs/INA33939',
    //   contentType: 'content/jpg',
    //   bytes: 19393,
    // },
    required: true,
    // Other upload information
    storageRef,

    // Validations
    maxBytes: .1 * 1024 * 1024,
    maxBytesError: 'file exceeds size-limit. please re-try.',
  }

  return (
    <>
      {/*  <h3>Read Only Version</h3>
      <FirebaseFileInput {...readOnlyParams} />*/}

      <h3>Editable Version</h3>
      <FirebaseFileInput {...editableVersionParams} />
    </>
  )
}

// export default () => {
//   const storageRef = FirebaseApp.storage().ref('id-proofs/abc')
//   const keydx = 'xyz'
//   const params = {
//     label: 'Id Proofs',
//     // input-attributes
//     className: 'my-special-input-field',
//     onUpload: (files) => {
//       if (files && files.length) {
//         debugger
//       }
//     },
//     required: true,
//     readOnly: true,
//     // Other upload information
//     storageRef,
//
//     // Validations
//     maxBytes: 5 * 1024 * 1024,
//     maxBytesError: 'file exceeds size-limit. please re-try.',
//   }
//
//   return (<FileInput key={keydx} {...params} />)
// }
