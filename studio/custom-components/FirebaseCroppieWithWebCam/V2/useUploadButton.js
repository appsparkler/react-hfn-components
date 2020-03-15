// import React from 'react'
import {dataURL2Blob} from './utils'

const handleClick = ({
  croppedDataURL, storageRef, onStateChange, onError, onDone,
}, evt) => {
  debugger
  const blob = dataURL2Blob(croppedDataURL)
  const file = new File([blob], 'pic')
  const uploadTask = storageRef.put(file)
  uploadTask.on(
      'state_changed',
      onStateChange,
      onError,
      onDone,
  )
}

export default ({
  croppedDataURL, storageRef, onStateChange, onError, onDone,
}) => {
  return {
    handleClick: handleClick.bind(null, {
      croppedDataURL, storageRef, onStateChange, onError, onDone,
    }),
  }
}


/*

function handleStateChange({ onStateChange, onError, onDone}, snapshot) {
  if (snapshot.totalBytes) {
    setProgress((snapshot.bytesTransferred/snapshot.totalBytes) * 100)
  }
}

function handleError() {
  debugger
}

function handleDone() {
  debugger
}
*/
