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

function onDoneCallback({onProgress, onDone}) {
  onDone(true)
}

const handleClick = ({
  croppedDataURL, storageRef, onProgress, onDone, onClick,
}, evt) => {
  onClick()
  const blob = dataURL2Blob(croppedDataURL)
  const file = new File([blob], 'pic')
  const uploadTask = storageRef.put(file)
  uploadTask.on(
      'state_changed',
      onStateChange.bind(null, {onProgress}),
      onError,
      onDoneCallback.bind(null, {onProgress, onDone}),
  )
}

export default ({
  croppedDataURL, storageRef, onProgress, onDone, onClick,
}) => {
  return {
    handleClick: handleClick.bind(null, {
      croppedDataURL, storageRef, onProgress, onDone, onClick,
    }),
  }
}
