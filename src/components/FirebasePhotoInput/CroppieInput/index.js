import React from 'react'
import Croppie from 'croppie'
import 'croppie/croppie.css'

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
  debugger
  croppieRef.current.addEventListener(
      'update', handleCroppieChange.bind(null, {props}),
  )
}

// async function handleClick({croppie, imgRef}) {
//   const croppedImg= await croppie.result()
//   imgRef.current.src = croppedImg
// }

async function handleCroppieChange({props}, evt) {
  const {croppie} = props
  if (croppie) {
    const croppedImg = await croppie.result()
    imgPreviewRef.current.src = croppedImg
  }
}

function croppieDidChange({props}) {

}

const CroppieInput = (props) => {
  const {croppieRef, imgPreviewRef} = props
  React.useEffect(
      componentDidMount.bind(null, {props}),
      [],
  )
  React.useEffect(
      croppieDidChange.bind(null, {props}),
      [props.croppie],
  )
  return (
    <div
      className="RFHN-Croppie"
    >
      <div>
        <div ref={croppieRef} className="the-croppie"></div>
      </div>
      <img ref={imgPreviewRef} />
    </div>
  )
}

export default CroppieInput
