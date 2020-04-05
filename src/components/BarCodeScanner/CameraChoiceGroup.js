import React from 'react'
import {Stack, ChoiceGroup} from 'office-ui-fabric-react'
import PropTypes from 'prop-types'

const CameraChoiceGroup = ({options, selectedKey}) => (
  <Stack.Item align="center">
    <ChoiceGroup
      label="Select Camera"
      options={options}
      selectedKey={selectedKey}
    />
  </Stack.Item>
)

CameraChoiceGroup.propTypes = {
  options: PropTypes.array,
  selectedKey: PropTypes.string,
}

export default CameraChoiceGroup
