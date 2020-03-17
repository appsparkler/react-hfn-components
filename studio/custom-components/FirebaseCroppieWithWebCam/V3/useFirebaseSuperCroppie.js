import React from 'react'
import useFileFromStorageRef from './useFileFromStorageRef'
import useFileInput from './useFileInput'
import useCroppie from './useCroppie'
import useUploadButton from './useUploadButton'

function uploadedDidChange({setCroppedDataURL, uploaded}) {
  if (uploaded === true) setCroppedDataURL(null)
}
function dataURLDidChange() {

}
export default ({storageRef, croppieConfig}) => {
  const {file, isVerifying} = useFileFromStorageRef({storageRef})
  const {handleChange, dataURL} = useFileInput()
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
  }
}
