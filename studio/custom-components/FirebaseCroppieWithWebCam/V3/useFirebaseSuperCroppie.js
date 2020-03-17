// import React from 'react'
import useFileFromStorageRef from './useFileFromStorageRef'
import useFileInput from './useFileInput'
import useCroppie from './useCroppie'
import useUploadButton from './useUploadButton'

export default ({storageRef, croppieConfig}) => {
  const {file, isVerifying} = useFileFromStorageRef({storageRef})
  const {handleChange, dataURL} = useFileInput()
  const {croppieRef, croppedDataURL} = useCroppie({dataURL, croppieConfig})
  const {handleClick} = useUploadButton({storageRef, croppieRef})
  return {
    file,
    isVerifying,
    handleChange,
    croppieRef,
    croppedDataURL,
    handleClick,
  }
}
