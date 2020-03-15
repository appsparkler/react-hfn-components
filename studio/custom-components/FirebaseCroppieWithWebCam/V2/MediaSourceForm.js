import React from 'react'
import PropTypes from 'prop-types'

const MediaSourceForm = ({handleMediaSourceChange}) => {
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
  handleMediaSourceChange: PropTypes.func.isRequired,
}

export default MediaSourceForm
