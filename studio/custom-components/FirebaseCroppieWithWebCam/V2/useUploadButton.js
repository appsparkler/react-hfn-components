// import React from 'react'
import {dataURL2Blob} from './utils'

function onStateChange({onProgress}, snapshot) {

}

function onError() {

}

function onDone() {

}

const handleClick = ({
  croppedDataURL, storageRef, onProgress,
}, evt) => {
  debugger
  const blob = dataURL2Blob(croppedDataURL)
  const file = new File([blob], 'pic')
  const uploadTask = storageRef.put(file)
  uploadTask.on(
      'state_changed',
      onStateChange.bind(null, {onProgress}),
      onError,
      onDone,
  )
}

export default ({
  croppedDataURL, storageRef, onProgress,
}) => {
  return {
    handleClick: handleClick.bind(null, {
      croppedDataURL, storageRef, onProgress,
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
