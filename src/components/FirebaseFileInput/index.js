import React from 'react'
import ReadOnlyFileInput from './ReadOnlyFileInput'
import CompositeFileInput from './CompositeFileInput'
import './styles.sass'
import useFirebaseFileInput from './useFirebaseFileInput'

export default (props) => {
  const compositeProps = useFirebaseFileInput({props})
  const {readOnly} = compositeProps
  // return (
  //   <div>
  //     <div className="File-UnAvailable-State">
  //       <p>Upload Passport *</p>
  //       <button className="button">
  //         Upload File
  //       </button>
  //     </div>
  //
  //     <div className="File-UnAvailable-State">
  //       <p>Upload Passport *</p>
  //       <button className="button" disabled>
  //         Uploading...
  //       </button>
  //     </div>
  //
  //     <div className="File-Available-State verifying">
  //       <p>Upload Passport *</p>
  //       <span>Verifying...</span>
  //     </div>
  //
  //     <div className="File-Available-State">
  //       <p>Upload Passport *</p>
  //       <a href="">My passport</a>
  //       <button className="button">
  //         Edit
  //       </button>
  //     </div>
  //
  //     <div className="File-Available-State">
  //       <p>Upload Passport *</p>
  //       <span href="">My passport</span>
  //       <button className="button" disabled>
  //         Editing
  //       </button>
  //     </div>
  //
  //     <h1>Read Only Version</h1>
  //     <div className="ReadOnly-File-Available-State">
  //       <a href="">My passport</a>
  //     </div>
  //
  //     <div className="ReadOnly-File-UnAvailable-State">
  //       <p>No file is uploaded.</p>
  //     </div>
  //
  //   </div>
  // )
  return (
    <div className="React-HFN-FirebaseFileInput">
      {readOnly && <ReadOnlyFileInput {...compositeProps} /> }
      {!readOnly && <CompositeFileInput {...compositeProps} />}
    </div>
  )
}
