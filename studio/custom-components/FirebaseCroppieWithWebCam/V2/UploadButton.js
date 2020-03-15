import React from 'react'
import PropTypes from 'prop-types'
import useUploadButton from './useUploadButton'

const UploadButtton = ({croppedDataURL}) => {
  const {handleClick} = useUploadButton({croppedDataURL})
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
}

export default UploadButtton
