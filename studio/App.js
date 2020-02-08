import React from 'react'
import {FileInput} from '@appsparkler/react-hfn-components'
import FileUploadDetails from './components/FileUploadDetails'
import FileInputConfig from './etc/FileInputConfig'

export default () => {
  // const [uploadDetails, setUploadDetails] = React.useState([])
  // FileInputConfig.uploadDetails = uploadDetails
  // FileInputConfig.setUploadDetails = setUploadDetails
  return (
    <>
      <h2>File Input Studio...</h2>
      <FileInput
        FileInputConfig={FileInputConfig}
      />
      {/* <FileUploadDetails uploadDetails={uploadDetails} />
      {uploadDetails.length}*/}
    </>
  )
}
