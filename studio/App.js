import React from 'react'
// import CustomCroppie from './custom-components/FirebaseCroppieWithWebCam/V4'
import UploadButton from './UploadButton'
import {croppedDataURL} from './data'
import {storageRef} from './config'
import useUploadButton from './useUploadButton'
import './styles.sass'

const StudioApp = () => {
  const [isVerifying, setIsVerifying] = React.useState(false)
  const {
    handleUploadButtonClick,
  } = useUploadButton({
    croppedDataURL, storageRef, setIsVerifying,
  })
  return (
    <div className="container mt-5">
      <UploadButton
        onClick={handleUploadButtonClick}
        disabled={isVerifying}
      />
    </div>
  )
}

export default StudioApp
