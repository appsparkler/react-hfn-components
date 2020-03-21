import React from 'react'
import PropTypes from 'prop-types'

const Image = ({src, handleLoad, isLoading, loaded}) => (
  <div>
    {loaded && <img src={src} onLoad={handleLoad}/>}
    {isLoading && '.../isLoading'}
  </div>
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
  handleLoad: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
}

export default Image
