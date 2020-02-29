import React from 'react'

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

async function handleDone({props, states, uploadTask, file}) {
  const downloadUrl = await Promise.resolve(
      props.storageRef.getDownloadURL(),
  )
  states.setIsUploading(false)
  const metadata = await props.storageRef.getMetadata()
  debugger
  const uploadedFile = {
    fileName: metadata.customMetadata.fileName,
    bytes: file.size,
    fullPath: metadata.fullPath,
    contentType: metadata.contentType,
    downloadUrl,
  }
  states.setProgress(100)
  states.setFile(uploadedFile)
  props.onUpload && props.onUpload(uploadedFile)
}

async function upload({props, states}, evt) {
  const file = evt.target.files.item(0)
  const uploadTask = props.storageRef.put(file, {
    customMetadata: {
      fileName: file.name,
    },
  })
  states.setIsUploading(true)
  uploadTask.on(
      'state_changed',
      handleChange.bind(null, {props, states}),
      handleError.bind(null, {props, states}),
      handleDone.bind(null, {props, states, uploadTask, file}),
  )

  // const {onUpload} = props
  // const {setFile, setUploadDetail, setIsUploading} = states
  // const {storageRef} = props
  // const uploadDetail = {
  //   file,
  //   uploadTask: storageRef.put(file),
  // }
  // setIsUploading(true)
  // setUploadDetail(uploadDetail)
  // const snapshot = await Promise.resolve(uploadDetail.uploadTask)
  // const downloadUrl = await Promise.resolve(snapshot.ref.getDownloadURL())
  // const uploadedFile = {
  //   fileName: snapshot.ref.name,
  //   bytes: snapshot.totalBytes,
  //   fullPath: snapshot.metadata.fullPath,
  //   contentType: snapshot.metadata.contentType,
  //   downloadUrl,
  // }
  // setIsUploading(false)
  // onUpload && onUpload(uploadedFile)
  // setFile(uploadedFile)
}

function resetInputFiled({props, states}) {
  const {setType} = states
  setType('')
}

function typeDidChange({props, states}) {
  states.setType('file')
}

function validateFileSize({props, states}, evt) {
  const {maxBytes} = props
  const {setMaxBytesExceeded} = states
  const file = evt.target.files.item(0)
  if (!file) return false
  if (file.size > maxBytes) {
    setMaxBytesExceeded(true)
    resetInputFiled({props, states})
    return false
  } else {
    setMaxBytesExceeded(null)
    return true
  }
}

async function handleInput({props, states}, evt) {
  evt.preventDefault()
  evt.stopPropagation()
  states.setProgress(null)
  states.setMaxBytesExceeded(false)
  states.setIsUploading(false)
  states.setFile(null)
  const withinFileLimit = validateFileSize({props, states}, evt)
  if (withinFileLimit) await upload({props, states}, evt)
}

export default (props) => {
  const [maxBytesExceeded, setMaxBytesExceeded] = React.useState(false)
  const [isUploading, setIsUploading] = React.useState(false)
  const [progress, setProgress] = React.useState(false)
  const [type, setType] = React.useState('file')
  const [uploadError, setUploadError] = React.useState(null)
  const [file, setFile] = React.useState(null)
  const states = {
    maxBytesExceeded, setMaxBytesExceeded,
    type, setType,
    isUploading, setIsUploading,
    progress, setProgress,
    uploadError, setUploadError,
    file, setFile,
  }
  React.useEffect(typeDidChange.bind(null, {props, states}), [type])
  return {
    ...props,
    progress,
    maxBytesExceeded,
    isUploading,
    type,
    file,
    handleInput: handleInput.bind(null, {props, states}),
  }
}
