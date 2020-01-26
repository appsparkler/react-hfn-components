import React from 'react'
import FirebaseApp from './setup'
import FileInput from '@components/FileInput'

export default {
  title: 'Firebase File Input',
}

export const defaultFileInput = () => {
  const [filesToUpload, setFilesToUpload] = React.useState([])
  const config = {
    FirebaseApp,
    multiple: true,
    filesToUpload,
    setFilesToUpload,
  }
  return (
    <form>
      <FileInput config={config} />
      <input type="file" multiple />
      {
        filesToUpload.map((file, idx) => (
          <div key="a">{file.name}, {file.size}</div>
        ))
      }
    </form>
  )
}
