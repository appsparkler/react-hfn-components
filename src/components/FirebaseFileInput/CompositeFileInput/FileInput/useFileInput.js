import React from 'react'

async function upload({props, states}, evt) {

  // const {onUpload} = props
  // const {setFile, setUploadDetail, setIsUploading} = states
  // const file = evt.target.files.item(0)
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
  const {setType, type} = states
  if (type !== 'file') setType('file')
}

function typeDidChange({props, states}) {
  states.setType('file')
}

function validateFileSize({props, states}, evt) {
  const {maxBytes, maxBytesError} = props
  const {setMaxBytesExceeded} = states
  const file = evt.target.files.item(0)
  if (file.size > maxBytes) {
    setMaxBytesExceeded(maxBytesError)
    resetInputFiled({props, states})
    return false
  } else {
    setMaxBytesExceeded(null)
    return true
  }
}

async function handleInput({props, states}, evt) {
  const withinFileLimit = validateFileSize({props, states}, evt)
  if (withinFileLimit) await upload({props}, evt)
}

export default (props) => {
  const [maxBytesExceeded, setMaxBytesExceeded] = React.useState(false)
  const [isUploading, setIsUploading] = React.useState(false)
  const [type, setType] = React.useState('file')
  const states = {
    maxBytesExceeded, setMaxBytesExceeded,
    type, setType,
    isUploading, setIsUploading,
  }
  React.useEffect(typeDidChange.bind(null, {props, states}), [type])
  return {
    ...props,
    progress: 30,
    maxBytesExceeded,
    isUploading,
    handleInput: handleInput.bind(null, {props, states}),
  }
}
