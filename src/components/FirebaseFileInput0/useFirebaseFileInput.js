import React from 'react'
import useFirebaseFileLink
  from '@react-hfn-components/FirebaseFileLink/useFileLink'
import useFileResetter from './useFileResetter'

function handleChange({props, states}, snapshot) {
  const {setProgress} = states
  const {bytesTransferred, totalBytes} = snapshot
  const progress = (bytesTransferred/totalBytes) * 100
  if (totalBytes !== 0) setProgress(progress)
}

function handleError({props, states}, e) {
  states.setUploadError(e)
  states.setIsUploading(false)
}

async function handleDone({props, states, uploadTask, verifyFile, file}) {
  const downloadURL = await Promise.resolve(
      props.storageRef.getDownloadURL(),
  )
  const metadata = await props.storageRef.getMetadata()
  const uploadedFile = {
    fileName: metadata.customMetadata.fileName,
    bytes: file.size,
    fullPath: metadata.fullPath,
    contentType: metadata.contentType,
    downloadURL,
  }
  props.onUpload && props.onUpload(uploadedFile)
  states.setProgress(100)
  verifyFile()
  setTimeout(() => {
    states.setIsUploading(false)
    states.setProgress(0)
    states.setUploaded(true)
  }, 800)
}

async function upload({props, states, verifyFile}, evt) {
  const file = evt.target.files.item(0)
  states.setIsUploading(true)
  states.setProgress(0)
  const uploadTask = props.storageRef.put(file, {
    customMetadata: {
      fileName: file.name,
    },
  })
  uploadTask.on(
      'state_changed',
      handleChange.bind(null, {props, states}),
      handleError.bind(null, {props, states}),
      handleDone.bind(null, {props, states, verifyFile, uploadTask, file}),
  )
}

function validateFileSize({props, states}, evt) {
  const {maxBytes} = props
  const {setMaxBytesExceeded} = states
  const file = evt.target.files.item(0)
  if (!file) return false
  if (file.size > maxBytes) {
    setMaxBytesExceeded(true)
    states.resetInputField()
    return false
  } else {
    setMaxBytesExceeded(null)
    return true
  }
}

async function handleInput({props, states, verifyFile}, evt) {
  evt.preventDefault()
  evt.stopPropagation()
  states.setMaxBytesExceeded(false)
  states.setIsUploading(false)
  states.setUploaded(false)
  const withinFileLimit = validateFileSize({props, states}, evt)
  if (withinFileLimit) await upload({props, states, verifyFile}, evt)
}

export default (props) => {
  const {storageRef} = props
  const [maxBytesExceeded, setMaxBytesExceeded] = React.useState(false)
  const [isUploading, setIsUploading] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  // const [type, setType] = React.useState('file')
  const [uploadError, setUploadError] = React.useState(null)
  const [uploaded, setUploaded] = React.useState(false)
  const {file, isVerifying, verifyFile} = useFirebaseFileLink({storageRef})
  const {type, resetInputField} = useFileResetter()
  const states = {
    maxBytesExceeded, setMaxBytesExceeded,
    type, resetInputField,
    isUploading, setIsUploading,
    progress, setProgress,
    uploadError, setUploadError,
    uploaded, setUploaded,
  }
  return {
    // useFileLink
    file, isVerifying, verifyFile,
    // ...props,
    maxBytes: props.maxBytes,

    // props.maxBytes
    maxBytesExceeded,

    // upload task
    isUploading,
    uploaded,
    progress,

    type,
    handleInput: handleInput.bind(null, {props, states, verifyFile}),
  }
}
