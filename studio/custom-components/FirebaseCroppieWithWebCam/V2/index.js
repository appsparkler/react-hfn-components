import React from 'react'
import FileInput from './FileInput'
import WebCamInput from './WebCamInput'
import MediaSourceForm from './MediaSourceForm'
import Croppie from './Croppie'
import UploadButton from './UploadButton'
import ProgressBar from './ProgressBar'
import FirebasePhoto from './FirebasePhoto'
import useFirebaseCroppieWithWebcam from './useFirebaseCroppieWithWebcam'
import config from './config'
import 'croppie/croppie.css'

const FirebaseCroppieWithWebCam = () => {
  const {storageRef, maxBytes} = config
  const {
    dataURL, setDataURL,
    croppedDataURL, setCroppedDataURL,
    progress, setProgress,
    uploaded, setUploaded,
    handleUploadButtonClick,
    handleMediaSourceChange,
    mediaSource, isUploading,
    handleUploadProgress, handleUploadDone,
  } = useFirebaseCroppieWithWebcam()

  return (
    <div>

      {!isUploading && <FirebasePhoto storageRef={storageRef} />}
      {isUploading && <span className="small">Uploading...</span>}

      <MediaSourceForm
        onMediaSourceChange={handleMediaSourceChange}
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
                    onProgress={handleUploadProgress}
                    onDone={handleUploadDone}
                    onClick={handleUploadButtonClick}
                  />
                </div>
                <div className="mt-2">
                  {!uploaded && (
                    <ProgressBar progress={progress} />
                  )}
                  {uploaded && (
                    <div className="alert alert-success overflow-hidden">
                      Uploaded...
                    </div>
                  )}
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
              <div>
                <img
                  className="img-thumbnail rounded-0"
                  src={croppedDataURL}
                />
                <div className="mt-2">
                  <UploadButton
                    croppedDataURL={croppedDataURL}
                    storageRef={storageRef}
                    maxBytes={maxBytes}
                    onProgress={handleUploadProgress}
                    onDone={handleUploadDone}
                    onClick={handleUploadButtonClick}
                  />
                </div>
                <div className="mt-2">
                  {!uploaded && (
                    <ProgressBar progress={progress} />
                  )}
                  {uploaded && (
                    <div className="alert alert-success overflow-hidden">
                      Uploaded...
                    </div>
                  )}
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
