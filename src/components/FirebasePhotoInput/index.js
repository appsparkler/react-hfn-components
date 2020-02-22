import React from 'react'
import CroppieInput from '@react-hfn-components/CroppieInput'
import './styles.sass'

const FirebasePhotoInput = () => {
  return (
    <div className="FirebasePhotoInput">

      <div className="state">
        <h2>No File Uploaded State</h2>
        <div className="FileInput">
          <label>
            <span className="label-text">Upload Photo</span>
            <span className="required-asterix"> *</span>
            <br />
            <input type="file" />
          </label>
        </div>
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
