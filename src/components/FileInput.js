import React from 'react'
import FirebaseUtils from '../singletons/firebase-storage-api'

function checkStorageOnFirebaseUtils() {
  if (!FirebaseUtils.storage) {
    throw new Error('Please set storage on Firebase Utils')
  }
}

export default React.forwardRef(function({config}, ref) {
  checkStorageOnFirebaseUtils()
  return (
    <input
      type="file"
      ref={ ref }
      className={ (config && config.classNames) || ''}
      onInput={ config.onInput || defaultHandleInput.bind(null, config, ref) }
      multiple={ config.multiple || false }
    />
  )
})

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
  config.setFilesToUpload([
    ...evt.target.files,
  ])
  // if (config.filesToUpload && config.setFilesToUpload) {
  //
  // }
}

export function defaultHandleInput(config, ref, evt) {
  setFilesToUpload(config, ref, evt)
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
