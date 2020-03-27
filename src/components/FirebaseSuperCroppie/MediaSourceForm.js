import React from 'react'
import PropTypes from 'prop-types'
import {ChoiceGroup} from 'office-ui-fabric-react'


const options = [
  {key: 'file', text: 'Upload from file', iconProps: {iconName: 'Upload'}},
  {key: 'webcam', text: 'Use webcam', iconProps: {iconName: 'Webcam2'}},
]

const MediaSourceForm = ({mediaSource, handleMediaSourceChange}) => (
  <form>
    <div className="form-check form-check-inline">
      <ChoiceGroup
        label="Choose Source"
        options={options}
        selectedKey={mediaSource}
        onChange={handleMediaSourceChange}
      />
    </div>
  </form>
)

MediaSourceForm.propTypes = {
  mediaSource: PropTypes.string,
  handleMediaSourceChange: PropTypes.func.isRequired,
}

export default MediaSourceForm
