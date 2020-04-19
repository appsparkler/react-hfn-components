import React from 'react'
import {
  Stack,
} from 'office-ui-fabric-react'
import ProfilePhoto from './ProfilePhoto'
import {ModalBasicExample} from './FabricModal'

const WireFrame = () => {
  return (
    <Stack
      horizontalAlign="center"
      vertical
      gap="20"
      wrap
    >
      <ProfilePhoto />
      <ModalBasicExample />
      {/* <Stack.Item align="end">
        <Stack horizontalAlign="center" style={{width: '100vw'}}>
          <video src="https://youtu.be/MLeIBFYY6UY" controls={true}></video>
        </Stack>
      </Stack.Item>
      <Stack.Item>
        <Stack horizontalAlign="center" style={{width: '100vw'}}>
          <div>Croppie</div>
        </Stack>
      </Stack.Item>*/}
    </Stack>
  )
}

export default WireFrame
