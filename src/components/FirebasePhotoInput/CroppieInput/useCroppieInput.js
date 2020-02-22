import React from 'react'
import Croppie from 'croppie'

function componentDidMount(props) {
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
  // croppieRef.current.addEventListener('update', handleCroppieChange.bind(null, {props}))
}

async function handleCroppieUpdates({props}, evt) {
  const {croppie, photoPreviewRef} = props
  if (croppie) {
    const croppedImg = await croppie.result()
    photoPreviewRef.current.src = croppedImg
  }
}

function croppieDidChange(props) {
  const {croppie} = props
  if (croppie?.element) {
    croppie.element.addEventListener(
        'update',
        handleCroppieUpdates.bind(null, {props}),
    )
  }
}
export default ({props}) => {
  const [croppie, setCroppie] = React.useState(null)
  // const photoPreviewRef = React.useRef()
  // const croppieRef = React.useRef()

  React.useEffect(componentDidMount.bind(null, {
    selectedFile: props.selectedFile,
    croppieConfig: props.croppieConfig,
    croppieRef: props.croppieRef,
    setCroppie,
  }), [])

  React.useEffect(croppieDidChange.bind(null, {
    croppie, photoPreviewRef: props.photoPreviewRef,
  }), [croppie])

  return {
    photoPreviewRef: props.photoPreviewRef,
    croppieRef: props.croppieRef,
  }
}
