import React from 'react'
import PropTypes from 'prop-types'
import {
  DefaultButton, Modal, Image,
} from 'office-ui-fabric-react'

const PreviewModal = ({
  imgSrc, openModal, isOpen,
}) => (
  <div>
    <DefaultButton
      secondary
      text="Preview"
      onClick={openModal}
    />
    <Modal
      isOpen={isOpen}
    >
      <Image src={imgSrc} />
    </Modal>
  </div>
)

PreviewModal.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default PreviewModal
