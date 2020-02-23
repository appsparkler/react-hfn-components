import React from 'react'

const PreviewImage = (props) => {
  return (
    <div className="PreviewImage">
      <h3>Preview:</h3>
      <img src="" ref={props?.photoPreviewRef} />
    </div>
  )
}

export default PreviewImage
