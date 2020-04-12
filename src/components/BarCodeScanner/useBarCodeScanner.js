import React from 'react'

import {
  getVideoInputDevices,
  startScanning,
  handleScanError,
  getCodeReader,
  stopScanning,
} from './utils'

function handleVideoInputDevices({
  setDevices, setSelectedDevice,
}, videoInputDevices,
) {
  setDevices(
      videoInputDevices.map((device) => ({
        key: device.deviceId,
        text: device.label,
      })))
}

function componentDidMount({
  setDevices, setSelectedDevice,
  codeReader,
}) {
  getVideoInputDevices(codeReader)
      .then(handleVideoInputDevices.bind(null, {
        setDevices, setSelectedDevice,
      }))
}

function devicesDidChange({setSelectedDeviceKey, devices}) {
  if (!devices || devices.length === 0) return
  setSelectedDeviceKey(devices[0].key)
}

function handleScanResult({
  setScanResult, setIsModalOpen, codeReader,
}, result, err) {
  if (result) {
    stopScanning({codeReader})
    setScanResult(result)
    setIsModalOpen(true)
  } else if (err) {
    handleScanError(err)
  }
}

function handleDeviceChange({setSelectedDeviceKey}, evt, selectedOption) {
  setSelectedDeviceKey(selectedOption.key)
}

export default () => {
  const codeReader = getCodeReader()
  const [devices, setDevices] = React.useState([])
  const [selectedDeviceKey, setSelectedDeviceKey] = React.useState(undefined)
  const [scanResult, setScanResult] = React.useState(null)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  //
  const videoRef = React.useRef()
  //
  React.useEffect(componentDidMount.bind(null, {
    setDevices, codeReader,
  }), [])
  React.useEffect(devicesDidChange.bind(null, {
    setSelectedDeviceKey, devices,
  }), [devices])
  //
  return {
    devices,
    videoRef,
    isModalOpen,
    selectedDeviceKey,
    scanResult,
    startScan: startScanning.bind(null, {
      codeReader,
      video: videoRef.current,
      selectedDeviceKey,
      handleResult: handleScanResult.bind(null, {
        setScanResult, setIsModalOpen, codeReader,
      }),
    }),
    stopScan: stopScanning.bind(null, {codeReader}),
    saveResult: () => setScanResult(null),
    resetResult: () => setScanResult(null),
    handleDeviceChange: handleDeviceChange.bind(null, {setSelectedDeviceKey}),
    closeModal: () => setIsModalOpen(false),
  }
}
