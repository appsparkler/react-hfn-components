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
  } = useMediaSourceForm({setCroppedDataURL, setDataURL})
  return (
    <div>

      <MediaSourceForm
        handleMediaSourceChange={handleMediaSourceChange}
      />

      {(mediaSource === 'file') && (
        <FileInput onDataURL={setDataURL} />
      )}

      {(mediaSource === 'webcam') && (
        <div className="row">
          <div className="col-4">
            <WebCamInput onDataURL={setDataURL} />
          </div>
          <div className="col-6">
            {mediaSource && dataURL && <Croppie
              dataURL={dataURL}
              onCroppieUpdate={setCroppedDataURL}
            />}
          </div>
          <div className="col-2">
            {croppedDataURL && (
              <img className="img-thumbnail" src={croppedDataURL} />
            )}
          </div>
        </div>
      )}

      {(mediaSource === 'file') && (
        <div className="row">
          <div className="col-8">
            {mediaSource && dataURL && <Croppie
              dataURL={dataURL}
              onCroppieUpdate={setCroppedDataURL}
            />}
          </div>
          <div className="col-4">
            {croppedDataURL && (
              <img className="img-thumbnail" src={croppedDataURL} />
            )}
          </div>
        </div>
      )}

    </div>
  )
}

export default FirebaseCroppieWithWebCam
