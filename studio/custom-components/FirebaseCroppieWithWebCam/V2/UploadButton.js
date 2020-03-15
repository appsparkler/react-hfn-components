import React from 'react'
import PropTypes from 'prop-types'
import useUploadButton from './useUploadButton'


const UploadButtton = ({croppedDataURL, storageRef, maxBytes}) => {
  const {handleClick} = useUploadButton({croppedDataURL, storageRef, maxBytes})
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
}

UploadButtton.defaultProps = {
  maxBytes: 5 * 1024 * 1024,
}

export default UploadButtton
