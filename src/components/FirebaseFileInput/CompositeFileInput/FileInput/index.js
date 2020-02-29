import React from 'react'
import HelpBlock from '@react-hfn-components/HelpBlock'
import PropTypes from 'prop-types'

const FileInput = ({components, label}) => (
  <>
    {components?.fileInput && (
      <components.fileInput
        label={label}
      />
    )}

    {!components?.fileInput && (
      <div className="form-group">
        <label>{label}</label>
        <input type="file" />
        <HelpBlock msg="Example block-level help text here." />
      </div>
    )}
  </>
)

FileInput.propTypes = {
  components: PropTypes.object,
  label: PropTypes.string,
}

export default FileInput
