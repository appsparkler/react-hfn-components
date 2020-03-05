import React from 'react'
import Croppie from './Croppie'
import ProgressBar from './ProgressBar'
import PreviewImage from './PreviewImage'
import UploadButton from './UploadButton'
import PropTypes from 'prop-types'

const CroppieInput = (props) => {
  return (<div
    className="RFHN-Croppie col-xs-12"
  >
    <Croppie {...props} />
    <div className="PreviewAndUpload">
      <PreviewImage {...props} />
      {props.exceedsMaxBytes && <UploadButton {...props} />}
      <br />
      {props.isUploading && <ProgressBar {...props} />}
      {props.exceedsMaxBytes && (
        <div className="col-xs-12">
          <span>Exceeds Max Bytes</span>
        </div>
      )}
      {props.uploaded && <span>Done...</span>}
    </div>
  </div>)
}

CroppieInput.propTypes = {
  exceedsMaxBytes: PropTypes.bool,
  isUploading: PropTypes.bool,
  uploaded: PropTypes.bool,
}

export default CroppieInput
