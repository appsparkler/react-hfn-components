import React from 'react'
import PropTypes from 'prop-types'
import MediaSourceForm from './MediaSourceForm'
import UploadButton from './UploadButton'
import FileInputButton from '@react-hfn-hoc/FileInputButton'
import PreviewModal from './PreviewModal'
import {
  ProgressIndicator,
  DefaultButton,
  Spinner, SpinnerSize, Image, ImageFit,
  MessageBar, Stack,
} from 'office-ui-fabric-react'

const FirebaseSuperCroppie = ({
  file, isVerifying,
  mediaSource, handleMediaSourceChange,
  handleFileInputChange, dataURL,
  croppieRef, croppedDataURL,
  handleUploadButtonClick, isUploading, progress, uploaded,
  webcamRef, clickPhoto,
  imgIsLoading, handleLoad,
}) => (
  <>
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm4">
        {isVerifying && (
          <Spinner label="Verifying..." size={SpinnerSize.large} />
        )}
        {imgIsLoading && (
          <Spinner label="Loading..." size={SpinnerSize.large} />
        )}
        {!isVerifying && !file && (
          <MessageBar>No photo uploaded.</MessageBar>
        )}
        {file && file.downloadURL && (
          <Image
            src={file.downloadURL}
            imageFit={ImageFit.contain}
            height={130}
            onLoad={handleLoad}
          />
        )}
      </div>
      <div className="ms-Grid-col ms-sm7">
        <MediaSourceForm
          mediaSource={mediaSource}
          handleMediaSourceChange={handleMediaSourceChange}
        />
      </div>
    </div>

    {mediaSource === 'file' && (
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-col12">
          <FileInputButton
            primary={!!file}
            secondary={!file}
            disabled={isUploading || isVerifying || imgIsLoading}
            onChange={handleFileInputChange}
            text={file ? 'Edit Photo': 'Upload Photo'}
          />
        </div>
      </div>
    )}

    {mediaSource === 'webcam' && (
      <div className="ms-Grid-row">
        <div className="ms-Grid-col col-sm12">
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

    <div className="ms-Grid-col ms-sm12">
      <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg3">
      </div>
      {mediaSource === 'file' && (
        <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg4">
          <FileInputButton
            primary={!!file}
            secondary={!file}
            disabled={isUploading || isVerifying || imgIsLoading}
            onChange={handleFileInputChange}
            text={file ? 'Edit Photo': 'Upload Photo'}
          />
        </div>
      )}
    </div>

    {mediaSource && (
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm12">
          <div ref={croppieRef}></div>
        </div>
        <div className="ms-Grid-col ms-sm6">
          {croppedDataURL && (
            <div>
              <Image
                src={croppedDataURL}
                imageFit={ImageFit.center}
                width={200}
              />
              <Stack horizontal tokens={{padding: '20'}}>
                <UploadButton
                  onClick={handleUploadButtonClick}
                  disabled={isUploading}
                />
                <PreviewModal src={croppedDataURL} />
              </Stack>
              {isUploading && (
                <div>
                  <ProgressIndicator percentComplete={(progress/100)} />
                  <Spinner size={SpinnerSize.lg} label="Uploading..." />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )}


    {/* mediaSource && (
      <div className="ms-Grid-col ms-sm12">
        <div className="ms-Grid-col ms-sm6 ms-lg6">
          <div ref={croppieRef}></div>
        </div>
        <div className="ms-Grid-col ms-sm3 ms-lg3">
          {croppedDataURL && (
            <>
              <img src={croppedDataURL} />
              <UploadButton
                onClick={handleUploadButtonClick}
                disabled={isUploading}
              />
              <pre>{isUploading && (
                <ProgressIndicator percentComplete={(progress/100)} />
              )}
              </pre>
              {isUploading && (
                <Spinner size={SpinnerSize.lg} label="Uploading..." />
              )}
              <pre>{uploaded && 'uploaded!'}</pre>
            </>
          )}
        </div>
      </div>
    )*/}
  </>
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
