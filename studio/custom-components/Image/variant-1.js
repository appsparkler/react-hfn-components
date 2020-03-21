import React from 'react'
import PropTypes from 'prop-types'
import useImage from '@react-hfn-hooks/useImage'

const Image1 = ({src}) => {
  const {isLoading, loaded} = useImage({src})
  return (
    <div>
      <button className="btn btn-primary rounded-0">
        Load Image
      </button>
      {isLoading && '...isLoading'}
      {loaded && <img src={src} className="img-thumbnail" />}
    </div>
  )
}

Image1.propTypes = {
  src: PropTypes.string,
}

export default Image1
