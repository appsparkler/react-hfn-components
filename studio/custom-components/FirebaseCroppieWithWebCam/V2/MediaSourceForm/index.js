import React from 'react'
import PropTypes from 'prop-types'
import connectMediaSourceForm from './context'
// import useMediaSourceForm from './useMediaSourceForm'

const MediaSourceForm = ({
  handleMediaSourceChange,
  mediaSources,
  mediaSource,
  resetMediaSource,
}) => {
  return (
    <form>
      {
        mediaSources.map((item, idx) => {
          return (<div
            className="form-check form-check-inline"
            key={idx}
          >
            <input
              className="form-check-input"
              name="mediaSource"
              type="radio"
              value={item.value}
              onChange={handleMediaSourceChange}
              checked={item.value === mediaSource}
            />
            <label className="form-check-label">
              {item.label || item.value}
            </label>
          </div>)
        })
      }
    </form>
  )
}

MediaSourceForm.propTypes = {
  handleMediaSourceChange: PropTypes.func.isRequired,
  mediaSources: PropTypes.array.isRequired,
  mediaSource: PropTypes.string,
  resetMediaSource: PropTypes.func,
}

MediaSourceForm.defaultProps = {
  onMediaSourceChange: () => {},
}

export default connectMediaSourceForm(MediaSourceForm)
