import React from 'react'
import PropTypes from 'prop-types'
import useMediaSourceForm from './useMediaSourceForm'

const MediaSourceForm = ({onMediaSourceChange, mediaSources}) => {
  const {
    handleMediaSourceChange,
  } = useMediaSourceForm({onMediaSourceChange})
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
  onMediaSourceChange: PropTypes.func.isRequired,
  mediaSources: PropTypes.array.isRequired,
}

MediaSourceForm.defaultProps = {
  onMediaSourceChange: () => {},
}

export default MediaSourceForm
