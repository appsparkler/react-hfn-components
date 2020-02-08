import React from 'react'
import {FirebaseApp} from '../singletons/firebase-storage-api'
import path from 'path'
import useFileInputConfig from './hooks/FileInputConfig'

function checkFirebaseApp() {
  if (!FirebaseApp) {
    throw new Error('Please set the Firebase with setFirebase')
  }
}

const FileInput = ({FileInputConfig}, ref) => {
  checkFirebaseApp()
  const {config, fileInputRef} = useFileInputConfig(FileInputConfig)
  if (!ref) {
    ref = fileInputRef
  }
  return (
    <input
      type="file"
      ref={ ref }
      className={ (config && config.classNames) || ''}
      onInput={ config.onInput || defaultHandleInput.bind(null, config, ref) }
      multiple={ config.multiple || false }
    />
  )
}

// function defaultHandleChange() {}

// function uploadFiles({}) {
//   // const {files} = this
//   try {
//     const puts = []
//     for (let i = 0; i < files.length; i += 1) {
//       const file = files[i]
//       const filePath = resolve(path, file.name)
//       const ref = firebaseStorage.ref(filePath)
//       puts.push(ref.put(file))
//     }
//   } catch (e) {
//
//   }
// }

export function setFilesToUpload(config, ref, evt) {
  config.setMaxBytesExceeded(false)
  config.setMaxFilesExceeded(false)
  config.setFilesToUpload([
    ...evt.target.files,
  ])
  // if (config.filesToUpload && config.setFilesToUpload) {
  //
  // }
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
  // const fileUploadTask = docRef
  //     .put([...ref.current.files])
  const newUploadDetails = files.map((file) => {
    const filePath = path.resolve(config.path, file.name)
    return {
      file,
      uploadTask: FirebaseApp.storage().ref(filePath).put(file),
    }
  })
  setUploadDetails(newUploadDetails)
  // newUploadDetails.forEach(uploadEachFile.bind(null, ...arguments))
}

export function defaultHandleInput(config, ref, evt) {
  const payloadIsWithinLimit = isPayLoadWithinLimit(...arguments)
  if (payloadIsWithinLimit) setFilesToUpload(...arguments)
  if (payloadIsWithinLimit) uploadFiles(...arguments)
  // const state = {
  //   files: evt.target.files,
  //   maxBytes: config.maxBytes || 5000,
  // }
  // uploadFiles(config, evt)
  // // const saveFiles
  // const puts = []
  // for (let i = 0; i < files.length; i += 1) {
  //   const file = files[i]
  //   const filePath = resolve(path, file.name)
  //   const ref = firebaseStorage.ref(filePath)
  //   puts.push(ref.put(file))
  // }
  // const {target} = evt
  // const filesToUpload = [...target.files]
  // const totalBytes = filesToUpload.reduce((r, file) => r + file.size, 0)
  // if (totalBytes > maxBytes) {
  //   maxByteExceededCallback.call(null, arguments)
  //   target.value = null
  //   setFilesToUpload([])
  // } else {
  //   setFilesToUpload([
  //     ...target.files,
  //   ])
  // }
}

export default React.forwardRef(FileInput)
