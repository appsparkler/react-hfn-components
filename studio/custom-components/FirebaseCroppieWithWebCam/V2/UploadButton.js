import React from 'react'
import PropTypes from 'prop-types'
import useUploadButton from './useUploadButton'

const UploadButtton = ({
  croppedDataURL, storageRef, maxBytes,
  onProgress, onDone, onStart,
}) => {
  const {handleClick} = useUploadButton({
    croppedDataURL, storageRef, maxBytes,
    onProgress, onDone, onStart,
  })
  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="btn btn-block btn-primary rounded-0"
      >
          Upload
      </button>
    </div>
  )
}

UploadButtton.propTypes = {
  croppedDataURL: PropTypes.string,
  storageRef: PropTypes.object.isRequired,
  maxBytes: PropTypes.number,
  onStart: PropTypes.func,
  onProgress: PropTypes.func,
  onDone: PropTypes.func,
}

UploadButtton.defaultProps = {
  maxBytes: 5 * 1024 * 1024,
  onStart: () => {},
  onProgress: (progress) => {},
  onDone: () => {},
}

export default UploadButtton
