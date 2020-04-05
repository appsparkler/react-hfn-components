import React from 'react'
import {Stack, ChoiceGroup} from 'office-ui-fabric-react'

const CameraChoiceGroup = ({}) => (
  <Stack.Item align="center">
    <ChoiceGroup
      label="Select Camera"
      options={[{key: 'A', text: 'Option A'},
        {key: 'B', text: 'Option B'}]}
    />
  </Stack.Item>
)

export default CameraChoiceGroup
