import React from 'react'
import FileInput from './FileInput'
import WebCamInput from './WebCamInput'
import MediaSourceForm from './MediaSourceForm'
import useMediaSourceForm from './useMediaSourceForm'

const FirebaseCroppieWithWebCam = () => {
  const {
    handleMediaSourceChange, mediaSource,
  } = useMediaSourceForm()
  return (
    <div>
      <MediaSourceForm handleMediaSourceChange={handleMediaSourceChange}/>
      {(mediaSource === 'file') && <FileInput />}
      {(mediaSource === 'webcam') && <WebCamInput />}
    </div>
  )
}

export default FirebaseCroppieWithWebCam
