import React from 'react'

function resetInputFiled({props, states}, evt) {
  const {setFileType} = states
  setFileType('')
}

function validateFileSize({props, states}, evt) {
  const {maxBytes, maxBytesError} = props
  const {setValidationError} = states
  const {files} = evt.target
  const payloadSize = [...files].reduce((r, file) => r+file.size, 0)
  if (payloadSize > maxBytes) {
    setValidationError(maxBytesError)
    resetInputFiled({props, states}, evt)
    return false
  } else {
    setValidationError('')
    return true
  }
}

function upload({props, states}, evt) {
  const {files} = evt.target
  const file2Upload = [...files]
  file2Upload.forEach((file) => {
    const {storageRef} = props
    const fileUploadTask = storageRef
        .child(file.name)
        .put(file)
    // fileUploadTask.on('status_changes', (snapshot) => {
    //   console.log(snapshot)
    // }, (err)=> {
    //   console.log(err)
    // })
  })
}

function uploadFiles({props, states}, evt) {
  const withinFileLimit = validateFileSize({props, states}, evt)
  if (withinFileLimit) upload({props, states}, evt)
}

const DEFAULT_PROPS = {
  // Input attributes
  type: 'file',
  name: 'file',

  //
  maxBytes: 5 * 1024 * 1024, // 5 MB (TODO: add server side validation)
  maxBytesError: 'File exceeds upload limit',
}

function fileTypeDidChange({states}) {
  const {setFileType} = states
  setFileType('file')
}

export default function useFileInput({props}) {
  props = Object.assign(DEFAULT_PROPS, props)

  // States
  const [validationError, setValidationError] = React.useState('')
  const [fileType, setFileType] = React.useState(props.type)
  const states = {
    validationError, setValidationError,
    setFileType,
  }

  // Effects
  React.useEffect(fileTypeDidChange.bind(null, {states}), [fileType])

  const inputAttrs = {
    type: fileType,
    className: props.className,
    name: props.name,
  }
  return {
    inputAttrs,
    uploadFiles: uploadFiles.bind(null, {props, states}),
    validationError,
    maxBytes: props.maxBytes,
  }
}
