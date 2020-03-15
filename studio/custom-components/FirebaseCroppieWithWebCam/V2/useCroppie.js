import React from 'react'
import Croppie from 'croppie'

function componentDidMount({croppieRef, dataURL}) {
  const croppie = new Croppie(croppieRef.current, {
    viewport: {width: 100, height: 100},
    boundary: {width: 300, height: 300},
  })
  croppie.bind({
    url: dataURL,
  })
}

export default ({dataURL}) => {
  const croppieRef = React.useRef()
  React.useEffect(componentDidMount.bind(null, {croppieRef, dataURL}), [])
  return {
    croppieRef,
  }
}
