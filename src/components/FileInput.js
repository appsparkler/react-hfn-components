import React from 'react'

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
  maxByteExceededCallback,
  maxBytes,
  setFilesToUpload,
}, evt) {
  try {
    const {target} = evt
    const filesToUpload = [...target.files]
    const totalBytes = filesToUpload.reduce((r, file) => r + file.size, 0)
    if (totalBytes > maxBytes) {
      maxByteExceededCallback.call(null, arguments)
      target.value = null
      setFilesToUpload([])
    } else {
      setFilesToUpload([
        ...target.files,
      ])
    }
  } catch (err) {
    console.error(err)
  }
}
