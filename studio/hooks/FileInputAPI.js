import React from 'react'

export default (config) => {
  const [filesToUpload, setFilesToUpload] = React.useState()
  const [maxBytesExceeded, setMaxBytesExceeded] = React.useState(false)
  const [maxFilesExceeded, setMaxFilesExceeded] = React.useState(false)
  const fileInputRef = React.useRef()
  return {
    config: {
      ...config,
      filesToUpload, setFilesToUpload,
      maxBytesExceeded, setMaxBytesExceeded,
      maxFilesExceeded, setMaxFilesExceeded,
    },
    fileInputRef,
  }
}
