import React from 'react'
import uuid from 'uuid/v1'

function resetInputFiled({props, states}) {
  const {setType} = states
  setType('')
}

function validateFileSize({props, states}, evt) {
  const {maxBytes, maxBytesError} = props
  const {setValidationError} = states
  const file = evt.target.files.item(0)
  const fileSize = file.size
  if (fileSize > maxBytes) {
    setValidationError(maxBytesError)
    resetInputFiled({props, states})
    return false
  } else {
    setValidationError('')
    return true
  }
}

function fileTypeDidChange({states}) {
  const {setType, type} = states
  if (type !== 'file') setType('file')
}

async function upload({props, states}, evt) {
  const {onUpload} = props
  const {setFile, setUploadDetail, setIsUploading} = states
  const file = evt.target.files.item(0)
  const {storageRef} = props
  const uploadDetail = {
    key: uuid(),
    file,
    uploadTask: storageRef.put(file),
  }
  setIsUploading(true)
  setUploadDetail(uploadDetail)
  const snapshot = await Promise.resolve(uploadDetail.uploadTask)
  const downloadUrl = await Promise.resolve(snapshot.ref.getDownloadURL())
  const uploadedFile = {
    fileName: snapshot.ref.name,
    bytes: snapshot.totalBytes,
    fullPath: snapshot.metadata.fullPath,
    contentType: snapshot.metadata.contentType,
    downloadUrl,
  }
  setIsUploading(false)
  onUpload && onUpload(uploadedFile)
  setFile(uploadedFile)
}

async function handleInput({props, states}, evt) {
  const withinFileLimit = validateFileSize({props, states}, evt)
  if (withinFileLimit) await upload({props, states}, evt)
}

export default function useFileInput({props}) {
  const DEFAULT_PROPS = {
    type: 'file',
    maxBytes: 5 * 1024 *1024,
    maxBytesError: 'File size limit exceeded!',
  }
  props = Object.assign(DEFAULT_PROPS, props)
  const [validationError, setValidationError] = React.useState('')
  const [type, setType] = React.useState(props.file)
  // const [uploadedFile, setUploadedFile] = React.useState(null)
  const {file, setFile} = props.sharedState
  const [uploadDetail, setUploadDetail] = React.useState(null)
  const [isUploading, setIsUploading] = React.useState(false)
  const states = {
    validationError, setValidationError,
    type, setType,
    isUploading, setIsUploading,
    file, setFile,
    uploadDetail, setUploadDetail,
  }

  // EFFECTS
  React.useEffect(fileTypeDidChange.bind(null, {states}), [type])

  return {
    handleInput: handleInput.bind(null, {props, states}),
    type,
    validationError,
    maxBytes: props.maxBytes,
    uploadDetail,
    file,
    isUploading,
  }
}
