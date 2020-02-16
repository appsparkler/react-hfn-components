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
    onUpload: ({props, states}) => {
      const {uploadDetails} = states
      if (uploadDetails && uploadDetails.length) {
        const uploadTasks = uploadDetails.map((item) => item.uploadTask)
        console.log('upload tasks: ', uploadTasks)
        uploadTasks.forEach((task) => {
          task.on(
              'state_changed',
              (snapshot) => console.log(snapshot),
              (err) => conosle.log('upload-error', err),
              () => console.log('upload-complete'),
          )
        })
        const snapshots = uploadTasks.map((item)=> item.snapshot)
        snapshots.forEach((snapshot) => {
          console.log('snapshot : ', snapshot)
          const ref = snapshot.ref
          console.log('ref : ', ref)
          const downloadURL = ref.getDownloadURL()
          downloadURL.then((url) => {
            console.log('download-url: ', url)
          })
        })
      }
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
