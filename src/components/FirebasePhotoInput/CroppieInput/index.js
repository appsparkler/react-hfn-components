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
      <PreviewImage {...superProps} />
      {!props.exceedMaxBytes && <UploadButton {...superProps} />}
      {props.isUploading && <ProgressBar {...superProps} /> }
      {props.exceedsMaxBytes && <p className="">Exceeds Max Bytes</p>}
      {props.uploaded && <pre className="">Done...</pre>}
    </div>
  )
}

export default CroppieInput
