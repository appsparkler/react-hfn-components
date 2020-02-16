import React from 'react'
// import useFirebaseFileInput from './useFirebaseFileInput'
// import FileLink from '@react-hfn-components/FileLink'
import CompositeFileInput from '@react-hfn-components/CompositeFileInput'

export default (props) => {
  const {readOnly} = props
  // const {
  //   readOnly,
  //   // file,
  //   compositeFileInputProps,
  // } = useFirebaseFileInput({props})
  return (
    <div className="React-HFN-FirebaseFileInput">
      {/* readOnly && !file && <p>No files stored</p>}
      {readOnly && <FileLink file={file}/> */}
      {!readOnly && <CompositeFileInput {...props} />}
    </div>
  )
}
