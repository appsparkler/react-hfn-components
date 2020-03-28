import React from 'react'
import PropTypes from 'prop-types'
import {
  ChoiceGroup,
} from 'office-ui-fabric-react'

const options = [
  {key: 'file', text: 'Upload', iconProps: {iconName: 'CloudUpload'}},
  {key: 'webcam', text: 'Webcam', iconProps: {iconName: 'Webcam2'}},
]

const MediaSourceForm = ({selectedKey, disabled}) => (
  <ChoiceGroup
    disabled={disabled}
    label="Pick one icon"
    selectedKey={selectedKey}
    options={options}
  />
)

MediaSourceForm.propTypes = {
  selectedKey: PropTypes.string,
  disabled: PropTypes.bool,
}

export default MediaSourceForm

export const MemoMediaSourceForm = React.memo(MediaSourceForm)
