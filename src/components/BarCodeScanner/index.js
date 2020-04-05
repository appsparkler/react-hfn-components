import React from 'react'
import PropTypes from 'prop-types'
import {
  Stack,
} from 'office-ui-fabric-react'
import Video from './Video'
import CameraChoiceGroup from './CameraChoiceGroup'
import ScanButton from './ScanButton'
import ConfirmationLayer from './ConfirmationLayer'
import useBarCodeScanner from './useBarCodeScanner'

const BarCodeScanner = ({storageRef}) => {
  const {browser, devices} = useBarCodeScanner()
  return (
    <Stack
      align="center"
      tokens={{
        childrenGap: 20, padding: 10,
      }}
    >
      <Video />
      <CameraChoiceGroup
        options={devices}
      />
      <ScanButton />
      <ConfirmationLayer />
      <Stack.Item>
        <code>devices: {devices && JSON.stringify(devices)}</code>
        <br />
        <code>browser: {browser}</code>
      </Stack.Item>
    </Stack>
  )
}

BarCodeScanner.propTypes = {
  storageRef: PropTypes.object.isRequired,
}

export default BarCodeScanner
