import React from 'react'
import PropTypes from 'prop-types'
import ProfilePhoto from './ProfilePhoto'
import MediaSourceForm from './MediaSourceForm'
// import FileInput from './FileInput'
import Croppie from './Croppie'
import UploadButton from './UploadButton'
import FileInputButton
  from '@react-hfn-components/FirebaseFileInput/FileUploadButton'
import {Stack, ProgressIndicator, DefaultButton} from 'office-ui-fabric-react'

const FirebaseSuperCroppie = ({
  file, isVerifying,
  mediaSource, handleMediaSourceChange,
  handleFileInputChange, dataURL,
  croppieRef, croppedDataURL,
  handleUploadButtonClick, isUploading, progress, uploaded,
  webcamRef, clickPhoto,
  imgIsLoading, handleLoad,
}) => (
  <Stack tokens={{padding: 20}}>
    <div className="ms-Grid-col ms-sm12">
      <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg2">
        {(
          <ProfilePhoto
            isVerifying={isVerifying}
            imgIsLoading={imgIsLoading}
            file={file}
            onLoad={handleLoad}
          />
        )}
      </div>
      <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg3">
        <MediaSourceForm
          mediaSource={mediaSource}
          handleMediaSourceChange={handleMediaSourceChange}
        />
      </div>
      {mediaSource === 'file' && (
        <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg4">
          <FileInputButton
            file={file}
            isUploading={isUploading}
            isVerifying={isVerifying}
            onChange={handleFileInputChange}
          />
        </div>
      )}
      {mediaSource === 'webcam' && (
        <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg4">
          <div>
            <video
              style={{width: '100%'}}
              ref={webcamRef}></video>
            <DefaultButton
              primary
              text="Click Photo"
              onClick={clickPhoto}
            />
          </div>
        </div>
      )}
    </div>
    {mediaSource && (
      <div className="ms-Grid-col ms-sm12">
        <div className="ms-Grid-col ms-sm6 ms-lg6">
          <div ref={croppieRef}></div>
        </div>
        <div className="ms-Grid-col ms-sm6 ms-lg6">
          <Croppie
            croppedDataURL={croppedDataURL}
            croppieRef={croppieRef}
          />
          {croppedDataURL && (
            <>
              <UploadButton
                onClick={handleUploadButtonClick}
                disabled={isUploading}
              />
              <pre>{isUploading && (
                <ProgressIndicator percentComplete={(progress/100)} />
              )}
              </pre>
              <pre>{isUploading && 'is uploading...'}</pre>
              <pre>{uploaded && 'uploaded!'}</pre>
            </>
          )}
        </div>
      </div>
    )}
  </Stack>
)

FirebaseSuperCroppie.propTypes = {
  file: PropTypes.object,
  isVerifying: PropTypes.bool.isRequired,

  mediaSource: PropTypes.string,
  handleMediaSourceChange: PropTypes.func.isRequired,

  handleFileInputChange: PropTypes.func.isRequired,
  dataURL: PropTypes.string,

  webcamRef: PropTypes.any.isRequired,
  clickPhoto: PropTypes.func.isRequired,

  croppieRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}),
  croppedDataURL: PropTypes.string,

  handleUploadButtonClick: PropTypes.func.isRequired,
  isUploading: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  uploaded: PropTypes.bool.isRequired,

  imgIsLoading: PropTypes.bool.isRequired,
  handleLoad: PropTypes.func.isRequired,
}

export default FirebaseSuperCroppie
