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

async function handleCroppieUpdates({
  croppie, onCroppieUpdate,
}) {
  const croppedDataURL = await croppie.result()
  onCroppieUpdate(croppedDataURL)
}

function croppieDidChange({croppie, onCroppieUpdate}) {
  if (croppie) {
    croppie.element.addEventListener(
        'update',
        handleCroppieUpdates.bind(null, {
          croppie, onCroppieUpdate,
        }),
    )
  }
}

export default ({dataURL, croppieConfig, onCroppieUpdate}) => {
  const croppieRef = React.useRef()
  const [croppie, setCroppie] = React.useState()
  React.useEffect(dataURLDidChange.bind(null, {
    croppie, dataURL, croppieRef, setCroppie, croppieConfig,
  }), [dataURL])
  React.useEffect(croppieDidChange.bind(null, {
    croppie, onCroppieUpdate,
  }), [croppie])
  return {
    croppieRef,
  }
}
