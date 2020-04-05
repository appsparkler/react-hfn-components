import React from 'react'

import {
  getBrowser,
  getVideoInputDevices,
  startScanning,
  handleScanError,
  getCodeReader,
  stopScanning,
} from './utils'

function handleVideoInputDevices({
  setDevices, setSelectedDevice}, videoInputDevices,
) {
  setDevices(
      videoInputDevices.map((device) => ({
        key: device.deviceId,
        text: device.label,
      })))
}

function componentDidMount({
  setDevices, setBrowser, setSelectedDevice,
  codeReader,
}) {
  setBrowser(getBrowser())
  getVideoInputDevices(codeReader)
      .then(handleVideoInputDevices.bind(null, {
        setDevices, setSelectedDevice,
      }))
}

function devicesDidChange({setSelectedDeviceKey, devices}) {
  if (!devices || devices.length === 0) return
  setSelectedDeviceKey(devices[0].key)
}

function handleScanResult(result, err) {
  if (result) {
    debugger
  } else if (err) {
    handleScanError(err)
  }
}

export default () => {
  const codeReader = getCodeReader()
  const [devices, setDevices] = React.useState([])
  const [browser, setBrowser] = React.useState('')
  const [selectedDeviceKey, setSelectedDeviceKey] = React.useState(undefined)
  //
  const videoRef = React.useRef()
  //
  React.useEffect(componentDidMount.bind(null, {
    setDevices, setBrowser, codeReader,
  }), [])
  React.useEffect(devicesDidChange.bind(null, {
    setSelectedDeviceKey, devices,
  }), [devices])

  return {
    devices,
    browser,
    videoRef,
    startScan: startScanning.bind(null, {
      codeReader,
      video: videoRef.current,
      selectedDeviceKey,
      handleResult: handleScanResult,
    }),
    stopScan: stopScanning.bind(null, {codeReader}),
    selectedDeviceKey,
  }
}
