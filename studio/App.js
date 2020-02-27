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


const StudioApp = () => {
  const storageRef = FirebaseApp.storage().ref('id-proofs/abc')
  const [file, setFile] = React.useState()

  const readOnlyParams = {
    readOnly: true,
    file,
    setFile,
    storageRef,
  }

  const CustomFileInput = (props, ref) => (
    <div><h1>Custom File Input</h1><input {...props} ref={ref} /></div>
  )

  const components = {
    fileInput: React.forwardRef(CustomFileInput),
  }

  const editableVersionParams = {
    // OPTIONAL PARAMETERS
    components,

    // REQUIRED PARAMETERS

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

export default StudioApp
