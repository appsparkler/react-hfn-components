import React from 'react'

export default function({config={}}) {
  return (
    <input
      type="file"
      onInput={ setFilesToUpload.bind(null, config) }
      {...config}
    />
  )
}

function setFilesToUpload(config, evt) {
  try {
    const fileInput = evt.target
    const filesReadyForUpload = []
    for (let i = 0; i < fileInput.files.length; i++) {
      filesReadyForUpload.push(evt.target.files[i])
    }
    config.setFilesToUpload([
      ...config.filesToUpload,
      ...evt.target.files,
    ])
  } catch (err) {
    console.error(err)
  }
}
