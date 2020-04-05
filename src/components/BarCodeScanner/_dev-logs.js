import React from 'react'
import PropTypes from 'prop-types'
import {Stack} from 'office-ui-fabric-react'

const DevLogs = ({
  scanResult, devices, browser, selectedDeviceKey}) => (
  <Stack.Item>
    <code>scanResult: {scanResult && JSON.stringify(scanResult)}</code>
    <br />
    <code>devices: {devices && JSON.stringify(devices)}</code>
    <br />
    <code>browser: {browser}</code>
    <br />
    <code>selectedDeviceKey :
      {selectedDeviceKey && JSON.stringify(selectedDeviceKey)}
    </code>
  </Stack.Item>
)

DevLogs.propTypes = {
  scanResult: PropTypes.object,
  devices: PropTypes.object,
  browser: PropTypes.string,
  selectedDeviceKey: PropTypes.string,
}

export default DevLogs
