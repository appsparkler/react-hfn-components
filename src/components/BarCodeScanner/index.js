import React from 'react'
import {
  Stack,
} from 'office-ui-fabric-react'
import Video from './Video'
import CameraChoiceGroup from './CameraChoiceGroup'
import ScanButton from './ScanButton'
import ConfirmationLayer from './ConfirmationLayer'
import useBarCodeScanner from './useBarCodeScanner'

const BarCodeScanner = () => {
  const {
    devices, videoRef,
    startScan, selectedDeviceKey, stopScan,
    scanResult, saveResult, resetResult,
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
      <ScanButton onStartButtonClick={startScan}
        onStopButtonClick={stopScan}
      />
      {scanResult && (
        <ConfirmationLayer
          result={scanResult}
          saveResult={saveResult}
          resetResult={resetResult}
        />
      )}
    </Stack>
  )
}

export default BarCodeScanner
