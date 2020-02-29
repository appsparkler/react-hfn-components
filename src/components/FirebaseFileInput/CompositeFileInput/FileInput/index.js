import React from 'react'
import HelpBlock from '@react-hfn-components/HelpBlock'
import BSAlert from '@react-hfn-components/BSAlert'
import BSProgress from '@react-hfn-components/BSProgress'
import FirebaseFileLink from '@react-hfn-components/FirebaseFileLink'
import PropTypes from 'prop-types'
import useFileInput from './useFileInput'

const FileInput = (props) => {
  const {
    components, type, name, label, maxBytes, maxBytesError, progress,
    handleInput, maxBytesExceeded, isUploading, file, disabled, required,
    uploaded, isVerifying,
  } = useFileInput(props)
  return (
    <>
      {components?.fileInput && (
        <>
          <FirebaseFileLink
            {...props}
          />
          <components.fileInput
            type={type}
            name={name}
            label={label}
            maxBytes={maxBytes}
            maxBytesError={maxBytesError}
            progress={progress}
            handleInput={handleInput}
            maxBytesExceeded={maxBytesExceeded}
            isUploading={isUploading}
            uploaded={uploaded}
            isVerifying={isVerifying}
            file={file}
          />
        </>
      )}

      {!components?.fileInput && (
        <div className="form-group">
          <FirebaseFileLink
            {...props}
          />
          <br />
          <label>{label}</label>
          <input
            type={type}
            name={name}
            onInput={handleInput}
            disabled={disabled}
            required={required}
          />
          <br />
          {isUploading && !uploaded && (
            <BSProgress
              type="info"
              striped={true}
              progress={progress}
            />
          )}
          {uploaded && <BSAlert type="info" msg="Uploaded..." />}
          <HelpBlock msg={`${maxBytes.toFixed()}MB`} />
          {maxBytesExceeded && (
            <BSAlert type="danger" msg={`${maxBytesError}`} />
          )}
        </div>
      )}
    </>
  )
}

FileInput.propTypes = {
  components: PropTypes.object,

  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,

  maxBytes: PropTypes.number,
  maxBytesError: PropTypes.string,

  file: PropTypes.object,
  setFile: PropTypes.func,

  storageRef: PropTypes.object.isRequired,
}

FileInput.defaultProps = {
  maxBytes: 1 * 1024 * 1024, // 1MB
  name: 'file',
  type: 'file',
  disabled: false,
  required: false,
}

export default FileInput
