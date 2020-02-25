import React from 'react'
import {FirebaseFileInput/* , FirebasePhotoInput*/} from '@appsparkler/react-hfn-components'
import FirebaseApp from './firebase-app'
import './styles.sass'

// export default () => {
//   const storageRef = FirebaseApp.storage().ref('abhyasi/profile/pic3')
//   const croppieConfig = {
//     viewport: {width: 200, height: 200},
//     boundary: {width: 300, height: 300},
//   }
//   const params = {
//     croppieConfig,
//     maxBytes: 3 * 1024 * 1024,
//     storageRef,
//     onUpload: (payload) => console.log(payload),
//   }
//   return (<div className="container">
//     <FirebasePhotoInput {...params} />
//   </div>)
// }


export default () => {
  const storageRef = FirebaseApp.storage().ref('id-proofs/abc')
  const [file, setFile] = React.useState({
    fileName: 'abc',
    bytes: 426,
    fullPath: 'id-proofs/abc',
    contentType: 'text/javascript',
    downloadUrl: 'https://firebasestorage.googleapis.com/v0/b/hfnforms-1de6a.appspot.com/o/id-proofs%2Fabc?alt=media&token=a2da51f1-b991-4e11-9d07-9e38bf89ed2b',
  })

  const readOnlyParams = {
    readOnly: true,
    file,
    setFile,
    storageRef,
  }

  const editableVersionParams = {
    label: 'Id Proofs',
    // disabled: true,
    readOnly: false,
    required: true,

    // file-related params
    file,
    setFile,
    storageRef,

    // methods
    onUpload: (uploadedFile) => {
      console.log(uploadedFile)
    },

    // Validations
    maxBytes: .01 * 1024 * 1024,
    maxBytesError: 'file exceeds size-limit. please re-try.',
    maxBytesInfoMessage: 'max bytes : ',
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-3">

          <h3>Read Only Version</h3>
          <FirebaseFileInput {...readOnlyParams} />

          <h3>Editable Version</h3>
          <FirebaseFileInput {...editableVersionParams} />
          
        </div>
      </div>
    </div>
  )
}
