import React from 'react'
import useFileFromStorageRef from './useFileFromStorageRef'
import useFileInput from './useFileInput'

function dataURLDidChange({dataURL}) {
  debugger
}

export default ({storageRef}) => {
  const {file, isVerifying} = useFileFromStorageRef({storageRef})
  const {handleChange, dataURL} = useFileInput()
  React.useEffect(dataURLDidChange.bind(null, {dataURL}), [dataURL])
  return {
    file,
    isVerifying,
    handleChange,
  }
}
