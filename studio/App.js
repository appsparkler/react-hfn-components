import React from 'react'
import {FileInput} from '@appsparkler/react-hfn-components'
import useFileInputConfig from './hooks/FileInputAPI'
import FileInputConfig from './etc/FileInputConfig'

export default () => {
  return (
    <>
      <FileInput
        config={FileInputConfig}
      />
    </>
  )
}
