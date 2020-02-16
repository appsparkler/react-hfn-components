import React from 'react'

export default (props) => {
  const {
    readOnly,
    file,
    compositeFileInputProps,
  } = useFirebaseFileInput({props})
  return (
    <div className="React-HFN-FirebaseFileInput">
      {readOnly && !file && <p>No files stored</p>}
      {readOnly && <FileLink file={file}/>}
      {!readOnly && <CompositeFileInput {...compositeFileInputProps} />}
    </div>
  )
}

function useFileLinkWithDeleteButton({props}) {
  const {file, setFile} = props
  const deleteFile = () => {
    setFile(null)
  }

  return {
    deleteFile,
    file,
  }
}

function FileLinkWithDeleteButton(props) {
  const {deleteFile, file} = useFileLinkWithDeleteButton({props})
  return (
    <div>
      <FileLink file={file} />
      <br />
      <br />
      <button onClick={deleteFile}>Delete File</button>
      {/* */}
    </div>
  )
}
function FileInput() {
  return (
    <div>
      <input type="file" />
    </div>
  )
}

function CompositeFileInput(props) {
  const {file} = props
  return (
    <div>
      {file && <FileLinkWithDeleteButton {...props} />}
      {!file && <FileInput /> }
      <br />
    </div>
  )
}

function FileLink(props) {
  const {file} = props
  const {downloadURL, fileName} = file
  return (<a href={downloadURL}>{fileName}</a>)
}

function useFirebaseFileInput({props}) {
  const DEFAULT_PROPS = {
    file: null,
    readOnly: true,
  }
  props = Object.assign(DEFAULT_PROPS, props)
  const [file, setFile] = React.useState(props.file)
  return {
    readOnly: props.readOnly,
    file,
    compositeFileInputProps: {
      file,
      setFile,
    },
  }
}
