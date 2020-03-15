import React from 'react'
import FileInput from './FileInput'
import WebCamInput from './WebCamInput'
import MediaSourceForm from './MediaSourceForm'
import Croppie from './Croppie'
import useMediaSourceForm from './useMediaSourceForm'
import useFirebaseCroppieWithWebcam from './useFirebaseCroppieWithWebcam'
import 'croppie/croppie.css'

const FirebaseCroppieWithWebCam = () => {
  const {
    dataURL, setDataURL,
    croppedDataURL, setCroppedDataURL,
  } = useFirebaseCroppieWithWebcam()
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
      {mediaSource && dataURL && <Croppie
        dataURL={dataURL}
        onCroppieUpdate={setCroppedDataURL}
      />}
      {croppedDataURL && (
        <div >
          <img className="img-thumbnail" src={croppedDataURL} />
        </div>
      )}
    </div>
  )
}

export default FirebaseCroppieWithWebCam
