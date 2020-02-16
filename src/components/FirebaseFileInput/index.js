import React from 'react'

export default () => {
  const {isReadOnly} = useFirebaseFileInput()
  const file = {
    fileName: 'passport.jpg',
    downloadURL: 'https://google.com',
  }
  return (
    <div className="React-HFN-FirebaseFileInput">
      {isReadOnly && <FileLink file={file}/>}
      {!isReadOnly && <FileInput /> }
    </div>
  )
}

function FileInput() {
  return (
    <div>
      <input type="file" />
      <br />
    </div>
  )
}

function FileLink(props) {
  const {file} = props
  const {downloadURL, fileName} = file
  return (<a href={downloadURL}>{fileName}</a>)
}

function useFirebaseFileInput() {
  const [isReadOnly, setIsReadOnly] = React.useState(false)
  return {
    isReadOnly,
  }
}
