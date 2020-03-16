import React from 'react'
import PropTypes from 'prop-types'
import useMediaSourceForm from './useMediaSourceForm'

const MediaSourceForm = ({onMediaSourceChange}) => {
  const {
    handleMediaSourceChange,
  } = useMediaSourceForm({onMediaSourceChange})
  return (
    <form>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          name="mediaSource"
          type="radio"
          value="file"
          onChange={handleMediaSourceChange}
        />
        <label className="form-check-label">
          Upload File
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          name="mediaSource"
          type="radio"
          value="webcam"
          onChange={handleMediaSourceChange}
        />
        <label className="form-check-label" >
          Webcam
        </label>
      </div>
    </form>
  )
}

MediaSourceForm.propTypes = {
  onMediaSourceChange: PropTypes.func.isRequired,
}

MediaSourceForm.defaultProps = {
  onMediaSourceChange: () => {},
}

export default MediaSourceForm
