import React from 'react'
import FirebaseApp from './setup'
import FileInput from '@components/FileInput'

export default {
  title: 'Firebase File Input',
}

export const defaultFileInput = () => {
  const [filesToUpload, setFilesToUpload] = React.useState([])
  const [classNames, setClassNames] = React.useState('')
  const inputRef = React.useRef()
  const config = {
    classNames,
    setClassNames,
    FirebaseApp,
    multiple: true,
    filesToUpload,
    setFilesToUpload,
    maxBytes: 1200 * 1024,
    maxByteExceededCallback: (...args) => alert('oops,max bytes exceeded!'),
  }
  return (
    <form>
      <FileInput config={config} ref={inputRef} />
      <button
        type="button"
        onClick={ () => console.log(inputRef.current.focus()) }>
        Focus the Input Field
      </button>
      {
        filesToUpload.map((file, idx) => (
          <div key={file.name}>{file.name}, Size: {file.size}bytes</div>
        ))
      }
    </form>
  )
}
