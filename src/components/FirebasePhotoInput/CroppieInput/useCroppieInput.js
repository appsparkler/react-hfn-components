import React from 'react'
import Croppie from 'croppie'
import {dataURItoBlob} from './utils'

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
  const {croppie, photoPreviewRef, maxBytes=(5 * 1000 * 1000)} = props
  if (croppie) {
    const croppedImg = await croppie.result()
    photoPreviewRef.current.src = croppedImg
    const blob = dataURItoBlob(croppedImg)
    const fileToUpload = new File([blob], 'photo')
    if (croppedImg?.length > maxBytes) {
      props.setExceedsMaxBytes(true)
    } else {
      props.setExceedsMaxBytes(false)
      props.setFile2Upload(fileToUpload)
    }
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
