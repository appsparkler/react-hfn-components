import React from 'react'
// import ReadOnlyFileInput from '@react-hfn-components/ReadOnlyFileInput'
// import CompositeFileInput from '@react-hfn-components/CompositeFileInput'
import './styles.sass'

export default (props) => {
  // const {readOnly} = props
  return (
    <div>
      <div className="File-Un-Available-State">
        <p>Upload Passport *</p>
        <button className="button">
          Upload File
        </button>
      </div>

      <div className="File-Available-State">
        <p>Upload Passport *</p>
        <a href="">My passport</a>
        <button className="button">
          Change File
        </button>
      </div>

      <div className="ReadOnly-File-Available-State">
        <a href="">My passport</a>
      </div>

      <div className="ReadOnly-File-UnAvailable-State">
        <p>No file is uploaded.</p>
      </div>

    </div>)
  // return (
  //   <div className="React-HFN-FirebaseFileInput">
  //     {readOnly && <ReadOnlyFileInput {...props} /> }
  //     {!readOnly && <CompositeFileInput {...props} />}
  //   </div>
  // )
}
