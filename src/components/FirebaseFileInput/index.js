import React from 'react'
// import useFirebaseFileInput from './useFirebaseFileInput'
import FileLink from '@react-hfn-components/FileLink'
import CompositeFileInput from '@react-hfn-components/CompositeFileInput'

export default (props) => {
  const {readOnly} = props
  return (
    <div className="React-HFN-FirebaseFileInput">
      {/* readOnly && file && <FileLink {...props}/> */}
      {readOnly && <ReadOnlyFileInput {...props} /> }
      {!readOnly && <CompositeFileInput {...props} />}
    </div>
  )
}

function ReadOnlyFileInput(props) {
  const {file} = props
  return (
    <div className="ReadOnlyFileInput">
      {!file && <p>{(props && props.noFilesMessage) || 'No File Uploaded'}</p>}
      {file && <FileLink {...props} />}
    </div>
  )
}
