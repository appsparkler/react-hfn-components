import React from 'react'
import {
  FirebasePhotoInputContext,
} from '@react-hfn-components/FirebasePhotoInput/context'
import CroppieInput from './CroppieInput'
import CurrentPhoto from './CurrentPhoto'
import FileInput from './FileInput'

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
          {context?.selectedFile && <CroppieInput {...context} />}
        </div>
      </div>
    </div>
  )
}

export default CroppieCustomComponents
