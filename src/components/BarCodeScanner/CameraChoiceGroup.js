import React from 'react'
import {Stack, ChoiceGroup} from 'office-ui-fabric-react'
import PropTypes from 'prop-types'

const CameraChoiceGroup = ({options}) => (
  <Stack.Item align="center">
    <ChoiceGroup
      label="Select Camera"
      options={options}
    />
  </Stack.Item>
)

CameraChoiceGroup.propTypes = {
  options: PropTypes.object.isRequired,
}

export default CameraChoiceGroup
