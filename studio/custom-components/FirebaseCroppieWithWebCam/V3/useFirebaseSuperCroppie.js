import React from 'react'
import useFileFromStorageRef from './useFileFromStorageRef'
import useFileInput from './useFileInput'
import useCroppie from './useCroppie'
import useUploadButton from './useUploadButton'
import useWebCam from './useWebCam'

function uploadedDidChange({setCroppedDataURL, uploaded}) {
  if (uploaded === true) setCroppedDataURL(null)
}
function dataURLDidChange() {

}
export default ({storageRef, croppieConfig}) => {
  const {file, isVerifying} = useFileFromStorageRef({storageRef})
  const [dataURL, setDataURL] = React.useState()
  const {handleChange} = useFileInput({dataURL, setDataURL})
  const {
    videoRef,
    clickPhoto,
  } = useWebCam({dataURL, setDataURL})
  const {
    croppieRef,
    croppedDataURL,
    setCroppedDataURL,
  } = useCroppie({dataURL, croppieConfig})
  const {
    handleClick,
    isUploading,
    uploaded,
    progress,
  } = useUploadButton({croppedDataURL, storageRef})
  React.useEffect(uploadedDidChange.bind(null, {
    setCroppedDataURL, uploaded,
  }), [uploaded])
  React.useEffect(dataURLDidChange.bind({setCroppedDataURL}), [dataURL])
  return {
    file,
    isVerifying,
    handleChange,
    croppieRef,
    croppedDataURL,
    handleClick, isUploading,
    uploaded,
    progress,
    videoRef,
    clickPhoto,
  }
}
