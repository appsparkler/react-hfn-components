import React from 'react'
import {FirebaseFileInput} from '@appsparkler/react-hfn-components'
import FirebaseApp from './firebase-app'
import './styles.sass'
import {readOnlyParams, editableVersionParams} from './config'

const StudioApp = () => {
  const storageRef = FirebaseApp.storage().ref('id-proofs/abc')
  const [file, setFile] = React.useState()
  Object.assign(readOnlyParams, {
    storageRef, file, setFile,
  })
  Object.assign(editableVersionParams, {
    storageRef, file, setFile,
  })
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-3">

          <div className="well well-md">
            <h3>Read Only Version</h3>
            <FirebaseFileInput {...readOnlyParams} />
          </div>

          <div className="well well-md">
            <h3>Editable Version</h3>
            <FirebaseFileInput {...editableVersionParams} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudioApp
