import React from 'react'
import PropTypes from 'prop-types'
import {
  Modal, IconButton, Stack,
  TextField,
} from 'office-ui-fabric-react'

const ResultModal = ({isOpen, content, closeModal}) => (
  <Modal isOpen={isOpen}>
    <Stack horizontal horizontalAlign="space-between">
      <Stack.Item align="center">
        <h4 style={{padding: '10px'}}>
          Results
        </h4>
      </Stack.Item>
      <Stack.Item align="center" >
        <IconButton
          iconProps={{iconName: 'Cancel'}}
          ariaLabel="Close popup modal"
          onClick={closeModal}
        />
      </Stack.Item>
    </Stack>

    <Stack horizontal horizontalAlign="center">
      <Stack.Item>
        <TextField
          label="Result"
          multiline rows={3}
          defaultValue={content}
        />
      </Stack.Item>
    </Stack>

  </Modal>
)

ResultModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
}

ResultModal.defaultProps = {
  isOpen: false,
  content: 'Hello World!!!',
  closeModal: () => {},
}

export default ResultModal
