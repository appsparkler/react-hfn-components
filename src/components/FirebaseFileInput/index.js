import React from 'react'
import useFirebaseFileInput from '@react-hfn-hooks/useFirebaseFileInput'
// import FileLink from '@react-hfn-components/FileLink'
import CompositeFileInput from '@react-hfn-components/CompositeFileInput'

export default (props) => {
  const {
    readOnly,
    // file,
    compositeFileInputProps,
  } = useFirebaseFileInput({props})
  return (
    <div className="React-HFN-FirebaseFileInput">
      {/* readOnly && !file && <p>No files stored</p>}
      {readOnly && <FileLink file={file}/>*/}
      {!readOnly && <CompositeFileInput {...compositeFileInputProps} />}
    </div>
  )
}
