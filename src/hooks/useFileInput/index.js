import React from 'react'
import {FirebaseApp} from '@react-hfn-singletons/firebase-storage-api'

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
  // const {maxFiles, maxFilesError} = props
  // const {setValidationError} = states
  // const {files} = evt.target
  // const numberOfFiles = (files && files.length) || 0
  // if (numberOfFiles >= maxFiles) {
  //   setValidationError(maxFilesError)
  //   resetInputFiled({props, states}, evt)
  //   return false
  // } else {
  //   setValidationError('')
  //   return true
  // }
}


function uploadFiles({props, states}, evt) {
  validateFileSize({props, states}, evt)
}


function ensureFirebaseApp() {
  if (!FirebaseApp) {
    throw new Error('Please set the Firebase App with setFirebase')
  }
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
  ensureFirebaseApp()
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
