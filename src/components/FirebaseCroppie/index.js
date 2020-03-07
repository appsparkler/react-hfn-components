import React from 'react'
import CroppieInput from './CroppieInput'
import FileInput from './FileInput'
import {FirebasePhotoInputContext} from './context'
import CurrentPhoto from './CurrentPhoto'
import './styles.sass'

const FirebasePhotoInput = () => {
  const context = React.useContext(FirebasePhotoInputContext)
  return (
    <div className="ReactHFN_FirebasePhotoInput">
      <div className="CurrentPhotoAndFileInput col-xs-12 col-sm-5 col-lg-3">
        <CurrentPhoto {...context} />
        <FileInput {...context}/>
      </div>
      <div className="row">
        <div className="col-xs-12">
          {context.selectedFile && <CroppieInput {...context} />}
        </div>
      </div>
    </div>
  )
}

FirebasePhotoInput.defaultProps = {}

FirebasePhotoInput.propTypes = {}

export default FirebasePhotoInput
