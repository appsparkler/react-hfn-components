import React from 'react'
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

function onDoneCallback({onProgress, onDone, setIsUploading}) {
  onDone(true)
  setIsUploading(false)
}

const handleClick = ({
  setIsUploading, croppedDataURL,
  storageRef, onProgress, onDone, onStart,
}, evt) => {
  onStart()
  setIsUploading(true)
  const blob = dataURL2Blob(croppedDataURL)
  const file = new File([blob], 'pic')
  const uploadTask = storageRef.put(file)
  uploadTask.on(
      'state_changed',
      onStateChange.bind(null, {onProgress}),
      onError,
      onDoneCallback.bind(null, {onProgress, onDone, setIsUploading}),
  )
}

export default ({
  croppedDataURL, storageRef, onProgress, onDone, onStart,
}) => {
  const [isUploading, setIsUploading] = React.useState()
  return {
    handleClick: handleClick.bind(null, {
      setIsUploading, croppedDataURL,
      storageRef, onProgress, onDone, onStart,
    }),
    isUploading,
  }
}
