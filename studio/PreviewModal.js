import React from 'react'
import PropTypes from 'prop-types'
import {
  DefaultButton, Modal, Image, ImageFit,
} from 'office-ui-fabric-react'
import usePreviewModal from './usePreviewModal'

const HOC = ({
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
      <Image
        src={imgSrc}
        imageFit={ImageFit.contain}
        height={300}
      />
    </Modal>
  </div>
)

HOC.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

const PreviewModal = ({imgSrc}) => {
  const config = usePreviewModal({imgSrc})
  return (<HOC {...config} />)
}

PreviewModal.propTypes = {
  imgSrc: PropTypes.string.isRequired,
}

export default PreviewModal
