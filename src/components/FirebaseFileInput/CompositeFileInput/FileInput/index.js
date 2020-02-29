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
    handleInput, maxBytesExceeded, isUploading, file,
  } = useFileInput(props)
  return (
    <>
      {components?.fileInput && (
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
          file={file}
        />
      )}

      {!components?.fileInput && (
        <div className="form-group">
          {!isUploading && <FirebaseFileLink storageRef={props.storageRef} />}
          <label>{label}</label>
          <input
            type={type}
            name={name}
            onInput={handleInput}
          />
          <br />
          {isUploading && (
            <BSProgress
              type="info"
              striped={true}
              progress={progress}
            />
          )}
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

  maxBytes: PropTypes.number,
  maxBytesError: PropTypes.string,

  storageRef: PropTypes.object,
}

FileInput.defaultProps = {
  maxBytes: 1 * 1024 * 1024, // 1MB
  name: 'file',
  type: 'file',
}

export default FileInput
