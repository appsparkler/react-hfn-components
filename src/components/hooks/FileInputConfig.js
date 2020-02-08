import React from 'react'

const DEFAULT_CONFIG = {
  multiple: false,
  path: '/react-hfn-components',
  maxBytes: 5000,
  maxFiles: 5,
}

export default (userConfig) => {
  const config = {
    ...DEFAULT_CONFIG,
    ...userConfig,
  }
  if (!userConfig.uploadDetails || !userConfig.setUploadDetails) {
    [
      config.uploadDetails,
      config.setUploadDetails,
    ] = React.useState([])
  }
  const [filesToUpload, setFilesToUpload] = React.useState([])
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
