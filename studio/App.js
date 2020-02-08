import React from 'react'
import {FileInput} from '@appsparkler/react-hfn-components'
import FileInputConfig from './etc/FileInputConfig'

export default () => {
  return (
    <>
      <h2>File Input Studio...</h2>
      <FileInput
        FileInputConfig={FileInputConfig}
      />
    </>
  )
}
