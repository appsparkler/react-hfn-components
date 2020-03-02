import React from 'react'
import PropTypes from 'prop-types'
import {
  FirebasePhotoInputContext,
} from '@react-hfn-components/FirebasePhotoInput/context'

const FileInput = (props) => {
  const {handleChange} = React.useContext(FirebasePhotoInputContext)
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
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.object,
  onUpload: PropTypes.func,
  storageRef: PropTypes.object,
  config: PropTypes.object,
}

export default FileInput
