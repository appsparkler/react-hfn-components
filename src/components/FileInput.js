import React from 'react'
// import {resolve} from 'path'

const DEFAULT_CONFIG = {
  maxBytes: 5000,
}

export default React.forwardRef(function({config=DEFAULT_CONFIG}, ref) {
  return (
    <input
      type="file"
      ref={ ref }
      className={ config.classNames || '' }
      onInput={ config.onInput || handleInput.bind(null, config, ref) }
      onChange={ config.onChange || handleChange }
      multiple={ config.multiple || false }
    />
  )
})

function handleChange() {
  console.info('change not handled yet!')
}

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
  try {
    if (config.filesToUpload && config.setFilesToUpload) {
      config.setFilesToUpload([
        ...evt.target.files,
      ])
    }
  } catch (e) {
    throw new Error(e)
  }
}

export function handleInput(config, ref, evt) {
  try {
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
  } catch (err) {
    console.error(err)
  }
}
