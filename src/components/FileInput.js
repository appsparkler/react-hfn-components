import React from 'react'
import FirebaseUtils from '../singletons/firebase-storage-api'
import useFileInputConfig from './hooks/FileInputConfig'

function checkStorageOnFirebaseUtils() {
  if (!FirebaseUtils.storage) {
    throw new Error('Please set storage on Firebase Utils')
  }
}

const FileInput = ({FileInputConfig}, ref) => {
  checkStorageOnFirebaseUtils()
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

export default React.forwardRef(FileInput)

// function defaultHandleChange() {}

// function uploadFiles({}) {
//   // const {files} = this
//   try {
//     const puts = []
//     for (let i = 0; i < files.length; i += 1) {
//       console.log(path, path)
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

function uploadFiles(config, ref, evt) {

}

export function defaultHandleInput(config, ref, evt) {
  const payloadWithinLimit = isPayLoadWithinLimit(...arguments)
  if (payloadWithinLimit) setFilesToUpload(...arguments)
  if (isPayLoadWithinLimit) uploadFiles(...arguments)
  // console.log('handling input')
  // const state = {
  //   files: evt.target.files,
  //   maxBytes: config.maxBytes || 5000,
  // }
  // uploadFiles(config, evt)
  // // const saveFiles
  // const puts = []
  // for (let i = 0; i < files.length; i += 1) {
  //   console.log(path, path)
  //   const file = files[i]
  //   const filePath = resolve(path, file.name)
  //   const ref = firebaseStorage.ref(filePath)
  //   puts.push(ref.put(file))
  // }
  // console.log(evt.target.files, storage)
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
