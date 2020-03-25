import React from 'react'
import PropTypes from 'prop-types'
import HOCPreviewModal from './hoc'
import usePreviewModal from './usePreviewModal'

const PreviewModal = ({imgSrc}) => {
  const config = usePreviewModal({imgSrc})
  return (<HOCPreviewModal {...config} />)
}

PreviewModal.propTypes = {
  imgSrc: PropTypes.string.isRequired,
}

export default PreviewModal
