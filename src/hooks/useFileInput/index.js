import React from 'react'
import {FirebaseApp} from '@react-hfn-singletons/firebase-storage-api'

function resetInputFiled(evt) {
  evt.target.value = ''
  evt.target.value = 'file'
}

function validateNumberOfFiles({props, states}, evt) {
  const {maxFiles, maxFilesError} = props
  const {setValidationError} = states
  const {files} = evt.target
  const numberOfFiles = (files && files.length) || 0
  if (numberOfFiles >= maxFiles) {
    setValidationError(maxFilesError)
    resetInputFiled(evt)
  }
}


function uploadFiles({props, states}, evt) {
  validateNumberOfFiles({props, states}, evt)
  // if(totalFiles && (totalFiles < ))
  // validate # of files
  // validate bytes
  // validate
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

export default function useFileInput({props}) {
  ensureFirebaseApp()
  props = Object.assign(DEFAULT_PROPS, props)

  // States
  const [validationError, setValidationError] = React.useState('')
  const states = {
    validationError, setValidationError,
  }

  const inputAttrs = {
    type: props.type,
    multiple: props.multiple,
    className: props.className,
    name: props.name,
  }
  return {
    inputAttrs,
    uploadFiles: uploadFiles.bind(null, {props, states}),
    validationError,
  }
}
