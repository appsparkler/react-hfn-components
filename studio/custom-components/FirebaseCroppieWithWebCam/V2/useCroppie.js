import React from 'react'
import Croppie from 'croppie'

function componentDidMount({croppieRef}) {
  const croppie = new Croppie(croppieRef.current, {
    viewport: {width: 100, height: 100},
    boundary: {width: 300, height: 300},
  })
}

export default () => {
  const croppieRef = React.useRef()
  React.useEffect(componentDidMount.bind(null, {croppieRef}), [])
  return {
    croppieRef,
  }
}
