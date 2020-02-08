import React from 'react'
import {FirebaseApp} from '../singletons/firebase-storage-api'
import path from 'path'
import uuid from 'uuid/v1'

function checkFirebaseApp() {
  if (!FirebaseApp) {
    throw new Error('Please set the Firebase with setFirebase')
  }
}

const FileInput = ({config}, ref) => {
  checkFirebaseApp()

  if (!ref) {
    ref = config.fileInputRef
  }
  return (
    <input
      type="file"
      ref={ ref }
      className={ (config.classNames) || ''}
      onInput={ config.onInput || defaultHandleInput.bind(null, config, ref) }
      multiple={ config.multiple || false }
    />
  )
}

export function setFilesToUpload(config, ref, evt) {
  config.setMaxBytesExceeded(false)
  config.setMaxFilesExceeded(false)
  config.setFilesToUpload([
    ...evt.target.files,
  ])
}

function isPayLoadWithinLimit(config, ref, evt) {
  config.setMaxFilesExceeded(false)
  config.setMaxBytesExceeded(false)
  config.setFilesToUpload([])
  const result = false

  const allowedMaxBytes = config.maxBytes || (5 * 1024 * 1024)
  const payLoadInBytes = [...ref.current.files].reduce((r, file) => r + file.size, 0)

  const allowedNumberOfFiles = config.maxFiles || 5
  const numberOfFilesOnPayload = ref.current.files.length

  if (numberOfFilesOnPayload > allowedNumberOfFiles) {
    config.setMaxFilesExceeded(true)
    resetField(...arguments)
    console.info('file limit exceeded')
    return false
  }

  if (payLoadInBytes > allowedMaxBytes) {
    config.setMaxBytesExceeded(true)
    resetField(...arguments)
    console.info('bytes exceeded')
    return false
  }

  return true
}

function resetField(config, ref, evt) {
  ref.current.type = ''
  ref.current.type = 'file'
}

function uploadEachFile(config, ref, evt, uploadDetail, idx, uploadDetails) {
  const {file} = uploadDetail
  const filePath = path.resolve(config.path, file.name)
  const docRef = FirebaseApp.storage().ref(filePath)
  const fileUploadTask = docRef
      .put(file)
  fileUploadTask.on('state_changed', ({bytesTransferred, totalBytes}) => {
    const progress = (bytesTransferred / totalBytes) * 100
    uploadDetail.progress = progress
  })
}

function uploadFiles(config, ref, evt) {
  const {setUploadDetails} = config
  const files = [...ref.current.files]
  const newUploadDetails = files.map((file) => {
    const filePath = path.resolve(config.path, file.name)
    return {
      id: uuid(),
      file,
      uploadTask: FirebaseApp.storage().ref(filePath).put(file),
    }
  })
  setUploadDetails(newUploadDetails)
}

export function defaultHandleInput(config, ref, evt) {
  const payloadIsWithinLimit = isPayLoadWithinLimit(...arguments)
  if (payloadIsWithinLimit) setFilesToUpload(...arguments)
  if (payloadIsWithinLimit) uploadFiles(...arguments)
}

export default React.forwardRef(FileInput)
