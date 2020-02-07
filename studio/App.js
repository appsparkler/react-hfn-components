import React from 'react'
import {FileInput} from '@appsparkler/react-hfn-components'

function handleSubmit(fileInputRef, config, evt) {
  evt.preventDefault()
  evt.stopPropagation()
  console.log(fileInputRef.current.files)
}

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
      <form onSubmit={handleSubmit.bind(null, fileInputRef, config)}>
        <FileInput config={config} ref={fileInputRef} />
        <button type="submit">Submit</button>
      </form>
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
