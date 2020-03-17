import React from 'react'
import useFileFromStorageRef from './useFileFromStorageRef'
import useFileInput from './useFileInput'
import useCroppie from './useCroppie'

function dataURLDidChange({dataURL, setCroppieRef}) {
}

export default ({storageRef}) => {
  const {file, isVerifying} = useFileFromStorageRef({storageRef})
  const {handleChange, dataURL} = useFileInput()
  const {croppieRef} = useCroppie({dataURL})
  // React.useEffect(dataURLDidChange.bind(null, {
  //   dataURL,
  // }), [dataURL])
  return {
    file,
    isVerifying,
    handleChange,
    croppieRef,
  }
}
