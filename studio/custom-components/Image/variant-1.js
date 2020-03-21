import React from 'react'
import PropTypes from 'prop-types'
import useImage from '@react-hfn-hooks/useImage'
import Image from './Image'

const Image1 = ({src}) => {
  const config = useImage({src})
  return (<Image {...config} />)
}

Image1.propTypes = {
  src: PropTypes.string,
}

export default Image1
