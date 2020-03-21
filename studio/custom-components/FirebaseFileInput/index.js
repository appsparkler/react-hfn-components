import React from 'react'
import PropTypes from 'prop-types'
import useFileInput from '@react-hfn-hooks/useFileInput'
import useFileUploadButton from '@react-hfn-hooks/useFileUploadButton'

const FirebaseFileInput = ({storageRef}) => {
  const [file, setFile] = React.useState(null)
  const [isUploading, setIsUploading] = React.useState(false)
  const [uploaded, setUploaded] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const {handleFileInputChange} = useFileInput({setFile})
  const {handleUploadButtonClick} = useFileUploadButton({
    storageRef, file, setIsUploading, setProgress, setUploaded,
  })
  return (
    <div>
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
    </div>
  )
}

FirebaseFileInput.propTypes = {
  storageRef: PropTypes.object.isRequired,
}

export default FirebaseFileInput
