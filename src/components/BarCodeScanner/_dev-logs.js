import React from 'react'
import PropTypes from 'prop-types'
import {Stack} from 'office-ui-fabric-react'

const DevLogs = ({
  scanResult, devices, selectedDeviceKey}) => (
  <Stack.Item>
    <pre>
      <code>scanResult: {scanResult && JSON.stringify(scanResult)}</code>
      <br />
      <code>devices: {devices && JSON.stringify(devices)}</code>
      <br />
      <code>selectedDeviceKey :
        {selectedDeviceKey && JSON.stringify(selectedDeviceKey)}
      </code>
    </pre>
  </Stack.Item>
)

DevLogs.propTypes = {
  scanResult: PropTypes.object,
  devices: PropTypes.object,
  browser: PropTypes.string,
  selectedDeviceKey: PropTypes.string,
}

export default DevLogs
