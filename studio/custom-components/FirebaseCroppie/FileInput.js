import React from 'react'
import PropTypes from 'prop-types'

const FileInput = (props) => {
  const {handleChange} = props
  return (
    <div className="FileInput">
      <div className="form-group">
        <label>
          <span className="label-text">Upload Photo</span>
          <span className="required-asterix"> *</span>
          <br />
          <input
            type="file"
            className="form-control"
            onChange={ handleChange }
          />
        </label>
      </div>
    </div>
  )
}

FileInput.propTypes = {
  handleChange: PropTypes.func,
}

export default FileInput
