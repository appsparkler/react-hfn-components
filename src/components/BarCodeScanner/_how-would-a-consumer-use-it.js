import React from 'react'
import useTheAwesomeBarCodeScanner from './useTheAwesomeBarCodeScanner'
// import PropTypes from 'prop-types'
/*eslint-disable*/
const MyBarCodeScanner = ({onScan}) => {
  const {
    videoRef, // the ref for the video-html-element
    devices, // list of devices to enumarate the input-radio-fields to select a device.
    selectedDevice, // the selected-recording-device (useful to enable or disable buttons if there are no devices selected)
    handleChange, // eslint-disable-line This can be passed to the radio-input button which will select the device
    startScan, // a method to start the scan
    stopScan, // a method to stop the scan
    scanResult, // the scan-result
  } = useTheAwesomeBarCodeScanner({onScan})
  React.useEffect(() => {
    // will be triggered whenever scan-result changes
  }, [scanResult])
  return (
    <div className="MyBarCodeScanner">
      <video ref={videoRef} height="300" width="300" />
      {
        devices.map((device) => {
          return ((
            <input
              key={device.key}
              type="radio"
              name="videoDevice"
              onChange={handleChange}
              value={device}
            />
          ))
        })
      }
      <button
        onClick={startScan}
        disabled={!selectedDevice}
      >
        Start Scanning
      </button>
      <button
        disabled={!selectedDevice}
        onClick={stopScan}>
          Stop Scanning
      </button>
      <pre>{JSON.stringify(scanResult)}</pre>
    </div>
  )
}

MyBarCodeScanner.propTypes = {
}


export default MyBarCodeScanner
