// import React from 'react'
import {dataURL2Blob} from './utils'

function onStateChange({onProgress}, snapshot) {
  const {status, totalBytes, bytesTransferred} = snapshot
  if (totalBytes && status === 'running') {
    const progress = (bytesTransferred/totalBytes) * 100
    onProgress(progress)
  }
}

function onError() {

}

function onDone({onProgress}) {
  onProgress(100)
}

const handleClick = ({
  croppedDataURL, storageRef, onProgress,
}, evt) => {
  const blob = dataURL2Blob(croppedDataURL)
  const file = new File([blob], 'pic')
  const uploadTask = storageRef.put(file)
  uploadTask.on(
      'state_changed',
      onStateChange.bind(null, {onProgress}),
      onError,
      onDone.bind(null, {onProgress}),
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
