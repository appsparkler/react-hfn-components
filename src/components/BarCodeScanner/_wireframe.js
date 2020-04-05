import React from 'react'
import {
  Stack,
  DefaultButton,
} from 'office-ui-fabric-react'

const BarCodeScannerWireframe = ({}) => (
  <Stack
    tokens={{
      childrenGap: 20, padding: 10,
    }}
    style={{outline: '1px blue solid'}}
  >
    <Stack.Item align="center">
      <div style={{
        width: '300px', height: '300px',
        outline: '1px blue solid',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}>
        Video
      </div>
    </Stack.Item>
    <Stack.Item align="center">
      <DefaultButton
        secondary
        text="Start Scanning"
      />
    </Stack.Item>
  </Stack>
)

export default BarCodeScannerWireframe
