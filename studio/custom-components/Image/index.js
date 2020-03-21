import React from 'react'
import PropTypes from 'prop-types'

function handleLoad({setImgLoaded}) {
  setImgLoaded(true)
}
const Image1 = ({src}) => {
  const [imgLoaded, setImgLoaded] = React.useState(false)
  return (
    <div>
      {!imgLoaded && '...is loading'}
      {<img src={src}
        className="img-thumbnail "
        hidden={!imgLoaded}
        onLoad={handleLoad.bind(null, {setImgLoaded})}
      />}
    </div>
  )
}

Image1.propTypes = {
  src: PropTypes.string,
}

export default Image1
