import React from 'react'
import FileInputConfig from './etc/FileInputConfig'
import {useFileInputConfig, FileInput, FileUploadDetails} from '@appsparkler/react-hfn-components'

export default () => {
  const config = useFileInputConfig(FileInputConfig)
  const {uploadDetails} = config
  return (
    <>
      <h1>Testing in progress...</h1>
      <FileInput
        config={config}
      />
      <FileUploadDetails uploadDetails={uploadDetails} />
    </>
  )
}
