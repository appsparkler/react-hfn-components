import React from 'react'

import {
  getBrowser,
  getVideoInputDevices,
} from './utils'

function handleVideoInputDevices({setDevices}, videoInputDevices) {
  setDevices(
      videoInputDevices.map((device) => ({
        key: device.deviceId,
        text: device.label,
      })))
}

function componentDidMount({setDevices, setBrowser}) {
  setBrowser(getBrowser())
  getVideoInputDevices().then(handleVideoInputDevices.bind(null, {
    setDevices,
  }))
}

export default () => {
  const [devices, setDevices] = React.useState([])
  const [browser, setBrowser] = React.useState('')
  React.useEffect(componentDidMount.bind(null, {
    setDevices, setBrowser,
  }), [])

  return {
    devices,
    browser,
  }
}
