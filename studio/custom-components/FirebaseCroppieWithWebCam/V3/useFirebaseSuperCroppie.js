// import React from 'react'
import useFileFromStorageRef from './useFileFromStorageRef'
import useFileInput from './useFileInput'
import useCroppie from './useCroppie'

export default ({storageRef, croppieConfig}) => {
  const {file, isVerifying} = useFileFromStorageRef({storageRef})
  const {handleChange, dataURL} = useFileInput()
  const {croppieRef} = useCroppie({dataURL, croppieConfig})
  return {
    file,
    isVerifying,
    handleChange,
    croppieRef,
  }
}
