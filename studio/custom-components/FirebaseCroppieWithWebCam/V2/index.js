import React from 'react'
import FileInput from './FileInput'
import WebCamInput from './WebCamInput'
import MediaSourceForm from './MediaSourceForm'
import Croppie from './Croppie'
import useMediaSourceForm from './useMediaSourceForm'
import 'croppie/croppie.css'

const FirebaseCroppieWithWebCam = () => {
  const [dataURL, setDataURL] = React.useState(null)
  const {
    handleMediaSourceChange, mediaSource,
  } = useMediaSourceForm()
  return (
    <div>
      <MediaSourceForm
        handleMediaSourceChange={handleMediaSourceChange}
      />
      {(mediaSource === 'file') && (
        <FileInput onDataURL={setDataURL} />
      )}
      {(mediaSource === 'webcam') && <WebCamInput />}
      {mediaSource && dataURL && <Croppie dataURL={dataURL} />}
    </div>
  )
}

export default FirebaseCroppieWithWebCam
