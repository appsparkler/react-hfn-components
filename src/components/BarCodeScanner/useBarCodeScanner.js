import React from 'react'

import {
  getBrowser,
  getVideoInputDevices,
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
  setDevices, setBrowser, setSelectedDevice}) {
  setBrowser(getBrowser())
  getVideoInputDevices().then(handleVideoInputDevices.bind(null, {
    setDevices, setSelectedDevice,
  }))
}

function devicesDidChange({setSelectedDeviceKey, devices}) {
  if (!devices || devices.length === 0) return
  setSelectedDeviceKey(devices[0].key)
}

function startScan(evt) {
}

export default () => {
  const [devices, setDevices] = React.useState([])
  const [browser, setBrowser] = React.useState('')
  const [selectedDeviceKey, setSelectedDeviceKey] = React.useState(undefined)
  //
  const videoRef = React.useRef()
  //
  React.useEffect(componentDidMount.bind(null, {
    setDevices, setBrowser,
  }), [])
  React.useEffect(devicesDidChange.bind(null, {
    setSelectedDeviceKey, devices,
  }), [devices])

  return {
    devices,
    browser,
    videoRef,
    startScan,
    selectedDeviceKey,
  }
}
