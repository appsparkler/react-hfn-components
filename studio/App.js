import React from 'react'
// import CustomCroppie from './custom-components/FirebaseCroppieWithWebCam/V4'
import UploadButton from './UploadButton'
import {croppedDataURL} from './data'
import {storageRef} from './config'
import useUploadButton from './useUploadButton'
import './styles.sass'

const StudioApp = () => {
  const [isUploading, setIsUploading] = React.useState(false)
  const [uploaded, setUploaded] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const {
    handleUploadButtonClick,
  } = useUploadButton({
    croppedDataURL, storageRef, setIsUploading,
    setProgress, setUploaded,
  })
  return (
    <div className="container mt-5">
      <UploadButton
        onClick={handleUploadButtonClick}
        disabled={isUploading}
      />
      <pre>{progress}%</pre>
      <pre>{uploaded && 'uploaded!'}</pre>
      <pre>{isUploading && 'is uploading...'}</pre>
    </div>
  )
}

export default StudioApp
