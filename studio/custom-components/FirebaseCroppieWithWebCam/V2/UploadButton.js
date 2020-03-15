import React from 'react'
import PropTypes from 'prop-types'
import useUploadButton from './useUploadButton'

const UploadButtton = ({
  croppedDataURL, storageRef, maxBytes, onStateChange, onError, onDone,
}) => {
  const {handleClick} = useUploadButton({
    croppedDataURL, storageRef, maxBytes, onStateChange, onError, onDone,
  })
  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="btn btn-block btn-primary rounded-0 mt-2"
      >
          Upload Photo
      </button>
    </div>
  )
}

UploadButtton.propTypes = {
  croppedDataURL: PropTypes.string,
  storageRef: PropTypes.object.isRequired,
  maxBytes: PropTypes.number,
  onStateChange: PropTypes.func,
  onError: PropTypes.func,
  onDone: PropTypes.func,
}

UploadButtton.defaultProps = {
  maxBytes: 5 * 1024 * 1024,
  onStateChange: (snapshot) => {
    snapshot
    debugger
  },
  onError: () => {},
  onDone: () => {},
}

export default UploadButtton
