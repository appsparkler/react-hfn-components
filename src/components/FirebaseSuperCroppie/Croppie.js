import React from 'react'
import PropTypes from 'prop-types'

const Croppie = ({croppedDataURL, croppieRef}) => (
  <>
    {croppedDataURL && (
      <div className="col-4">
        <img className="img-thumbnail" src={croppedDataURL} />
      </div>
    )}
  </>
)

Croppie.propTypes = {
  croppedDataURL: PropTypes.string,
  croppieRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
}

export default Croppie
