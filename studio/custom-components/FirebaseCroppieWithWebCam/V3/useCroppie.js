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
    setCroppie(croppie)
  }
}

async function handleCroppieUpdates({
  croppie, setCroppedDataURL,
}) {
  const croppedDataURL = await croppie.result()
  setCroppedDataURL(croppedDataURL)
}

function croppieDidChange({croppie, setCroppedDataURL}) {
  if (croppie) {
    croppie.element.addEventListener(
        'update',
        handleCroppieUpdates.bind(null, {
          croppie, setCroppedDataURL,
        }),
    )
  }
}

export default ({dataURL, croppieConfig}) => {
  const croppieRef = React.useRef()
  const [croppie, setCroppie] = React.useState(null)
  const [croppedDataURL, setCroppedDataURL] = React.useState('')
  React.useEffect(dataURLDidChange.bind(null, {
    croppie, dataURL, croppieRef, setCroppie, croppieConfig,
  }), [dataURL])
  React.useEffect(croppieDidChange.bind(null, {
    croppie, setCroppedDataURL,
  }), [croppie])
  return {
    croppieRef,
    croppedDataURL,
  }
}
