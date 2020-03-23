import React from 'react'
import PropTypes from 'prop-types'
import {DefaultButton} from 'office-ui-fabric-react'

const inputStyles = {
  position: 'absolute',
  left: 0, right: 0,
  bottom: 0, top: 0,
  opacity: 0,
}

const FileUploadButton = ({file, isUploading, isVerifying, onChange}) => (
  <div style={{position: 'relative'}}>
    <DefaultButton
      primary={!!file}
      secondary={!file}
      disabled={isUploading || isVerifying}
      text={file ? 'Re-upload File': 'Upload File'}
    />
    <input type='file'
      style={inputStyles}
      disabled={isUploading || isVerifying}
      onChange={onChange}
    />
  </div>
)

FileUploadButton.propTypes = {
  file: PropTypes.object,
  isUploading: PropTypes.bool.isRequired,
  isVerifying: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default FileUploadButton
