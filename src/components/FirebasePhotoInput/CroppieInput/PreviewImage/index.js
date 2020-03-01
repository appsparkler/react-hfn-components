import React from 'react'
import PropTypes from 'prop-types'

const PreviewImage = (props) => {
  return (
    <div className="PreviewImage col-xs-4">
      <h3 className="text-center text-muted">Preview</h3>
      <img className="center-block img-thumbnail"
        src=""
        ref={props && props.photoPreviewRef}
      />
    </div>
  )
}

PreviewImage.propTypes = {
  photoPreviewRef: PropTypes.object,
}

export default PreviewImage
