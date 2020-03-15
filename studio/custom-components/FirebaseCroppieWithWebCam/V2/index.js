import React from 'react'
import FileInput from './FileInput'
import WebCamInput from './WebCamInput'
import MediaSourceForm from './MediaSourceForm'
import Croppie from './Croppie'
import useMediaSourceForm from './useMediaSourceForm'
import 'croppie/croppie.css'

const FirebaseCroppieWithWebCam = () => {
  const {
    handleMediaSourceChange, mediaSource,
  } = useMediaSourceForm()
  return (
    <div>
      <MediaSourceForm
        handleMediaSourceChange={handleMediaSourceChange}
      />
      {(mediaSource === 'file') && <FileInput />}
      {(mediaSource === 'webcam') && <WebCamInput />}
      {mediaSource && <Croppie />}
    </div>
  )
}

export default FirebaseCroppieWithWebCam
