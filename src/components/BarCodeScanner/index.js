import React from 'react'
import PropTypes from 'prop-types'
import {
  Stack,
} from 'office-ui-fabric-react'
import Video from './Video'
import CameraChoiceGroup from './CameraChoiceGroup'
import ScanButton from './ScanButton'
import ConfirmationLayer from './ConfirmationLayer'

const BarCodeScanner = ({storageRef}) => (
  <Stack
    align="center"
    tokens={{
      childrenGap: 20, padding: 10,
    }}
  >
    <Video />
    <CameraChoiceGroup />
    <ScanButton />
    <ConfirmationLayer />
  </Stack>
)

BarCodeScanner.propTypes = {
  storageRef: PropTypes.object.isRequired,
}

export default BarCodeScanner
