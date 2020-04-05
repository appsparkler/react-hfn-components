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
  const {
    browser, devices, videoRef,
    startScan, selectedDeviceKey,
  } = useBarCodeScanner()
  return (
    <Stack
      align="center"
      tokens={{
        childrenGap: 20, padding: 10,
      }}
    >
      <Video videoRef={videoRef}/>
      <CameraChoiceGroup
        options={devices}
        selectedKey={selectedDeviceKey}
      />
      <ScanButton onClick={startScan}/>
      <ConfirmationLayer />
      <Stack.Item>
        <code>devices: {devices && JSON.stringify(devices)}</code>
        <br />
        <code>browser: {browser}</code>
        <br />
        <code>selectedDeviceKey :
          {selectedDeviceKey && JSON.stringify(selectedDeviceKey)}
        </code>
      </Stack.Item>
    </Stack>
  )
}

BarCodeScanner.propTypes = {
  storageRef: PropTypes.object.isRequired,
}

export default BarCodeScanner
