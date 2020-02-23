import React from 'react'
import PreviewImage from './PreviewImage'
import UploadButton from './UploadButton'
import Croppie from './Croppie'
import ProgressBar from './ProgressBar'
import BSAlert from '@react-hfn-components/BSAlert'
import useCroppieInput from './useCroppieInput'
import 'croppie/croppie.css'

const CroppieInput = (props) => {
  const superProps = useCroppieInput({props})
  return (
    <div
      className="RFHN-Croppie col-xs-12"
    >
      <Croppie {...superProps} />
      <div className="PreviewAndUpload">
        <PreviewImage {...superProps} />
        {!props.exceedMaxBytes && <UploadButton {...superProps} />}
        <br />
        {props.isUploading && <ProgressBar {...superProps} /> }
        {props.exceedsMaxBytes && <p className="">Exceeds Max Bytes</p>}
        {props.uploaded && <BSAlert type="success" message="Done..." />}
      </div>
    </div>
  )
}

export default CroppieInput
