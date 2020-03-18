import React from 'react'
import PropTypes from 'prop-types'

const MediaSourceForm = ({mediaSource, handleMediaSourceChange}) => (
  <form>
    <div className="form-check form-check-inline">
      <input
        name="mediaSource"
        className="form-check-input"
        type="radio"
        value="file"
        onChange={handleMediaSourceChange}
      />
      <label className="form-check-label">
        Upload From file
      </label>
    </div>
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="radio"
        name="mediaSource"
        value="webcam"
        onChange={handleMediaSourceChange}
      />
      <label className="form-check-label" htmlFor="inlineRadio2">
        Use Webcam
      </label>
    </div>
  </form>
)

MediaSourceForm.propTypes = {
  mediaSource: PropTypes.string,
  handleMediaSourceChange: PropTypes.func.isRequired,
}

export default MediaSourceForm
