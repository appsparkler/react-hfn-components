import React from 'react'
import PropTypes from 'prop-types'
import {DefaultButton} from 'office-ui-fabric-react'

const inputStyles = {
  position: 'absolute',
  left: 0, right: 0,
  bottom: 0, top: 0,
  opacity: 0,
  width: '100%',
}

const FileInputButton = ({
  primary, secondary, onChange, disabled, text,
}) => (
  <div >
    <DefaultButton
      style={{root: {position: 'relative'}}}
      primary={secondary}
      secondary={primary}
      disabled={disabled}
      text={text}
    >
      <input type='file'
        style={inputStyles}
        disabled={disabled}
        onChange={onChange}
      />
    </DefaultButton>
  </div>
)

FileInputButton.propTypes = {
  file: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default FileInputButton
