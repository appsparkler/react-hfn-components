import React from 'react'
import {FileInput} from '@appsparkler/react-hfn-components'
import FileUploadDetails from './components/FileUploadDetails'
import FileInputConfig from './etc/FileInputConfig'

export default () => {
  [
    FileInputConfig.uploadDetails,
    FileInputConfig.setUploadDetails,
  ] = React.useState([])
  return (
    <>
      <h2>File Input Studio...</h2>
      <FileInput
        FileInputConfig={FileInputConfig}
      />
      {/**/}
      <FileUploadDetails uploadDetails={FileInputConfig.uploadDetails} />
      {FileInputConfig.uploadDetails.length}
    </>
  )
}
