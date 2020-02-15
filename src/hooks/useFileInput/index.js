import React from 'react'
import {FirebaseApp} from '@react-hfn-singletons/firebase-storage-api'

function resetInputFiled({props, states}, evt) {
  const {setFileType} = states
  setFileType('')
}

function validateNumberOfFiles({props, states}, evt) {
  const {maxFiles, maxFilesError} = props
  const {setValidationError} = states
  const {files} = evt.target
  const numberOfFiles = (files && files.length) || 0
  if (numberOfFiles >= maxFiles) {
    setValidationError(maxFilesError)
    resetInputFiled({props, states}, evt)
    return false
  } else {
    setValidationError('')
    return true
  }
}


function uploadFiles({props, states}, evt) {
  validateNumberOfFiles({props, states}, evt)
}


function ensureFirebaseApp() {
  if (!FirebaseApp) {
    throw new Error('Please set the Firebase App with setFirebase')
  }
}

const DEFAULT_PROPS = {
  // Input attributes
  type: 'file',
  multiple: false,
  name: 'files',

  //
  filePath: 'react-hfn-components',
  maxFiles: 5, // (TODO: add server side validation)
  maxFilesError: 'max files exceeded. please re-try.',
  maxBytes: 5 * 1024 * 1024, // 5 MB (TODO: add server side validation)
  allowedFileTypes: ['png', 'jpg', 'pdf'],
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
    multiple: props.multiple,
    className: props.className,
    name: props.name,
  }
  return {
    inputAttrs,
    uploadFiles: uploadFiles.bind(null, {props, states}),
    validationError,
    maxFiles: props.maxFiles,
  }
}
