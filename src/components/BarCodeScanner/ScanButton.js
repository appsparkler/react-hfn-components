import React from 'react'
import {
  Stack, DefaultButton,
} from 'office-ui-fabric-react'

const ScanButton = ({}) => (
  <Stack.Item align="center">
    <DefaultButton
      secondary
      text="Start Scanning"
    />
  </Stack.Item>
)

export default ScanButton
