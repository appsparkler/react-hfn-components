import React from 'react'
import HelpBlock from '@react-hfn-components/HelpBlock'
import BSAlert from '@react-hfn-components/BSAlert'
import BSProgress from '@react-hfn-components/BSProgress'
import PropTypes from 'prop-types'

const FileInput = ({components, label, maxBytes, maxBytesError}) => {
  const progress=30
  return (
    <>
      {components?.fileInput && (
        <components.fileInput
          label={label}
          maxBytes={maxBytes}
          maxBytesError={maxBytesError}
          progress={progress}
        />
      )}

      {!components?.fileInput && (
        <div className="form-group">
          <label>{label}</label>
          <input type="file" />
          <br />
          <BSProgress progress="30" />
          <HelpBlock msg={`${maxBytes.toFixed()}MB`} />
          <BSAlert type="danger" msg={`${maxBytesError}`} />
        </div>
      )}
    </>
  )
}

FileInput.propTypes = {
  components: PropTypes.object,
  label: PropTypes.string,
  maxBytes: PropTypes.number,
  maxBytesError: PropTypes.string,
}

FileInput.defaultProps = {
  maxBytes: 1 * 1024 * 1024, // 1MB
}

export default FileInput
