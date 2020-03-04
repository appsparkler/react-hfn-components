import React from 'react'
import {
  FirebasePhotoInputContext,
} from '@react-hfn-components/FirebasePhotoInput/context'
import Croppie from './Croppie'
import CurrentPhoto from './CurrentPhoto'
import FileInput from './FileInput'
// import PreviewImage from './PreviewImage'
// import UploadButton from './UploadButton'
// import ProgressBar from './ProgressBar'

const CroppieCustomComponents = () => {
  const context = React.useContext(FirebasePhotoInputContext)
  return (
    <div className="ReactHFN_FirebasePhotoInput">
      <div className="CurrentPhotoAndFileInput col-xs-12 col-sm-5 col-lg-3">
        <CurrentPhoto {...context} />
        <FileInput {...context}/>
      </div>
      <div className="row">
        <div className="col-xs-12">
          {context?.selectedFile && <Croppie {...context} />}
        </div>
      </div>
    </div>
  )
}

export default CroppieCustomComponents
