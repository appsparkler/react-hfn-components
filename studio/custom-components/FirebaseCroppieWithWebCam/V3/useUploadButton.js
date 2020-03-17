import React from 'react'
import {dataURL2Blob} from './utils'

function onStateChange({setProgress}, snapshot) {
  const {status, totalBytes, bytesTransferred} = snapshot
  if (totalBytes && status === 'running') {
    const progress = (bytesTransferred/totalBytes) * 100
    setProgress(progress)
  }
}

function onError() {

}

function onDoneCallback({setProgress, setUploaded, setIsUploading}) {
  setUploaded(true)
  setIsUploading(false)
  setProgress(100)
}

const handleClick = ({
  croppedDataURL, storageRef,
  setProgress, setUploaded, setIsUploading,
}, evt) => {
  if (evt.target.disabled) return
  setIsUploading(true)
  setUploaded(false)
  const blob = dataURL2Blob(croppedDataURL)
  const file = new File([blob], 'pic')
  const uploadTask = storageRef.put(file)
  uploadTask.on(
      'state_changed',
      onStateChange.bind(null, {setProgress}),
      onError,
      onDoneCallback.bind(null, {setProgress, setUploaded, setIsUploading}),
  )
}

export default ({
  croppedDataURL, storageRef,
}) => {
  const [isUploading, setIsUploading] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const [uploaded, setUploaded] = React.useState(false)
  return {
    handleClick: handleClick.bind(null, {
      croppedDataURL, storageRef,
      setProgress, setUploaded, setIsUploading,
    }),
    isUploading,
    uploaded,
    progress,
  }
}
