import React from 'react'
import PropTypes from 'prop-types'
import {DefaultButton} from 'office-ui-fabric-react'

const PreviewModal = ({imgSrc}) => (
  <div>
    <DefaultButton
      secondary
      text="Preview"
    />
  </div>
)

PreviewModal.propTypes = {
  imgSrc: PropTypes.string.isRequired,
}

export default PreviewModal
