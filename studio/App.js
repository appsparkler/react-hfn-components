import React from 'react'
import {FileInput} from '@appsparkler/react-hfn-components'

export default () => {
  const [filesToUpload, setFilesToUpload] = React.useState([])
  const fileInputRef = React.useRef()
  const config = {
    filesToUpload,
    setFilesToUpload,
    multiple: true,
    path: '/INABXK200',
  }
  return (
    <>
      <FileInput config={config} ref={fileInputRef} />
      <div>
        {filesToUpload.map((file, idx) => {
          return (
            <pre key={`${file.name}-${idx}`}>
              {file.name} - {file.size}bytes
              <br />
            </pre>
          )
        })}
      </div>
    </>
  )
}
