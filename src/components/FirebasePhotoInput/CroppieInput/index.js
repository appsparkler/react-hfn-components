import React from 'react'
import PreviewImage from './PreviewImage'
import UploadButton from './UploadButton'
import Croppie from './Croppie'
import ProgressBar from './ProgressBar'
import useCroppieInput from './useCroppieInput'
import 'croppie/croppie.css'

const CroppieInput = (props) => {
  const superProps = useCroppieInput({props})
  return (
    <div
      className="RFHN-Croppie"
    >
      <Croppie {...superProps} />
      <pre>{ props.isUploading.toString() }</pre>
      <PreviewImage {...superProps} />
      {!props.exceedMaxBytes && <UploadButton {...superProps} />}
      {props.isUploading && <ProgressBar {...superProps} /> }
      {props.exceedsMaxBytes && <p className="">Exceeds Max Bytes</p>}
      {props.uploaded && <p className="">Profile Picture Updated</p>}
    </div>
  )
}

export default CroppieInput
