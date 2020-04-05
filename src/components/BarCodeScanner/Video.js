import React from 'react'
import {Stack} from 'office-ui-fabric-react'

const Video = () => (
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
)

export default Video
