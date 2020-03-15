import React from 'react'
import PropTypes from 'prop-types'
import useUploadButton from './useUploadButton'

const UploadButtton = ({
  croppedDataURL, storageRef, maxBytes,
  onProgress, onDone, onClick,
}) => {
  const {handleClick} = useUploadButton({
    croppedDataURL, storageRef, maxBytes,
    onProgress, onDone, onClick,
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
  onProgress: PropTypes.func,
  onDone: PropTypes.func,
  onClick: PropTypes.func,
}

UploadButtton.defaultProps = {
  maxBytes: 5 * 1024 * 1024,
  onProgress: (progress) => {},
  onDone: () => {},
  onClick: () => {},
}

export default UploadButtton
