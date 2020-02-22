import React from 'react'
import PropTypes from 'prop-types'
import useFileInput from './useFileInput'

const FileInput = ({props}) => {
  const {handleChange} = useFileInput({props})
  return (
    <div className="FileInput">
      <label>
        <span className="label-text">Upload Photo</span>
        <span className="required-asterix"> *</span>
        <br />
        <input type="file" />
      </label>
    </div>
  )
}

FileInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.object,
  onUpload: PropTypes.function,
  storageRef: PropTypes.object,
  config: PropTypes.object,
  required: PropTypes.boolean,
  disabled: PropTypes.boolean,
  readOnly: PropTypes.boolean,
  noLabel: PropTypes.noLabel,
}

export default FileInput
