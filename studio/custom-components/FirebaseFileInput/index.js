import React from 'react'
import {
  connectFirebaseFileInput,
} from '@appsparkler/react-hfn-components'
import PropTypes from 'prop-types'
import config from './config'

const CustomFirebaseFileLink = ({isVerifying, file}) => {
  return (<div className="container">
    {isVerifying && 'Verifying...'}
    {
      !isVerifying && file && (
        <a
          href={file.downloadURL}
          target="__blank"
        >
          {file.fileName}
        </a>
      )
    }
    {!file && !isVerifying && 'No File Found...'}
  </div>)
}

CustomFirebaseFileLink.propTypes = {
  isVerifying: PropTypes.bool,
  file: PropTypes.object,
}

const CustomFirebaseFileInput = ({
  file, isVerifying,

  handleInput, type,
  maxBytes, maxBytesExceeded,
  isUploading, progress, uploaded,
}) => {
  return (
    <div className="container">
      <h2>Custtom File Input</h2>
      <table className="table table-striped table-bordered">
        <tbody>
          <tr>
            <td>
              <h3>File Link</h3>
              {!isUploading && <CustomFirebaseFileLink
                file={file}
                isVerifying={isVerifying}
              />}
              {isUploading && 'Uploading new file...'}
            </td>
            <td>
              <h3>Input Field</h3>
              {/* PASS label field as you like
            (it will not come from a variable)
            */}
              <label>
                {!file && 'Upload Visa'}
                {file && 'Edit Visa'}
              </label>
              {/* PASS attributes such as required, disabled
            (they will not come as variables)

            handleInput and type need to be passed
            since we are processing them
            */}
              <input
                type={type}
                required={true}
                onInput={handleInput}
              />
            </td>
            <td>
              <h3>Max Bytes Message:</h3>
              <p className="help-block">
              Max Bytes: {maxBytes && maxBytes.toFixed(2)} kB
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h3>Max Bytes Exceeded Errors:</h3>
              {maxBytesExceeded && (
                <p className="alert alert-danger">Max Bytes exceeded!</p>
              )}
            </td>
            <td colSpan="2">
              <h3>Progress Bar: </h3>
              {isUploading && (
                <div>
                  <progress
                    min="0"
                    max="100"
                    value={progress}
                  />
                  <br />
                  <p>{progress.toFixed(2)}%</p>
                </div>
              )}
              {isUploading && <span>Uploading...</span>}
              {uploaded && <pre>Uploaded...</pre>}
            </td>
          </tr>
        </tbody>
      </table>
    </div>)
}

CustomFirebaseFileInput.propTypes = {
  handleInput: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  file: PropTypes.object,
  isVerifying: PropTypes.bool,
  verifyFile: PropTypes.func,
  maxBytes: PropTypes.number,
  maxBytesExceeded: PropTypes.bool,
  isUploading: PropTypes.bool,
  uploaded: PropTypes.bool,
  progress: PropTypes.number,
}
// const CustomFirebaseFileInput = (props, ref) => {
//   const {
//     // YOU HAVE ALL THESE PROPS FOR YOUR CUSTOM COMPONENT
//     type, label, disabled, required, name,
//     progress, isUploading, uploaded,
//     maxBytes, maxBytesError,
//     isVerifying, file,
//     handleInput,
//     maxBytesExceeded,
//   } = props
//   return (
//     <div>
//       <h2>Custom File Input</h2>
//       <table>
//         <tr>
//           <td>
//             <h3>File Details:</h3>
//             {isVerifying && 'isVerifying...'}
//             {!file && !isVerifying && 'No File Uploaded...'}
//             {file && !isVerifying && (
//               <a href={file.downloadURL}>{file.fileName}</a>
//             )}
//             <br />
//           </td>
//           <td>
//             <h3>Action: </h3>
//             <h4>{!file && 'Upload File'}</h4>
//             <h4>{file && 'Edit File'}</h4>
//           </td>
//           <td>
//             <h3>Label</h3>
//             <label>
//               <span>{label}</span>
//               <span>{required && '*'}</span>
//             </label>
//           </td>
//           <td>
//             <h3>Input Field</h3>
//             {/* PASS THE REF TO THE INPUT ALONG WITH THESE PROPS */}
//             <input
//               type={type}
//               name={name}
//               onInput={handleInput}
//               ref={ref}
//               disabled={disabled}
//               required={required}
//             />
//           </td>
//         </tr>
//         <tr>
//           <td>
//             <h3>Max Bytes Message:</h3>
//             <p className="help-block">
//               Max Bytes: {maxBytes && maxBytes.toFixed(2)} kB
//             </p>
//           </td>
//           <td>
//             <h3>Max Bytes Exceeded Errors:</h3>
//             {maxBytesExceeded && (
//               <p className="alert alert-danger">{maxBytesError}</p>
//             )}
//           </td>
//           <td colSpan="2">
//             <h3>Progress Bar: </h3>
//             {(progress > 0) && !uploaded && (
//               <React.Fragment>
//                 <progress min="0" max="100" value={progress} />
//                 <br />
//                 {progress.toFixed(2)}%
//               </React.Fragment>
//             )}
//             {isUploading && <pre>Is Uploading...</pre>}
//             {uploaded && <pre>Uploaded...</pre>}
//           </td>
//         </tr>
//       </table>
//     </div>
//   )
// }

CustomFirebaseFileInput.propTypes = {
  // type: PropTypes.string,
  // label: PropTypes.string,
  // disabled: PropTypes.string,
  // required: PropTypes.string,
  // name: PropTypes.string,
  // progress: PropTypes.string,
  // isUploading: PropTypes.string,
  // uploaded: PropTypes.string,
  // maxBytes: PropTypes.number,
  // maxBytesError: PropTypes.string,
  // isVerifying: PropTypes.bool,
  // file: PropTypes.object,
  // handleInput: PropTypes.func,
  // maxBytesExceeded: PropTypes.bool,
}

export default connectFirebaseFileInput(CustomFirebaseFileInput, config)
