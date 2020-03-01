import React from 'react'
import CroppieInput from './CroppieInput'
import FileInput from './FileInput'
// import PropTypes from 'prop-types'
// import useFirebasePhotoInput from './useFirebasePhotoInput'
import {Context} from './context'
import CurrentPhoto from './CurrentPhoto'
import './styles.sass'

const FirebasePhotoInput = () => {
  const context = React.useContext(Context)
  // const {selectedFile} = superProps
  return (
    <div className="ReactHFN_FirebasePhotoInput">
      <div className="CurrentPhotoAndFileInput col-xs-12 col-sm-5 col-lg-3">
        <CurrentPhoto {...context} />
        <FileInput {...context} />
      </div>
      <div className="row">
        <div className="col-xs-12">
          {context.selectedFile && <CroppieInput {...context}/>}
        </div>
      </div>
    </div>
  )
}

FirebasePhotoInput.defaultProps = {
  // onUpload: () => null,
  // maxBytes: 3 * 1024 * 1024,
  // croppieConfig: {
  //   viewport: {width: 200, height: 200},
  //   boundary: {width: 300, height: 300},
  // },
}

FirebasePhotoInput.propTypes = {
  // onUpload: PropTypes.func,
  // croppieConfig: PropTypes.object,
  // file: PropTypes.object,
  // storageRef: PropTypes.object.isRequired,
}

export default FirebasePhotoInput
