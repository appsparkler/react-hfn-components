import React from 'react'
import PreviewImage from './PreviewImage'
import UploadButton from './UploadButton'
import useCroppieInput from './useCroppieInput'
import 'croppie/croppie.css'

const CroppieInput = (props) => {
  const superProps = useCroppieInput({props})
  const {
    croppieRef,
    photoPreviewRef,
  } = superProps
  return (
    <div
      className="RFHN-Croppie"
    >
      <div>
        <div
          ref={croppieRef}
          className="the-croppie"
        >
        </div>
      </div>
      <PreviewImage {...superProps} />
      {!props.exceedMaxBytes && <UploadButton {...superProps} />}
    </div>
  )
}

export default CroppieInput
