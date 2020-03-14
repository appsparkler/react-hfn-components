import React from 'react'
import FileInput from './FileInput'
import {connectFirebaseCroppie} from '@appsparkler/react-hfn-components'
import CroppieInput from './CroppieInput'
import CurrentPhoto from './CurrentPhoto'
import config from './config'
import 'croppie/croppie.css'

const CroppieCustomComponents = ({...context}) => {
  return (
    <div className="ReactHFN_FirebasePhotoInput">
      <div className="CurrentPhotoAndFileInput col-xs-12 col-sm-5 col-lg-3">
        <CurrentPhoto {...context} />
        <FileInput {...context}/>
      </div>
      <div className="row">
        <div className={
          `${context.uploaded ? 'psudo-hide': undefined} col-xs-12`}
        >
          {context?.selectedFile && <CroppieInput {...context} />}
        </div>
      </div>
    </div>
  )
}

export default connectFirebaseCroppie(CroppieCustomComponents, config)
