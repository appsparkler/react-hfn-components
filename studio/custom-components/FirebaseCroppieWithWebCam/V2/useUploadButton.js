// import React from 'react'
import {dataURL2Blob} from './utils'

function handleStateChange() {
  debugger
}

function handleError() {
  debugger
}

function handleDone() {
  debugger
}

const handleClick = ({croppedDataURL, storageRef}, evt) => {
  const blob = dataURL2Blob(croppedDataURL)
  const file = new File([blob], 'pic')
  const uploadTask = storageRef.put(file)
  uploadTask.on(
      'state_changed',
      handleStateChange,
      handleError,
      handleDone,
  )
}

export default ({croppedDataURL, storageRef}) => {
  return {
    handleClick: handleClick.bind(null, {croppedDataURL, storageRef}),
  }
}
