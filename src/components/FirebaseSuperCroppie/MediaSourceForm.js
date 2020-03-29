import React from 'react'
import PropTypes from 'prop-types'
import {ChoiceGroup} from 'office-ui-fabric-react'


const options = [
  {key: 'file', text: 'Upload from file', iconProps: {iconName: 'Upload'}},
  {key: 'webcam', text: 'Use webcam', iconProps: {iconName: 'Webcam2'}},
]

const MediaSourceForm = ({disabled, mediaSource, handleMediaSourceChange}) => (
  <ChoiceGroup
    disabled={disabled}
    label="Choose Source"
    options={options}
    selectedKey={mediaSource}
    onChange={handleMediaSourceChange}
  />
)

MediaSourceForm.propTypes = {
  mediaSource: PropTypes.string,
  handleMediaSourceChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default MediaSourceForm
