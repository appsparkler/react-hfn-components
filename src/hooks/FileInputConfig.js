import React from 'react'

const DEFAULT_CONFIG = {
  multiple: false,
  path: '/react-hfn-components',
  maxBytes: 5000,
  maxFiles: 5,
}

const useFileInputConfig = (userConfig) => {
  const config = {
    ...DEFAULT_CONFIG,
    ...userConfig,
  }
  const [uploadDetails, setUploadDetails] = React.useState([])
  const [filesToUpload, setFilesToUpload] = React.useState([])
  const [maxBytesExceeded, setMaxBytesExceeded] = React.useState(false)
  const [maxFilesExceeded, setMaxFilesExceeded] = React.useState(false)
  const fileInputRef = React.useRef()
  return {
    ...config,
    filesToUpload, setFilesToUpload,
    maxBytesExceeded, setMaxBytesExceeded,
    maxFilesExceeded, setMaxFilesExceeded,
    uploadDetails, setUploadDetails,
    fileInputRef,
  }
}

export default useFileInputConfig
