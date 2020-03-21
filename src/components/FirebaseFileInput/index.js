import React from 'react'
import PropTypes from 'prop-types'
import useFirebaseFileInput from './useFirebaseFileInput'

const FirebaseFileInput = ({storageRef}) => {
  const {
    handleFileInputChange,
    isUploading,
    error,
    uploaded,
    progress,
    handleUploadButtonClick,
    isVerifying,
    firebaseFile,
  } = useFirebaseFileInput({storageRef})
  return (
    <div className="row">
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
        <pre>{isUploading && `${progress}%`}</pre>
        <pre>{isUploading && '...is uploading'}</pre>
        <pre>{uploaded && 'uploaded!'}</pre>
        <pre>{error && error.message}</pre>
      </div>
    </div>
  )
}

FirebaseFileInput.propTypes = {
  storageRef: PropTypes.object.isRequired,
}

export default FirebaseFileInput
