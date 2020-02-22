import React from 'react'
import CroppieInput from './CroppieInput'
import FileInput from './FileInput'
import useFirebasePhotoInput from './useFirebasePhotoInput'
import './styles.sass'

const FirebasePhotoInput = ({props}) => {
  const superProps = useFirebasePhotoInput({props})
  return (
    <div className="FirebasePhotoInput">

      <div className="state">
        <h2>No File Uploaded State</h2>
        <FileInput {...superProps} />
      </div>

      <div className="state">
        <h2>Current Photo</h2>
        <img src="http://via.placeholder.com/120x120" />
      </div>

      <div className="state">
        <h2>Croppie</h2>
        <CroppieInput />
      </div>

    </div>
  )
}

export default FirebasePhotoInput