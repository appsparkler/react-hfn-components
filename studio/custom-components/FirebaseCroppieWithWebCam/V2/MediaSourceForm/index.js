import React from 'react'
import PropTypes from 'prop-types'
import {connectMediaSourceForm} from './context'

const MediaSourceForm = ({
  handleChange,
  items,
  value,
  resetValue,
}) => {
  return (
    <form>
      {
        items.map((item, idx) => {
          return (<div
            className="form-check form-check-inline"
            key={idx}
          >
            <input
              className="form-check-input"
              name="mediaSource"
              type="radio"
              value={item.value}
              onChange={handleChange}
              checked={item.value === value}
            />
            <label className="form-check-label">
              {item.label || item.value}
            </label>
          </div>)
        })
      }
      <button type="button" onClick={resetValue}>Reset</button>
      <pre>{value}</pre>
    </form>
  )
}

MediaSourceForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  value: PropTypes.string,
  resetValue: PropTypes.func,
}

MediaSourceForm.defaultProps = {
  onMediaSourceChange: () => {},
}

export default connectMediaSourceForm(MediaSourceForm, {
  name: 'mediaSource',
  items: [
    {value: 'file', label: 'Upload File'},
    {value: 'webcam', label: 'Webcam'},
  ],
})
