import React from 'react'
import Croppie from 'croppie'

function componentDidMount({props}) {
  const {
    selectedFile,
    croppieConfig,
    croppieRef,
    setCroppie,
  } = props
  const config = {
    url: selectedFile,
    ...croppieConfig,
  }
  const croppie = new Croppie(croppieRef.current, config)
  setCroppie(croppie)
}

async function handleCroppieUpdates({props}, evt) {
  const {croppie, photoPreviewRef} = props
  if (croppie) {
    const croppedImg = await croppie.result()
    photoPreviewRef.current.src = croppedImg
  }
}

function croppieDidChange({props}) {
  const {croppie} = props
  if (croppie?.element) {
    croppie.element.addEventListener(
        'update',
        handleCroppieUpdates.bind(null, {props}),
    )
  }
}
export default ({props}) => {
  React.useEffect(componentDidMount.bind(null, {props}), [])

  React.useEffect(croppieDidChange.bind(null, {props}), [props.croppie])

  return {
    photoPreviewRef: props.photoPreviewRef,
    croppieRef: props.croppieRef,
  }
}
