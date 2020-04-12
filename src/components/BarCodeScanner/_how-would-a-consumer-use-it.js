import React from 'react'
import useTheAwesomeBarCodeScanner from './useTheAwesomeBarCodeScanner'
// import PropTypes from 'prop-types'

const MyBarCodeScanner = ({}) => {
  const {
    videoRef,
    devices, selectedDevice, setDevice,
    startScan, stopScan,
    scanResult,
  } = useTheAwesomeBarCodeScanner()
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
              onChange={setDevice}
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
