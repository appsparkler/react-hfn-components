import React from 'react'
import PropTypes from 'prop-types'

const Croppie = ({croppedDataURL, croppieRef}) => (
  <div className="row">
    <div className="col-8">
      <div ref={croppieRef}></div>
    </div>
    {croppedDataURL && <div className="col-4">
      <img className="img-thumbnail" src={croppedDataURL} />
    </div>}
  </div>
)

Croppie.propTypes = {
  croppedDataURL: PropTypes.string,
  croppieRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
}

export default Croppie
