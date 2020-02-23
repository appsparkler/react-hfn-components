import React from 'react'
import CroppieInput from './CroppieInput'
import FileInput from './FileInput'
import PropTypes from 'prop-types'
import useFirebasePhotoInput from './useFirebasePhotoInput'
import './styles.sass'

const FirebasePhotoInput = (props) => {
  const superProps = useFirebasePhotoInput({props})
  const {selectedFile} = superProps
  return (
    <div className="FirebasePhotoInput">

      <div className="state">
        <h2>No File Uploaded State</h2>
        <FileInput {...superProps} />
      </div>

      <div className="state">
        <h2>Exceeds MaxBytes</h2>
        {superProps?.exceedsMaxBytes && <p>Exceeds max Bytes...</p>}
      </div>

      <div className="state">
        <h2>Current Photo</h2>
        <img src="https://www.fillmurray.com/120/120" />
      </div>

      <div className="state">
        <h2>Croppie</h2>
        {selectedFile && <CroppieInput {...superProps}/>}
      </div>

    </div>
  )
}

FirebasePhotoInput.defaultProps = {
  onUpload: () => null,
  croppieConfig: {
    viewport: {width: 200, height: 200},
    boundary: {width: 300, height: 300},
  },
}

FirebasePhotoInput.propTypes = {
  onUpload: PropTypes.func,
  croppieConfig: PropTypes.object,

}

export default FirebasePhotoInput
