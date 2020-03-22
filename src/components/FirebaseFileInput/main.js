import React from 'react'
import PropTypes from 'prop-types'
import FirebaseFileLink from '@react-hfn-components/FirebaseFileLink/main'
import {Stack} from 'office-ui-fabric-react'
import FileUploadButton from './FileUploadButton'

const FirebaseFileInput = ({
  handleFileInputChange,
  isUploading,
  error,
  uploaded,
  progress,
  handleUploadButtonClick,
  isVerifying,
  firebaseFile,
}) => (
  <Stack horizontal tokens={{padding: 100}}>
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
        <FirebaseFileLink
          isVerifying={isVerifying}
          isUploading={isUploading}
          file={firebaseFile}
        />
      </div>
      <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg10">
        <FileUploadButton
          file={firebaseFile}
          isUploading={isUploading}
          isVerifying={isVerifying}
          onChange={handleFileInputChange}
        />
      </div>
    </div>
    {/* <div className="row">
      <div className="col-12">
        {isVerifying && '...isVerifying'}
        {!isVerifying && firebaseFile?.downloadURL && (
          <a href={firebaseFile.downloadURL}>
            {firebaseFile.fileName || 'file'}
          </a>
        )}
      </div>
      <div className="col-12">
        <input type="file" onChange={handleFileInputChange} />
        <button
          type="button"
          className="btn btn-primary rounded-0"
          disabled={isUploading}
          onClick={handleUploadButtonClick}
        >
        Upload File
        </button>
        <br />
        {isUploading && <progress value={progress} min="0" max="100" />}
        <pre>{isUploading && '...is uploading'}</pre>
        <pre>{uploaded && 'uploaded!'}</pre>
        <pre>{error && error.message}</pre>
      </div>
    </div>*/}
  </Stack>
)

FirebaseFileInput.propTypes = {
  handleFileInputChange: PropTypes.func.isRequired,
  isUploading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  uploaded: PropTypes.bool.isRequired,
  progress: PropTypes.number,
  handleUploadButtonClick: PropTypes.func.isRequired,
  isVerifying: PropTypes.bool.isRequired,
  firebaseFile: PropTypes.object,
}

export default FirebaseFileInput
