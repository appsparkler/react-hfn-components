import React from 'react'
import Croppie from 'croppie'

function dataURLDidChange({
  croppie, dataURL, croppieRef, setCroppie, croppieConfig,
}) {
  if (croppie) {
    croppie.bind({
      url: dataURL,
    })
  } else {
    const croppie = new Croppie(croppieRef.current, croppieConfig)
    croppie.bind({
      url: dataURL,
    })
    setCroppie(croppie)
  }
}

export default ({dataURL, croppieConfig}) => {
  const croppieRef = React.useRef()
  const [croppie, setCroppie] = React.useState()
  React.useEffect(dataURLDidChange.bind(null, {
    croppie, dataURL, croppieRef, setCroppie, croppieConfig,
  }), [dataURL])
  return {
    croppieRef,
  }
}
