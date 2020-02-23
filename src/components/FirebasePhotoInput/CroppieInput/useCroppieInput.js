import React from 'react'
import Croppie from 'croppie'
import {dataURItoBlob} from './utils'

function selectedFileDidChange({props}) {
  const {
    selectedFile,
    croppieConfig,
    croppieRef,
    setCroppie,
    croppie,
  } = props
  if (!croppie) {
    const config = {
      ...croppieConfig,
      url: selectedFile,
    }
    const newCroppie = new Croppie(croppieRef.current, config)
    setCroppie(newCroppie)
  }
  croppie?.bind({
    url: selectedFile,
  })
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
  // React.useEffect() TODO - on change in selected file - destroy existing croppie and set it to null
  // TODO
  React.useEffect(selectedFileDidChange.bind(null, {props}), [props.selectedFile])
  React.useEffect(croppieDidChange.bind(null, {props}), [props.croppie])
  return {
    ...props,
    photoPreviewRef: props.photoPreviewRef,
    croppieRef: props.croppieRef,
  }
}
