import React from 'react'
import PropTypes from 'prop-types'
import {DefaultButton} from 'office-ui-fabric-react'

const UploadButton = ({onClick, disabled}) => {
  return (
    <div className="UploadButton">
      <DefaultButton
        onClick={onClick}
        disabled={disabled}
        primary
        text="Upload Photo"
      />
    </div>
  )
}

UploadButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default UploadButton
