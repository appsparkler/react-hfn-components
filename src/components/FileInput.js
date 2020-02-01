import React from 'react'
import {resolve} from 'path'

const DEFAULT_CONFIG = {
  maxBytes: 5000,
}

export default React.forwardRef(function({config=DEFAULT_CONFIG}, ref) {
  return (
    <input
      type="file"
      ref={ref}
      className={ config.classNames }
      onInput={ setFilesToUpload.bind(null, config) }
      onChange={ () => console.log('changed...')}
      multiple={config.multiple}
    />
  )
})

function setFilesToUpload({
  // maxByteExceededCallback,
  // maxBytes,
  // setFilesToUpload,
  path,
  firebaseStorage,
}, evt) {
  try {
    const files = evt.target.files
    const puts = []
    for (let i = 0; i < files.length; i += 1) {
      console.log(path, path)
      const file = files[i]
      const filePath = resolve(path, file.name)
      const ref = firebaseStorage.ref(filePath)
      puts.push(ref.put(file))
    }
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
