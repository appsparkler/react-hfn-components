import React from 'react'
import {
  Stack,
} from 'office-ui-fabric-react'
import Video from './Video'
import CameraChoiceGroup from './CameraChoiceGroup'
import ScanButton from './ScanButton'
// import ConfirmationLayer from './ConfirmationLayer'
import ResultModal from './ResultModal'
import useBarCodeScanner from './useBarCodeScanner'
//
import DevLogs from './_dev-logs'

const BarCodeScanner = () => {
  const {
    devices, videoRef,
    startScan, selectedDeviceKey, stopScan,
    scanResult, /* saveResult, resetResult,*/
    closeModal, isModalOpen,
    handleDeviceChange,
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
        onChange={handleDeviceChange}
      />
      <ScanButton onStartButtonClick={startScan}
        onStopButtonClick={stopScan}
      />
      {/* scanResult && (
        <ConfirmationLayer
          result={scanResult}
          saveResult={saveResult}
          resetResult={resetResult}
        />
      )*/}
      {scanResult && (
        <ResultModal
          isOpen={isModalOpen}
          content={scanResult.text}
          closeModal={closeModal}
        />
      )}
      <DevLogs
        scanResult={scanResult}
        devices={devices}
        selectedDeviceKey={selectedDeviceKey}
      />
    </Stack>
  )
}

export default BarCodeScanner
