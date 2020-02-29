import React from 'react'
import HelpBlock from '@react-hfn-components/HelpBlock'
import BSAlert from '@react-hfn-components/BSAlert'
import BSProgress from '@react-hfn-components/BSProgress'
import PropTypes from 'prop-types'
import useFileInput from './useFileInput'

const FileInput = (props) => {
  const {
    components, type, name, label, maxBytes, maxBytesError, progress,
    handleInput, maxBytesExceeded, isUploading,
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
        />
      )}

      {!components?.fileInput && (
        <div className="form-group">
          <label>{label}</label>
          <input
            type={type}
            name={name}
            onInput={handleInput}
          />
          <br />
          <BSProgress
            type="info"
            striped="true"
            progress="30"
          />
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
}

FileInput.defaultProps = {
  maxBytes: 1 * 1024 * 1024, // 1MB
  name: 'file',
  type: 'file',
}

export default FileInput
