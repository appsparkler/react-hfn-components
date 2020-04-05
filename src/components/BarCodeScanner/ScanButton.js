import React from 'react'
import PropTypes from 'prop-types'
import {
  Stack, DefaultButton,
} from 'office-ui-fabric-react'

const ScanButton = ({onClick}) => (
  <Stack.Item align="center">
    <DefaultButton
      secondary
      text="Start Scanning"
      onClick={onClick}
    />
  </Stack.Item>
)

ScanButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ScanButton
