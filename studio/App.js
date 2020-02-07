import React from 'react'
import {FileInput} from '@appsparkler/react-hfn-components'
import useFileInputConfig from './hooks/FileInputAPI'

function handleSubmit(fileInputRef, config, evt) {
  evt.preventDefault()
  evt.stopPropagation()
  console.log(fileInputRef.current.files)
}

export default () => {
  const {config, fileInputRef} = useFileInputConfig({
    multiple: true,
  })
  const {filesToUpload} = config
  return (
    <>
      <FileInput
        config={config}
        ref={fileInputRef}
      />
      { config.maxBytesExceeded ? 'max-bytes-exceeded': ''}
      { config.maxFilesExceeded ? 'max-files-exceeded': ''}
      <pre>{config.n}</pre>
      <pre>{filesToUpload && filesToUpload.length}</pre>
    </>
  )
}
