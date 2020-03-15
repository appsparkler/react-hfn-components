import React from 'react'
import FileInput from './FileInput'
import WebCamInput from './WebCamInput'
import MediaSourceForm from './MediaSourceForm'
import Croppie from './Croppie'
import UploadButton from './UploadButton'
import ProgressBar from './ProgressBar'
import useMediaSourceForm from './useMediaSourceForm'
import useFirebaseCroppieWithWebcam from './useFirebaseCroppieWithWebcam'
import config from './config'
import 'croppie/croppie.css'

const FirebaseCroppieWithWebCam = () => {
  const {storageRef, maxBytes} = config
  const {
    dataURL, setDataURL,
    croppedDataURL, setCroppedDataURL,
    progress, setProgress,
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
              <div>
                <img className="img-thumbnail" src={croppedDataURL} />
                <div className="mt-2">
                  <UploadButton
                    croppedDataURL={croppedDataURL}
                    storageRef={storageRef}
                    maxBytes={maxBytes}
                    onProgress={setProgress}
                  />
                </div>
                <div className="mt-2">
                  <ProgressBar progress={progress} />
                </div>
              </div>
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
              <div className>
                <img
                  className="img-thumbnail rounded-0"
                  src={croppedDataURL}
                />
                <div className="mt-2">
                  <UploadButton
                    croppedDataURL={croppedDataURL}
                    storageRef={storageRef}
                    maxBytes={maxBytes}
                    onProgress={setProgress}
                  />
                </div>
                <div className="mt-2">
                  <ProgressBar progress={progress} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  )
}

export default FirebaseCroppieWithWebCam
