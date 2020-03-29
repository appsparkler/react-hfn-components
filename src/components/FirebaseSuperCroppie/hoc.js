import React from 'react'
import PropTypes from 'prop-types'
// import MediaSourceForm from './MediaSourceForm'
// import UploadButton from './UploadButton'
// import FileInputButton from '@react-hfn-hoc/FileInputButton'
// import PreviewModal from '@react-hfn-components/PreviewModal'
import ProfilePhoto from './ProfilePhoto'
import {
  Stack,
  // Image,
  // ProgressIndicator,
  // DefaultButton,
  // Spinner, SpinnerSize, ImageFit,
  // MessageBar,
} from 'office-ui-fabric-react'

const FirebaseSuperCroppie = ({
  file, isVerifying,
  mediaSource, handleMediaSourceChange,
  handleFileInputChange, dataURL,
  croppieRef, croppedDataURL,
  handleUploadButtonClick, isUploading, progress, uploaded,
  webcamRef, clickPhoto,
  imgIsLoading, handleLoad, isWebcamAvailable, fileInputRef,
}) => (
  <Stack
    horizontalAlign="center"
    horizontal
    gap="20"
    wrap
  >
    <ProfilePhoto
      imgIsLoading={imgIsLoading}
      isVerifying={isVerifying}
      onLoad={handleLoad}
      file={file}
    />
  </Stack>
)

FirebaseSuperCroppie.propTypes = {
  isWebcamAvailable: PropTypes.bool.isRequired,
  file: PropTypes.object,
  isVerifying: PropTypes.bool.isRequired,

  mediaSource: PropTypes.string,
  handleMediaSourceChange: PropTypes.func.isRequired,

  handleFileInputChange: PropTypes.func.isRequired,
  dataURL: PropTypes.string,

  webcamRef: PropTypes.any.isRequired,
  clickPhoto: PropTypes.func.isRequired,

  croppieRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}),
  croppedDataURL: PropTypes.string,

  handleUploadButtonClick: PropTypes.func.isRequired,
  isUploading: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  uploaded: PropTypes.bool.isRequired,

  imgIsLoading: PropTypes.bool.isRequired,
  handleLoad: PropTypes.func.isRequired,
  fileInputRef: PropTypes.shape({
    current: PropTypes.any,
  }),
}

export default FirebaseSuperCroppie
