import React from 'react'
import HelpBlock from '@react-hfn-components/HelpBlock'
import PropTypes from 'prop-types'

const FileInput = ({components, label, maxBytes}) => (
  <>
    {components?.fileInput && (
      <components.fileInput
        label={label}
        maxBytes={maxBytes}
      />
    )}

    {!components?.fileInput && (
      <div className="form-group">
        <label>{label}</label>
        <input type="file" />
        <HelpBlock msg={`${maxBytes.toFixed()}MB`} />
      </div>
    )}
  </>
)

FileInput.propTypes = {
  components: PropTypes.object,
  label: PropTypes.string,
  maxBytes: PropTypes.number,
}

FileInput.defaultProps = {
  maxBytes: 1 * 1024 * 1024, // 1MB
}

export default FileInput
