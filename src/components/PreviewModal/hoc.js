import React from 'react'
import PropTypes from 'prop-types'
import {
  DefaultButton, Modal, Image, ImageFit, IconButton,
  getTheme, mergeStyleSets,
} from 'office-ui-fabric-react'

const theme = getTheme()

const iconButtonStyles = mergeStyleSets({
  root: {
    color: theme.palette.themePrimary,
    marginLeft: 'auto',
    marginTop: '4px',
    marginRight: '2px',
    display: 'block',
  },
})

const HOC = ({
  imgSrc, openModal, closeModal, isOpen,
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
      <div>
        <IconButton
          styles={iconButtonStyles}
          iconProps={{iconName: 'Cancel'}}
          onClick={closeModal}
        />
      </div>
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
  closeModal: PropTypes.func.isRequired,
}
