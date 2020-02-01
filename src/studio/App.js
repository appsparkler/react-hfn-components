import React from 'react'
import FileInput from '../components/FileInput'
import FirebaseApp from './firebase-app'

export default () => {
  const firebaseStorage = FirebaseApp.storage()
  const [filesToUpload, setFilesToUpload] = React.useState([])
  const fileInputRef = React.useRef()
  const config = {
    filesToUpload,
    setFilesToUpload,
    firebaseStorage,
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
