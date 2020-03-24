import React from 'react'
import PropTypes from 'prop-types'
import FirebaseFileLink from '@react-hfn-components/FirebaseFileLink/hoc'
import {Stack, ProgressIndicator} from 'office-ui-fabric-react'
import FileInputButton from '@react-hfn-hoc/FileInputButton'

const FirebaseFileInput = ({
  handleFileInputChange,
  isUploading,
  error,
  uploaded,
  progress,
  handleUploadButtonClick,
  isVerifying,
  firebaseFile,
  btnText,
}) => (
  <Stack horizontal tokens={{padding: 20}}>
    <div className="ms-Grid-col ms-sm12">
      <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg4">
        <FirebaseFileLink
          isVerifying={isVerifying}
          isUploading={isUploading}
          file={firebaseFile}
        />
      </div>
      <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg4">
        <FileInputButton
          disabled={isVerifying || isUploading}
          primary={!!firebaseFile}
          secondary={!firebaseFile}
          onChange={handleFileInputChange}
          text={btnText}
        />
        {isUploading && <ProgressIndicator percentComplete={(progress/100)} />}
      </div>
    </div>
  </Stack>
)

FirebaseFileInput.propTypes = {
  handleFileInputChange: PropTypes.func.isRequired,
  isUploading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  uploaded: PropTypes.bool.isRequired,
  progress: PropTypes.number,
  handleUploadButtonClick: PropTypes.func.isRequired,
  isVerifying: PropTypes.bool.isRequired,
  firebaseFile: PropTypes.object,
  btnText: PropTypes.string.isRequired,
}

export default FirebaseFileInput
